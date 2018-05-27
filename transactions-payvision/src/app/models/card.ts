export class Card {
  constructor(
    public expiryMonth: number,
    public expiryYear: number,
    public firstSixDigits: number,
    public lastFourDigits: number,
    public holderName: number
  ) {}
}
