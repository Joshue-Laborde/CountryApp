import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [ `
    button {
      margin-right: 5px;
    }
  
  `
  ]
})
export class PorRegionComponent {
  
  regiones: string[] = ['EU', 'EFTA', 'CARICOM', 'PA', 'AU', 'USAN', 'EEU', 'AL', 'ASEAN', 'CAIS', 'CEFTA', 'NAFTA', 'SAARC',];
  regionActiva: string = '';
  paises: Country[] = [];
  constructor( private paisService: PaisService ) { }

  getClaseCSS( region: string ): string {
    return (region === this.regionActiva) 
              ? 'btn btn-primary'
              : 'btn btn-outline-primary';
  }

  activarRegion( region: string ) {
    //sirve cuando ya esta seleccionada la region y se vuelve seleccionar, no se ejecute el subscribe y vuelva a cargar todo
    if ( region === this.regionActiva ) { return; }

    //para aparezca al principio de html al seleccionar el boton de la region
    this.regionActiva = region;
    //vaciar el arreglo de paises
    this.paises = [];
    //busca y carga los paises
    this.paisService.buscarRegion( region )
      .subscribe( paises => this.paises = paises );
  }

}
