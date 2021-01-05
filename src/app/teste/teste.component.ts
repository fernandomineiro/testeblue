import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product';

@Component({
  selector: 'app-teste',
  templateUrl: './teste.component.html',
  styleUrls: ['./teste.component.css']
})
export class TesteComponent implements OnInit {
  total:any;
  data: Product;
  resultado: Object[] = [];

  constructor() {
    this.data = new Product();
  }
  

  ngOnInit(): void {
    this.total = 0;
   
  }

  delete() {
    console.log(this.data);
    if(this.data.tipo == "1"){
      this.total = parseInt(this.total) + parseInt(this.data.valor);
    }else{
      this.total = parseInt(this.total) - parseInt(this.data.valor);
    }

    let obj = new Object();
    obj["nome"] = this.data.nome;
    obj["valor"] = this.data.valor;

    this.resultado.push(obj);
    console.log(this.resultado);
  
  }

 

}
