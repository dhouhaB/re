import { Injectable } from '@angular/core';
import { Item, Order } from './Models/Models';


@Injectable({
  providedIn: 'root'
})
export class OrderService {
  order: Order = {
    ordId: '' ,
    orDetails: [],
    date: '',
    status: '',
    total: 0,
  };
  tempOrder: Order = {
    ordId: '' ,
    orDetails: [],
    date: '',
    status: '',
    total: 0,
  };

  itemputed = false ;
  constructor() { }

  addOrder(item: Item) {
    const itm = item;
    this.itemputed = false ;
    let i = 0;
    if (this.order.orDetails.length === 0 ) {
      itm.qtyAv ++;
      this.order.orDetails.push(itm);
      this.itemputed = true ;
      this.order.total = this.order.total + itm.itPrice;
    } else {
      this.order.orDetails.forEach((it: Item) => {
        i++;
        if (itm.itName === it.itName && !this.itemputed) {
          it.qtyAv ++;
          this.order.total = this.order.total + it.itPrice;
          this.itemputed = true ;
        } else if ( i === this.order.orDetails.length && !this.itemputed) {
          itm.qtyAv ++;
          this.order.orDetails.push(itm);
          this.itemputed = true ;
          this.order.total = this.order.total + itm.itPrice;
        }
      });
    }
  }


  totalORder() {
    return this.order.total;
  }

 async getOrders() {
    return this.order;
  }

  async delete(order: Order) {
    this.order = {
      ordId: '' ,
      orDetails: [],
      date: '',
      status: '',
      total: 0,
    };
    this.order = order;
  }
}
