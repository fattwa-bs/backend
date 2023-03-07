import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { v4 as uuidv4 } from 'uuid';
import { CreateBookDto } from './dto/create-book.dto';
import { FilterBookDto } from './dto/filter-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { Book } from './entity/book.entity';
import { BookRepository } from './repository/book.repository';

@Injectable()
export class BooksService {
  constructor(
    @InjectRepository(BookRepository)
    private readonly bookRepository: BookRepository,
  ) {}

  async getBooks(filter: FilterBookDto): Promise<Book[]> {
    return await this.bookRepository.getBooks(filter);
  }

  async createBook(createBookDto: CreateBookDto): Promise<void> {
    return await this.bookRepository.createBook(createBookDto);
  }

  async getBookById(id: string): Promise<Book> {
    const book = await this.bookRepository.findOne(id);
    if (!book) {
      throw new NotFoundException(`Book with id ${id} is not found`);
    }
    return book;
  }

  async updateBook(id: string, updateBookDto): Promise<void> {
    const {
      cctv_name,
      ip_cctv,
      vendor,
      lat,
      lng,
      status_cctv,
      stream_cctv,
      dinas,
    } = updateBookDto;

    const book = await this.getBookById(id);
    book.cctv_name = cctv_name;
    book.ip_cctv = ip_cctv;
    book.vendor = vendor;
    book.lat = lat;
    book.lng = lng;
    book.status_cctv = status_cctv;
    book.stream_cctv = stream_cctv;
    book.dinas = dinas;

    await book.save();
  }

  async deleteBook(id: string): Promise<void> {
    const result = await this.bookRepository.delete(id);
    if (result.affected == 0) {
      throw new NotFoundException(`Book with id ${id} is not found`);
    }
  }
}
