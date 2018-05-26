// "action": "payment",
//  "amount": 100,
//  "brandId": 1010,
//  "card": {
//     "expiryMonth": "12",
//     "expiryYear": "2022",
//      "firstSixDigits": "401288",
//      "lastFourDigits": "1881",
//      "holderName": "Jack Watkins"
// },
// "currencyCode": "EUR",
// "id": "af8daec6-4c1c-447f-9c8c-2448381cb054",
// "trackingCode": "572951d1-5b42-42e4-b7c9-6253fb592f9a"

export class Transaction {
  constructor(
    public id: string,
    public currencyCode: string,
    public trackingCode: string,
    public action: string,
    public amount: number,
    public brandId: number
  ) { }
}
