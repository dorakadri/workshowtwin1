import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {
  public title: String;
  public list:Product[]
  constructor() {
  }
  ngOnInit(): void {
    this.title = 'MyStore App';
    this.list=[
      {
        id :12,
        name :'T-shirt1',
        price:100,
        nbrLike:23,
        picture:"https://static.bershka.net/4/photos2/2022/I/0/2/p/2695/880/659/2695880659_1_1_4.jpg?t=1657550561007",
        quantity:3,
        description :"Nice Tshirt"

      },
      {
        id :13,
        name :'T-shirt2',
        price:70,
        nbrLike:18,
        picture:"https://static.bershka.net/4/photos2/2022/I/0/2/p/2695/880/659/2695880659_1_1_4.jpg?t=1657550561007",
        quantity:0,
        description :"wow another Tshirt"

      }
    ]


  }
  incrementLike( product:Product):void{

    let i=this.list.indexOf(product);
    if(i!=-1){
      this.list[i].nbrLike++
    }
  }

  decrementLike( product:Product):void{
  
    let i=this.list.indexOf(product);
    if(i!=-1){
      this.list[i].nbrLike--
    }
  }

}
