import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/Services/api.service';
import { CartService } from 'src/app/Services/cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  public productList:any;

  constructor(private api:ApiService,private cartService: CartService) { }

  ngOnInit(): void {
    this.api.getProduct()
    .subscribe((res:any) => {
      this.productList = res;
      this.productList.forEach((a:any) => {
        Object.assign(a,{quantity:1,total:a.price});
      });
    })
    console.log(this.productList);
  }
  addtoCart(item:any){
    this.cartService.addtoCart(item);
  }

}
