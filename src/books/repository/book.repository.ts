import {
  ConflictException,
  InternalServerErrorException,
} from '@nestjs/common';
import { EntityRepository, Repository } from 'typeorm';
import { CreateBookDto } from '../dto/create-book.dto';
import { FilterBookDto } from '../dto/filter-book.dto';
import { Book } from '../entity/book.entity';

@EntityRepository(Book)
export class BookRepository extends Repository<Book> {
  async getBooks(filter: FilterBookDto): Promise<Book[]> {
    const {
      cctv_name,
      ip_cctv,
      vendor,
      lat,
      lng,
      status_cctv,
      stream_cctv,
      dinas,
    } = filter;

    const query = this.createQueryBuilder('book');

    if (cctv_name) {
      query.andWhere('lower(book.cctv_name) LIKE :cctv_name', {
        cctv_name: `%${cctv_name.toLowerCase()}%`,
      });
    }

    if (ip_cctv) {
      query.andWhere('lower(book.ip_cctv) LIKE :ip_cctv', {
        ip_cctv: `%${ip_cctv.toLowerCase()}%`,
      });
    }

    if (vendor) {
      query.andWhere('lower(book.vendor) LIKE :vendor', {
        vendor: `%${vendor.toLowerCase()}`,
      });
    }

    if (lat) {
      query.andWhere('lower(book.lat) LIKE :lat', {
        lat: `%${lat.toLowerCase()}%`,
      });
    }

    if (lng) {
      query.andWhere('lower(book.lng) LIKE :lng', {
        lng: `%${lng.toLowerCase()}%`,
      });
    }

    if (status_cctv) {
      query.andWhere('lower(cctv.status_cctv) LIKE : status_cctv', {
        status_cctv: `%${status_cctv.toLowerCase()}%`,
      });
    }
    if (stream_cctv) {
      query.andWhere('lower(cctv.stream_cctv) LIKE : stream_cctv', {
        stream_cctv: `%${stream_cctv.toLowerCase()}%`,
      });
    }
    if (dinas) {
      query.andWhere('lower(cctv.dinas) LIKE : dinas', {
        dinas: `%${dinas.toLowerCase()}%`,
      });
    }

    return await query.getMany();
  }

  async createBook(createBookDto: CreateBookDto): Promise<void> {
    const {
      cctv_name,
      ip_cctv,
      vendor,
      lat,
      lng,
      status_cctv,
      stream_cctv,
      dinas,
    } = createBookDto;

    const book = this.create();
    book.cctv_name = cctv_name;
    book.ip_cctv = ip_cctv;
    book.vendor = vendor;
    book.lat = lat;
    book.lng = lng;
    book.status_cctv = status_cctv;
    book.stream_cctv = stream_cctv;
    book.dinas = dinas;

    try {
      await book.save();
    } catch (e) {
      throw new ConflictException();
    }
  }
}
