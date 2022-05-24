import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calcular-media',
  templateUrl: './calcular-media.component.html',
  styleUrls: ['./calcular-media.component.css']
})
export class CalcularMediaComponent implements OnInit {

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

    /*function media()
    {
      media = (nota1 + nota2 + nota3 + nota4)/4
    
      if (media >=6){
        alert('aprovado')
    } else {
        if (media <=5)
       alert('reprovado')   
    }

    }
    media();*/
  


   }

  ngOnInit(): void {
  }

}
