import { Component, OnInit } from '@angular/core';
import { Product } from './product';
import {AlertifyService}from '../services/alertify.service'
declare let alertify:any;
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private alertifyService:AlertifyService) { }
  title: String = "Ürün Listesi"
  filterText=""
  products :Product[]=[
    {id:1,name:"Laptop",price:2500,categoryId:1,description:"adasdbook",imageUrl:"https://images.unsplash.com/photo-1516387938699-a93567ec168e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1502&q=80"},
    {id:2,name:"mouse",price:20,categoryId:2,description:"adasdbook",imageUrl:"https://images.unsplash.com/photo-1516387938699-a93567ec168e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1502&q=80"},
    {id:3,name:"klavye",price:2500,categoryId:3,description:"adasdbook",imageUrl:"https://images.unsplash.com/photo-1516387938699-a93567ec168e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1502&q=80"},
    {id:4,name:"monitör",price:20,categoryId:4,description:"adasdbook",imageUrl:"https://images.unsplash.com/photo-1516387938699-a93567ec168e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1502&q=80"},
    {id:5,name:"laptop",price:3500,categoryId:1,description:"adasdbook",imageUrl:"https://images.unsplash.com/photo-1516387938699-a93567ec168e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1502&q=80"},
    {id:6,name:"laptop",price:3200,categoryId:1,description:"adasdbook",imageUrl:"https://images.unsplash.com/photo-1516387938699-a93567ec168e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=751&q=80"}
  ]
  ngOnInit() {
  }

  addToCart(product){
    this.alertifyService.success(product.name + " addedd");
  }

}
