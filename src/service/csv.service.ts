import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import * as csvParser from 'csv-parser';
import { CsvDataDto } from '../dto/csv-data.dto';
import { cpf } from 'cpf-cnpj-validator';
import * as currencyFormatter from 'currency-formatter';

@Injectable()
export class CsvService {
  async readCsv(filePath: string): Promise<CsvDataDto[]> {
    const results: CsvDataDto[] = [];

    await new Promise<void>((resolve) => {
      fs.createReadStream(filePath)
        .pipe(csvParser())
        .on('data', (data) => results.push(data))
        .on('end', () => resolve());
    });

    return results;
  }

  validateCpfCnpj(cpfCnpj: string): boolean {
    // Implement your validation logic for CPF or CNPJ
    // Return true if valid, otherwise false
    return cpf.isValid(cpfCnpj);
  }

  validateTotalAndPresta(data: CsvDataDto): boolean {
    // Implement your validation logic for total and prestations
    // Return true if valid, otherwise false
    return currencyFormatter.format(data, {
      symbol: 'R$',
      precision: 2,
      thousand: '.',
      decimal: ',',
    });
  }
}
