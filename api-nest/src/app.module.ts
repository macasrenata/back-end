import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { JogadoresModule } from './jogadores/jogadores.module';
import { JogadoresController } from './jogadores/jogadores.controller';
import { JogadoresService } from './jogadores/jogadores.service';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://macasrenata:teste123@cluster0.ehw2vfs.mongodb.net/api-nest?retryWrites=true&w=majority', 
   ), // configuração do mongoDB
    JogadoresModule
  ], // entrada e saida do module (importar outros modules)
  controllers: [
   //  JogadoresController
  ], // lidar com requisições http (req, res) = handlers (get, post, delete, put)
  providers: [
 //    JogadoresService
  ], // utilizar serviços par persistir memoria ( gravar no BD, etc) = services
})
export class AppModule {}
