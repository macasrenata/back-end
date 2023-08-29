import {
  Controller,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { CsvService } from '../service/csv.service';
import * as csvParser from 'csv-parser';
import { CurrencyService } from '../service/currency.service';
import * as fs from 'fs';

@Controller('csv')
export class CsvController {
  constructor(
    private readonly csvService: CsvService,
    private readonly currencyService: CurrencyService,
  ) {}

  @Post('upload')
  @UseInterceptors(FileInterceptor(undefined))
  async uploadCsv(@UploadedFile() file: any) {
    if (file) {
      const csvData = await this.csvService.readCsv(file.path);

      // Process csvData, validate, format, etc.
      console.log(csvData);

      return { message: 'CSV data uploaded and processed successfully' };
    } else {
      return { message: 'No CSV file uploaded' };
    }
  }

  @Post('read')
  async readCsvFromPath() {
    const csvData = await this.csvService.readCsv('src/data/data.csv');

    // Process csvData, validate, format, etc.
    console.log(csvData);
    const dataArray: any[] = [];

    fs.createReadStream('src/data/data.csv')
      .pipe(csvParser())
      .on('data', (row) => {
        dataArray.push(row);
      })
      .on('end', () => {
        console.log(dataArray);
        dataArray.forEach((data) => {
          data.vlTotalFormatted = this.currencyService.formatCurrency(
            data.vlTotal,
          );
        });
        console.log(dataArray);
      });
    // return dataArray;

    return { message: 'CSV data read from path and processed successfully' };
  }
}
