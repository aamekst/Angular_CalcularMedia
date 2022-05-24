import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  codigoRMA: number = 12345;
  nome: string = 'Josh';
  nota1: number = 4;
  nota2: number = 4;
  nota3: number = 3;
  nota4: number = 3;
  media: number= 3;
  image: string ='assets/img/pocoyo.jpg';
  dataatual = '2022-05-24'



  constructor() {

    console.log('RMA:', this.codigoRMA);
    console.log('Nome:', this.nome);
    console.log('Média:', this.media);
   

    

  
   


   }

  ngOnInit(): void {
  }

}
