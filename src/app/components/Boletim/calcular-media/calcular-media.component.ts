import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calcular-media',
  templateUrl: './calcular-media.component.html',
  styleUrls: ['./calcular-media.component.css']
})
export class CalcularMediaComponent implements OnInit {
  nome2: string = "Calcular média"
  codigoRMA: number = 12345;
  nome: string = 'Josh';
  nota1: number = 10;
  nota2: number = 10;
  nota3: number = 5;
  nota4: number = 0;
  media: number= 0;
  aprovado: boolean = true;
  imagereprovado: string ='assets/img/pocoyo.jpg';
  imageaprovado: string ='assets/img/pocoyo3.jpg';
  img: string ='assets/img/pocoyo2.jpg';
  dataatual = '2022-05-24'



  constructor() {

    console.log('RMA:', this.codigoRMA);
    console.log('Nome:', this.nome);
    console.log('Média:', this.media);


      this.media = (this.nota1 + this.nota2 + this.nota3 + this.nota4)/4

      if (this.media >=6){
        this.aprovado=true;
        this.img = this.imageaprovado;
    } else {
       this.aprovado=false;
       this.img= this.imagereprovado;

    }




   }

  ngOnInit(): void {
  }

}
