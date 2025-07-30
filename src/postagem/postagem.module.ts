import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TemaModule } from '../tema/tema.module';
import { Postagem } from './entities/postagem.entity';
import { PostagemController } from './controller/postagem.controller';
import { PostagemService } from './services/postagem.service';
import { TemaService } from '../tema/services/tema.service';

@Module({
  imports: [TypeOrmModule.forFeature([Postagem]), TemaModule],
  controllers: [PostagemController],
  providers: [PostagemService],
  exports: [ TypeOrmModule ]
})
export class PostagemModule {}
