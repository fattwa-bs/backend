import { Type } from 'class-transformer';
import {
  IsDate,
  IsEmpty,
  IsInt,
  IsIP,
  IsLatitude,
  IsLongitude,
  IsNotEmpty,
} from 'class-validator';

export class CreateBookDto {
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
  @IsLongitude()
  lng: string;

  @IsNotEmpty()
  status_cctv: string;

  @IsNotEmpty()
  stream_cctv: string;

  @IsNotEmpty()
  dinas: string;

  @IsNotEmpty()
  updated_at: string;
}
