import { Type } from 'class-transformer';
import {
  IsInt,
  IsIP,
  IsLatitude,
  IsLongitude,
  IsOptional,
} from 'class-validator';

export class FilterBookDto {
  @IsOptional()
  cctv_name: string;

  @IsOptional()
  @IsIP()
  ip_cctv: string;

  @IsOptional()
  vendor: string;

  @IsOptional()
  @IsLatitude()
  lat: string;

  @IsOptional()
  @IsLongitude()
  lng: string;

  @IsOptional()
  status_cctv: string;

  @IsOptional()
  stream_cctv: string;

  @IsOptional()
  dinas: string;
}
