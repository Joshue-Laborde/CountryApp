import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: [
  ]
})
export class PorCapitalComponent{
  termino: string= "";
  hayError: boolean = false;
  paises:Country[]=[];

  constructor(private paisService:PaisService){}

  buscar(termino:string){
    this.hayError=false;
    this.termino=termino
    console.log(this.termino)
    //para que se ejecute debe llamar a subscribe, ya que el metodo es observable
    this.paisService.buscarCiudad(this.termino).subscribe((paises)=>{
      console.log(paises);
      this.paises = paises;
      //this.termino = ""; 
    }, (error)=>{
      this.hayError=true;
      this.paises=[];
    });  
  }
  



}
