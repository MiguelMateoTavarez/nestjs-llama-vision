import { Module } from '@nestjs/common';
import { ImageReaderService } from './image-reader.service';
import { ImageReaderController } from './image-reader.controller';
import { MulterModule } from '@nestjs/platform-express';
import { diskStorage } from 'multer';

@Module({
  controllers: [ImageReaderController],
  providers: [ImageReaderService],
  imports: [
    MulterModule.register({
      storage: diskStorage({
        destination: './tmp',
        filename: (req, file, cb) => {
          const filename = `${Date.now()} - ${file.originalname}`;
          cb(null, filename);
        },
      }),
    }),
  ],
})
export class ImageReaderModule {}
