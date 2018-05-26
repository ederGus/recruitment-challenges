//  "card": {
//     "expiryMonth": "12",
//     "expiryYear": "2022",
//      "firstSixDigits": "401288",
//      "lastFourDigits": "1881",
//      "holderName": "Jack Watkins"
// },

export class Card {
  constructor(
    public expiryMonth: number,
    public expiryYear: number,
    public firstSixDigits: number,
    public lastFourDigits: number,
    public holderName: number
  ) {}
}
