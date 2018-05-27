import { Component } from '@angular/core';

import { Transaction } from '../models/transaction';
import { DropDown } from '../models/dropdown';
import { TransactionType } from '../models/enums/transactionType';
import { CurrencyType } from '../models/enums/currencyType';
import { TransactionService } from './payvision-trasaction.service';
import { Filter } from '../models/filter';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'payvision-transactions',
  templateUrl: './payvision-transactions.component.html',
  styleUrls: ['./payvision-transaction.component.css'],
  providers: [TransactionService]
})
export class TransactionComponent {
  title = 'list transactions';
  transactionsTypeDropDown: DropDown[] = [];
  transactionTypeDropDownSelected: DropDown;
  currenciesTypeDropDown: DropDown[] = [];
  currencyTypeDropDownSelected: DropDown;
  idTransactionToShow = '';
  transactions: Transaction[] = [];
  filter: Filter = new Filter('' , '');

  constructor(private transactionService: TransactionService) {}

  // tslint:disable-next-line:use-life-cycle-interface
  ngOnInit() {
    this.populateTransactionTypeDropdown();
    this.populateCurrencyType();
    this.getTransactions();
  }

  getTransactions() {
    this.transactions = [];
    this.updateFilter();
    this.transactionService
      .getTransacions(this.filter)
      .then(data => {
        this.transactions = data;
      })
      .catch((error: any) => {
        console.log('error');
        console.log(error);
      });
  }

  unCollapseRow(transaction: Transaction) {
    this.idTransactionToShow = transaction.id;
  }


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

  private updateFilter() {
    if (this.currencyTypeDropDownSelected.id !== 0) {
      this.filter.currency = this.currencyTypeDropDownSelected.name.toString();
    } else {
      this.filter.currency = '';
    }
    if (this.transactionTypeDropDownSelected.id !== 0) {
      this.filter.transactionType = this.transactionTypeDropDownSelected.name;
    } else {
      this.filter.transactionType = '';
    }
  }
}
