export class Filter {
  constructor(
    public transactionType: string,
    public currency: string,
    public active?: boolean
  ) {}
}
