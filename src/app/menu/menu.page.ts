import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { Item } from '../Models/Models';
import { OrderService } from '../order.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {
  direct: any;
  total = 0;
  constructor(
    public router: Router,
    public ordSer: OrderService

  ) {

    this.getTotal();
  }

  ngOnInit() {
    this.direct = this.router.getCurrentNavigation().extras.state.direction;
  }

  ionViewWillEnter() {
    this.getTotal();
  }
  ionViewDidEnter() {
    this.getTotal();
  }

  view( cat: string, title: string) {
    const extra: NavigationExtras = {
      state: {
        categ: cat,
        orient: this.direct,
        tit: title,
      }
    };
    return this.router.navigate(['./view'], extra);
  }

  addToBasket(item: Item) {
    this.ordSer.addOrder(item);
    this.total = this.ordSer.totalORder();
  }

  viewOrder() {
    const extra: NavigationExtras = {
      state: {
        dir : this.direct
      }
    };
    return this.router.navigate(['./view-order'], extra);
  }

  getTotal(){
    return this.total = this.ordSer.totalORder();
  }

}