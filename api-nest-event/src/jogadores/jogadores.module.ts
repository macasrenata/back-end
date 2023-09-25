import { Module } from '@nestjs/common';
import { JogadoresController } from './jogadores.controller';
import { JogadoresService } from './jogadores.service';
import { MongooseModule } from '@nestjs/mongoose';
import { jogadorSchema } from './interfaces/jogador.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Jogador', schema: jogadorSchema}]), // { name: 'jogador', schema: 'jogadorSchema'} = nome do model e o schema do jogador
], // modulos que serão utilizados para configuração do schema do jogador
  controllers: [JogadoresController], // controllers que serão utilizados
  providers: [JogadoresService], // services que serão utilizados
})

export class JogadoresModule {}
