import { Component } from '@angular/core';
import { OrderInformation } from './orderInformation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css', './bootstrap.min.css']
})
export class AppComponent {
  
  items = ["Apples", "Peaches", "Pears", "Plums"];

  itemPrice = {
    "Apples": 3,
    "Peaches": 5,
    "Pears": 2,
    "Plums": 1
  };

  orderInfo: Array<any> ;
  allOrders: Array<any> ;
  userDetails = {} ;

  newOrder = new OrderInformation('', '', '', '', '');

  isInputValid: boolean = true;

  constructor() {
    this.allOrders = [];
    this.orderInfo = [];
  }

  onSubmit(userForm)
  {
    let userAddress = userForm.value.address;

    if(userAddress == ''){
      this.isInputValid = false;
    }

    let regex = /^[0-9]+\s[a-zA-Z]+\s[a-zA-Z]+$/g;
    let found = userAddress.match(regex);

    if(found)
    {
      let firstName = userForm.value.firstName;
      let lastName = userForm.value.lastName;
      let address = userForm.value.address;

      this.userDetails = {
        "firstName": firstName,
        "lastName": lastName,
        "address": address
      };

      this.isInputValid=true;
      // return true;
    }
    else
    {
      this.isInputValid=false;
      // return false;
    }
  }

  addItem(summaryForm)
  {
    if (summaryForm.value.quantity && summaryForm.value.item)
    {
      let quantity = summaryForm.value.quantity;
      let item = summaryForm.value.item;
      let price = this.itemPrice[item];
      let total = this.itemPrice[item] * quantity;

      this.orderInfo = [
        item,
        quantity,
        price,
        total,
      ];

      this.allOrders.push(this.orderInfo);

    }
    
  }

}
