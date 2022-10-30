import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ArticuloService } from '../articulo.service';
import { ActivatedRoute } from '@angular/router';
import { Articulo } from '../articulo.model';

@Component({
  selector: 'app-articulo-add',
  templateUrl: './articulo-add.component.html',
  styleUrls: ['./articulo-add.component.css']
})



export class ArticuloAddComponent {

  mode = "create";
  private id : string;
  public articulo: Articulo;


  constructor (public articuloService: ArticuloService, public router: ActivatedRoute) {}


  onAddArticulo(form: NgForm){
    if (form.invalid) {
      return;
    }else{
      console.log("Articulo agregado");

    }
  }


  onFileSelected(event){
    console.log(event);
  }



  onSaveArticulo(form: NgForm){
    if(form.invalid){
      return;
    }
    if(this.mode == "create"){

      this.articuloService.addArticulo(
        form.value.nombre,
        form.value.precio,
        form.value.descripcion,
        null,
        form.value.cantidad,
        form.value.categoria
        );


    }else{
      this.articuloService.updateArticulo(
        this.id,
        form.value.nombre,
        form.value.precio,
        form.value.descripcion,
        null,
        form.value.cantidad,
        form.value.categoria
      );
    }
  form.resetForm();
  }
}



