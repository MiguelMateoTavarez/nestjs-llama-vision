import { Module } from '@nestjs/common';
import { ImageReaderModule } from './image-reader/image-reader.module';

@Module({
  imports: [ImageReaderModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
