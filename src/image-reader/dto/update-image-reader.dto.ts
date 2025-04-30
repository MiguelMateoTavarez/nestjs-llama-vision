import { PartialType } from '@nestjs/mapped-types';
import { CreateImageReaderDto } from './create-image-reader.dto';

export class UpdateImageReaderDto extends PartialType(CreateImageReaderDto) {}
