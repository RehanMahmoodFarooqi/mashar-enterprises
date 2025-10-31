import sqlite3 from 'sqlite3';
import path from 'path';

const DB_PATH = path.join(process.cwd(), 'data', 'mashar.db');

// Ensure data directory exists
import { mkdirSync } from 'fs';
try {
  mkdirSync(path.join(process.cwd(), 'data'), { recursive: true });
} catch (err) {
  // Directory already exists
}

let db: sqlite3.Database | null = null;

export function getDatabase(): Promise<sqlite3.Database> {
  return new Promise((resolve, reject) => {
    if (db) {
      resolve(db);
      return;
    }

    db = new sqlite3.Database(DB_PATH, (err) => {
      if (err) {
        reject(err);
      } else {
        // Enable foreign keys
        db!.run('PRAGMA foreign_keys = ON', (err) => {
          if (err) {
            reject(err);
          } else {
            initializeTables();
            resolve(db!);
          }
        });
      }
    });
  });
}

function initializeTables() {
  if (!db) return;

  // Create admin users table
  db.run(`
    CREATE TABLE IF NOT EXISTS admin_users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      username TEXT UNIQUE NOT NULL,
      password TEXT NOT NULL,
      email TEXT UNIQUE NOT NULL,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )
  `);

  // Create announcements table
  db.run(`
    CREATE TABLE IF NOT EXISTS announcements (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      title TEXT NOT NULL,
      content TEXT NOT NULL,
      type TEXT DEFAULT 'announcement',
      image_path TEXT,
      video_path TEXT,
      created_by INTEGER NOT NULL,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      updated_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      FOREIGN KEY (created_by) REFERENCES admin_users(id)
    )
  `);

  // Create default admin user if it doesn't exist
  const bcrypt = require('bcryptjs');
  const defaultPassword = bcrypt.hashSync('admin123', 10);

  db.run(
    `INSERT OR IGNORE INTO admin_users (id, username, password, email) VALUES (1, 'admin', ?, 'admin@masharenterprises.com')`,
    [defaultPassword],
    (err) => {
      if (err) {
        console.error('Error creating default admin user:', err);
      }
    }
  );
}

export function runQuery<T>(
  query: string,
  params: any[] = []
): Promise<T[]> {
  return new Promise(async (resolve, reject) => {
    const database = await getDatabase();
    database.all(query, params, (err, rows) => {
      if (err) {
        reject(err);
      } else {
        resolve((rows || []) as T[]);
      }
    });
  });
}

export function runQuerySingle<T>(
  query: string,
  params: any[] = []
): Promise<T | null> {
  return new Promise(async (resolve, reject) => {
    const database = await getDatabase();
    database.get(query, params, (err, row) => {
      if (err) {
        reject(err);
      } else {
        resolve((row || null) as T | null);
      }
    });
  });
}

export function runQueryExecute(
  query: string,
  params: any[] = []
): Promise<{ lastID: number; changes: number }> {
  return new Promise(async (resolve, reject) => {
    const database = await getDatabase();
    database.run(query, params, function (err) {
      if (err) {
        reject(err);
      } else {
        resolve({
          lastID: this.lastID,
          changes: this.changes,
        });
      }
    });
  });
}

