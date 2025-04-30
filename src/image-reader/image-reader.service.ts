import { Injectable } from '@nestjs/common';
import ollama from 'ollama';
import * as fs from 'fs';
import * as path from 'path';

@Injectable()
export class ImageReaderService {
  constructor() {
    // Ensure uploads directory exists
    const uploadsDir = path.join(process.cwd(), 'uploads');
    if (!fs.existsSync(uploadsDir)) {
      fs.mkdirSync(uploadsDir, { recursive: true });
    }
  }

  async create(file: Express.Multer.File) {
    if (!file) {
      throw new Error('No file received');
    }

    return await ollama.chat({
      model: 'llama3.2-vision',
      messages: [
        {
          role: 'user',
          content:
            'Transcribe all text exactly as it appears in the image. Do not interpret, translate, or modify anything — just copy the text verbatim.',
          images: [file.path],
        },
      ],
    });
  }
}
