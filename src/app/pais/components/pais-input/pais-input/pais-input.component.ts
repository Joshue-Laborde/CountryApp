import { Component, EventEmitter, Output, OnInit, Input } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';


@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styles: [
  ]
})
export class PaisInputComponent implements OnInit{
  //Emite el evento de hijo a padre 
  @Output() onEnter: EventEmitter<string> = new EventEmitter();
  //para que la busqueda 
  @Output() onDebounce: EventEmitter<string> = new EventEmitter();
  
  @Input() placeholder: string="";
  debouncer:Subject<string> = new Subject();
  
  termino: string = ""
  

  ngOnInit() {
    this.debouncer
    .pipe(debounceTime(300)) //pipe es como una tuberia de transporte.
    .subscribe(valor=>{
      this.onDebounce.emit(valor);
    });
  }

  buscar(){
    this.onEnter.emit(this.termino);
  }

  teclaPresionada(){
    //con el next se activara la funcion ngOnInit
    this.debouncer.next(this.termino);
  }


}
