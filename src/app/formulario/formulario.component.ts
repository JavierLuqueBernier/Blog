import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { BlogService } from '../blog.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  formulario: FormGroup;

  constructor( private blogService: BlogService, private router: Router) {
    this.formulario = new FormGroup({
      titulo: new FormControl('', [
        Validators.required,
        Validators.maxLength(20),
        Validators.minLength(3)
      ]),
      texto: new FormControl('', [
        Validators.required,
        Validators.minLength(20)
      ]),
      autor: new FormControl('', [
        Validators.required,
        Validators.maxLength(20),
        Validators.minLength(3)
      ]),
      imagen: new FormControl('', [
      ]),
      fecha: new FormControl('', [
      ]),
      categoria: new FormControl('', [
        Validators.required
      ]),
    });
   }

  ngOnInit() {
  }

  onSubmit() {
    //console.log(this.formulario.value)
    this.blogService.agregarPost(this.formulario.value);
    this.router.navigate(['/blog']);
  }

}
