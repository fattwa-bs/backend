import {
  BaseEntity,
  Column,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Book extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  cctv_name: string;

  @Column()
  ip_cctv: string;

  @Column()
  vendor: string;

  @Column()
  lat: string;

  @Column()
  lng: string;

  @Column()
  status_cctv: string;

  @Column()
  stream_cctv: string;

  @Column()
  dinas: string;

  @UpdateDateColumn()
  updated_at: string;
}
