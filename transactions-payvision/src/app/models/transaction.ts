import { Card } from './card';

export class Transaction {
  constructor(
    public id: string,
    public currencyCode: string,
    public trackingCode: string,
    public action: string,
    public amount: number,
    public brandId: number,
    public card: Card
  ) { }
}
