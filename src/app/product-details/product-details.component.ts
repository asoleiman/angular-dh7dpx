import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'
import {products} from '../products'

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

product;
  constructor(private route:ActivatedRoute) { }

  ngOnInit() {
   const parmMap=this.route.snapshot.paramMap;
   const productIdFromRoute=Number(parmMap.get("productId"));
   this.product=products.find(p=>p.id==productIdFromRoute);
  }

}