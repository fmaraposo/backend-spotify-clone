import { Controller, Delete, Get, Post, Put, Body } from '@nestjs/common';
import { SongsService } from './songs.service';
import { CreateSongDTO } from './dto/create-song-dto';

@Controller('songs')
export class SongsController {
  constructor(private songSrv: SongsService) {}

  @Post()
  create(@Body() createSongDTO: CreateSongDTO) {
    return this.songSrv.create(createSongDTO);
  }

  @Get()
  findAll(): any[] {
    return this.songSrv.findAll();
  }

  @Get(':id')
  findOne(): string {
    return 'Fetch a song based on id!';
  }

  @Put(':id')
  update(): string {
    return 'Update a song endpoint!';
  }

  @Delete(':id')
  delete(): string {
    return 'Delete a song!';
  }
}
