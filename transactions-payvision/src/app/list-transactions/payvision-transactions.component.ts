import { Component } from '@angular/core';


import { DropDown } from '../models/dropdown';
import { TransactionType } from '../models/enums/transactionType';
import { CurrencyType } from '../models/enums/currencyType';
import { TransactionService } from './payvision-trasaction.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'payvision-transactions',
  templateUrl: './payvision-transactions.component.html',
  providers: [TransactionService]
})
export class TransactionComponent {
  title = 'list transactions';
  transactionsTypeDropDown: DropDown[] = [];
  transactionTypeDropDownSelected: DropDown;
  currenciesTypeDropDown: DropDown[] = [];
  currencyTypeDropDownSelected: DropDown;
  idTransactionToShow = '';

  constructor(private transactionService: TransactionService) {}

  // tslint:disable-next-line:use-life-cycle-interface
  ngOnInit() {
    this.populateTransactionTypeDropdown();
    this.populateCurrencyType();
    this.transactionService.getTransacions()
      .then(data => {
        console.log('data');
       console.log(data);
      })
      .catch((error: any) => {
        console.log(error);
       console.log(error);
      });
  }

  // sample(data: number) {
  //   debugger;
  //   console.log("in");
  // }

  private populateCurrencyType() {
    this.currenciesTypeDropDown.push(
      new DropDown(0, CurrencyType.currencySelect)
    );
    this.currenciesTypeDropDown.push(new DropDown(1, CurrencyType.eur));
    this.currenciesTypeDropDown.push(new DropDown(1, CurrencyType.usd));
    this.currenciesTypeDropDown.push(new DropDown(2, CurrencyType.gbp));
    this.currencyTypeDropDownSelected = this.currenciesTypeDropDown[0];
  }

  private populateTransactionTypeDropdown() {
    this.transactionsTypeDropDown.push(
      new DropDown(0, TransactionType.transactionSelect)
    );
    this.transactionsTypeDropDown.push(
      new DropDown(1, TransactionType.authorize)
    );
    this.transactionsTypeDropDown.push(new DropDown(2, TransactionType.credit));
    this.transactionsTypeDropDown.push(
      new DropDown(3, TransactionType.payment)
    );
    this.transactionTypeDropDownSelected = this.transactionsTypeDropDown[0];
  }
}
