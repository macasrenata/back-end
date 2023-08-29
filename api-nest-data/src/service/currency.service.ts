import { Injectable } from '@nestjs/common';

@Injectable()
export class CurrencyService {
  formatCurrency(value: number): string {
    const numberFormatter = new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    });
    return numberFormatter.format(value);
  }
}
