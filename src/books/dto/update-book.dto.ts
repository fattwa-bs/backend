import { Type } from 'class-transformer';
import {
  IsInt,
  IsIP,
  IsLatitude,
  IsLongitude,
  IsNotEmpty,
} from 'class-validator';

export class UpdateBookDto {
  @IsNotEmpty()
  cctv_name: string;

  @IsNotEmpty()
  @IsIP()
  ip_cctv: string;

  @IsNotEmpty()
  vendor: string;

  @IsNotEmpty()
  @IsLatitude()
  lat: string;

  @IsNotEmpty()
  status_cctv: string;

  @IsNotEmpty()
  stream_cctv: string;

  @IsNotEmpty()
  dinas: string;

  @IsNotEmpty()
  lastupdate: string;
}
