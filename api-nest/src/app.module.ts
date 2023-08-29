import { Module } from '@nestjs/common';
import { JogadoresModule } from './jogadores/jogadores.module';

@Module({
  imports: [JogadoresModule], // entrada e saida do module (importar outros modules)
  controllers: [], // lidar com requisições http (req, res) = handlers (get, post, delete, put)
  providers: [], // utilizar serviços par persistir memoria ( gravar no BD, etc) = services
})
export class AppModule {}
