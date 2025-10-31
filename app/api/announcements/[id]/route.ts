import { NextRequest, NextResponse } from 'next/server';
import { runQuerySingle, runQueryExecute } from '@/lib/db';
import jwt from 'jsonwebtoken';
import { writeFile, mkdir, unlink } from 'fs/promises';
import path from 'path';

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key-change-in-production';

interface Announcement {
  id: number;
  title: string;
  content: string;
  type: string;
  image_path: string | null;
  video_path: string | null;
  created_by: number;
  created_at: string;
  updated_at: string;
}

// GET single announcement
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const resolvedParams = await params;
    const id = parseInt(resolvedParams.id);

    const announcement = await runQuerySingle<Announcement>(
      'SELECT * FROM announcements WHERE id = ?',
      [id]
    );

    if (!announcement) {
      return NextResponse.json(
        { error: 'Announcement not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      announcement,
    });
  } catch (error) {
    console.error('Get announcement error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch announcement' },
      { status: 500 }
    );
  }
}

// PUT update announcement (admin only)
export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const token = request.cookies.get('auth_token')?.value;

    if (!token) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    let decoded: any;
    try {
      decoded = jwt.verify(token, JWT_SECRET);
    } catch (err) {
      return NextResponse.json(
        { error: 'Invalid or expired token' },
        { status: 401 }
      );
    }

    const resolvedParams = await params;
    const id = parseInt(resolvedParams.id);

    // Get existing announcement
    const existing = await runQuerySingle<Announcement>(
      'SELECT * FROM announcements WHERE id = ?',
      [id]
    );

    if (!existing) {
      return NextResponse.json(
        { error: 'Announcement not found' },
        { status: 404 }
      );
    }

    const formData = await request.formData();
    const title = (formData.get('title') as string) || existing.title;
    const content = (formData.get('content') as string) || existing.content;
    const type = (formData.get('type') as string) || existing.type;
    const imageFile = formData.get('image') as File | null;
    const videoFile = formData.get('video') as File | null;

    let imagePath = existing.image_path;
    let videoPath = existing.video_path;

    // Handle image upload
    if (imageFile) {
      const uploadDir = path.join(process.cwd(), 'public', 'uploads');
      await mkdir(uploadDir, { recursive: true });

      const buffer = await imageFile.arrayBuffer();
      const filename = `${Date.now()}-${imageFile.name}`;
      const filepath = path.join(uploadDir, filename);

      await writeFile(filepath, Buffer.from(buffer));
      imagePath = `/uploads/${filename}`;

      // Delete old image if exists
      if (existing.image_path) {
        try {
          const oldPath = path.join(process.cwd(), 'public', existing.image_path);
          await unlink(oldPath);
        } catch (err) {
          // File might not exist
        }
      }
    }

    // Handle video upload
    if (videoFile) {
      const uploadDir = path.join(process.cwd(), 'public', 'uploads');
      await mkdir(uploadDir, { recursive: true });

      const buffer = await videoFile.arrayBuffer();
      const filename = `${Date.now()}-${videoFile.name}`;
      const filepath = path.join(uploadDir, filename);

      await writeFile(filepath, Buffer.from(buffer));
      videoPath = `/uploads/${filename}`;

      // Delete old video if exists
      if (existing.video_path) {
        try {
          const oldPath = path.join(process.cwd(), 'public', existing.video_path);
          await unlink(oldPath);
        } catch (err) {
          // File might not exist
        }
      }
    }

    // Update announcement
    await runQueryExecute(
      `UPDATE announcements 
       SET title = ?, content = ?, type = ?, image_path = ?, video_path = ?, updated_at = CURRENT_TIMESTAMP
       WHERE id = ?`,
      [title, content, type, imagePath, videoPath, id]
    );

    return NextResponse.json({
      success: true,
      announcement: {
        id,
        title,
        content,
        type,
        image_path: imagePath,
        video_path: videoPath,
        created_by: existing.created_by,
        created_at: existing.created_at,
        updated_at: new Date().toISOString(),
      },
    });
  } catch (error) {
    console.error('Update announcement error:', error);
    return NextResponse.json(
      { error: 'Failed to update announcement' },
      { status: 500 }
    );
  }
}

// DELETE announcement (admin only)
export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const token = request.cookies.get('auth_token')?.value;

    if (!token) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    let decoded: any;
    try {
      decoded = jwt.verify(token, JWT_SECRET);
    } catch (err) {
      return NextResponse.json(
        { error: 'Invalid or expired token' },
        { status: 401 }
      );
    }

    const resolvedParams = await params;
    const id = parseInt(resolvedParams.id);

    // Get announcement to delete files
    const announcement = await runQuerySingle<Announcement>(
      'SELECT * FROM announcements WHERE id = ?',
      [id]
    );

    if (!announcement) {
      return NextResponse.json(
        { error: 'Announcement not found' },
        { status: 404 }
      );
    }

    // Delete files
    if (announcement.image_path) {
      try {
        const imagePath = path.join(process.cwd(), 'public', announcement.image_path);
        await unlink(imagePath);
      } catch (err) {
        // File might not exist
      }
    }

    if (announcement.video_path) {
      try {
        const videoPath = path.join(process.cwd(), 'public', announcement.video_path);
        await unlink(videoPath);
      } catch (err) {
        // File might not exist
      }
    }

    // Delete from database
    await runQueryExecute(
      'DELETE FROM announcements WHERE id = ?',
      [id]
    );

    return NextResponse.json({
      success: true,
      message: 'Announcement deleted successfully',
    });
  } catch (error) {
    console.error('Delete announcement error:', error);
    return NextResponse.json(
      { error: 'Failed to delete announcement' },
      { status: 500 }
    );
  }
}

