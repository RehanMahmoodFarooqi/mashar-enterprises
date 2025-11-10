import { NextRequest, NextResponse } from 'next/server';
import { runQuery, runQueryExecute, runQuerySingle } from '@/lib/db';
import jwt from 'jsonwebtoken';
import { writeFile, mkdir } from 'fs/promises';
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

// GET all announcements (public)
export async function GET(request: NextRequest) {
  try {
    const announcements = await runQuery<Announcement>(
      'SELECT * FROM announcements ORDER BY created_at DESC'
    );

    return NextResponse.json({
      success: true,
      announcements,
    });
  } catch (error) {
    console.error('Get announcements error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch announcements' },
      { status: 500 }
    );
  }
}

// POST new announcement (admin only)
export async function POST(request: NextRequest) {
  try {
    // Verify authentication
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

    const formData = await request.formData();
    const title = formData.get('title') as string;
    const content = formData.get('content') as string;
    const type = formData.get('type') as string || 'announcement';
    const imageFile = formData.get('image') as File | null;
    const videoFile = formData.get('video') as File | null;

    if (!title || !content) {
      return NextResponse.json(
        { error: 'Title and content are required' },
        { status: 400 }
      );
    }

    let imagePath = null;
    let videoPath = null;

    // Handle image upload
    if (imageFile) {
      const uploadDir = path.join(process.cwd(), 'public', 'uploads');
      await mkdir(uploadDir, { recursive: true });

      const buffer = await imageFile.arrayBuffer();
      const filename = `${Date.now()}-${imageFile.name}`;
      const filepath = path.join(uploadDir, filename);

      await writeFile(filepath, Buffer.from(buffer));
      imagePath = `/uploads/${filename}`;
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
    }

    // Insert announcement into database
    const result = await runQueryExecute(
      `INSERT INTO announcements (title, content, type, image_path, video_path, created_by)
       VALUES (?, ?, ?, ?, ?, ?)`,
      [title, content, type, imagePath, videoPath, decoded.id]
    );

    return NextResponse.json({
      success: true,
      announcement: {
        id: result.lastID,
        title,
        content,
        type,
        image_path: imagePath,
        video_path: videoPath,
        created_by: decoded.id,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
      },
    });
  } catch (error) {
    console.error('Create announcement error:', error);
    return NextResponse.json(
      { error: 'Failed to create announcement' },
      { status: 500 }
    );
  }
}

