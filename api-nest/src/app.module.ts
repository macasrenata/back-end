import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { JogadoresModule } from './jogadores/jogadores.module';
import { JogadoresController } from './jogadores/jogadores.controller';
import { JogadoresService } from './jogadores/jogadores.service';
@Module({
  imports: [
    MongooseModule.forRoot( process.env.MONGO_URL,
      // process.env.MONGO_DB, 
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
