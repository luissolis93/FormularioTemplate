import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario-template',
  templateUrl: './formulario-template.component.html',
  styles: []
})
export class FormularioTemplateComponent implements OnInit {

  public formulario:FormGroup;



  constructor() { }

  ngOnInit() {
    this.CrearFormulario();
  }

  public CrearFormulario():void{
    this.formulario= new FormGroup({
      nombre:new FormControl(null,[Validators.minLength(5),Validators.required]),
      email:new FormControl(null,[Validators.required,Validators.pattern(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)]),
      mensaje:new FormControl(null,[Validators.required,Validators.minLength(15)])
    })
  }

  public verEstadoFormulario():void{
    console.log(this.formulario);
    
  }

}
