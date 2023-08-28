import { Module } from '@nestjs/common';
import { CsvController } from './controller/csv.controller';
import { CsvService } from './service/csv.service';
import { CurrencyService } from './service/currency.service';

@Module({
  controllers: [CsvController],
  providers: [CsvService, CurrencyService],
})
export class AppModule {}
