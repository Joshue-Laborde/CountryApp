import { Component, OnInit } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
  ]
})
export class PorPaisComponent{
  termino: string= "";
  hayError: boolean = false;
  paises:Country[]=[];

  constructor(private paisService:PaisService){}
  
  buscar(termino:string){
    this.hayError=false;
    this.termino=termino
    console.log(this.termino)
    //para que se ejecute debe llamar a subscribe, ya que el metodo es observable
    this.paisService.buscarPais(termino).subscribe((paises)=>{
      console.log(paises);
      this.paises = paises;
      //this.termino = ""; 
    }, (error)=>{
      this.hayError=true;
      this.paises=[];
    });  
  }
  sugerencias(termino:string){
    this.hayError=false;
    //falta
  }
  
}
