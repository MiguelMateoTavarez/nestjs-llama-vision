import {
  Controller,
  Post,
  UseInterceptors,
  UploadedFile,
  Logger,
} from '@nestjs/common';
import { ImageReaderService } from './image-reader.service';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('image-reader')
export class ImageReaderController {
  private readonly logger = new Logger(ImageReaderController.name);
  constructor(private readonly imageReaderService: ImageReaderService) {}

  @Post()
  @UseInterceptors(FileInterceptor('file'))
  create(@UploadedFile() file: Express.Multer.File) {
    this.logger.debug(`Received file: ${JSON.stringify(file)}`);

    if (!file) {
      throw new Error('No file uploaded');
    }

    return this.imageReaderService.create(file);
  }
}
