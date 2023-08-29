import { Module } from '@nestjs/common';
import { JogadoresController } from './jogadores.controller';
import { JogadoresService } from './jogadores.service';

@Module({
  controllers: [JogadoresController], // controllers que serão utilizados
  providers: [JogadoresService], // services que serão utilizados
})
export class JogadoresModule {}
