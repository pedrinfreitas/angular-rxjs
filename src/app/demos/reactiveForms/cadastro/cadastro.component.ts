import { Usuario } from './cadastro.interface';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NgBrazilValidators, MASKS } from 'ng-brazil';
import { CustomValidators } from 'ng2-validation';
// import { utilsBr } from 'js-brazil';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html'
})
export class CadastroComponent implements OnInit {

  cadastroForm: FormGroup;
  usuario: Usuario;
  formResult: string = '';
  MASKS = MASKS;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    let senha = new FormControl('', [
      Validators.required, 
      CustomValidators.rangeLength([6,15])
    ]);

    let senhaConf = new FormControl('', [
      Validators.required, 
      CustomValidators.rangeLength([6,15]), 
      CustomValidators.equalTo(senha)
    ]);

    this.cadastroForm = this.fb.group({
      nome: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(150)]],
      cpf: ['', [Validators.required, NgBrazilValidators.cpf]],
      email: ['', [Validators.required, Validators.email]],
      senha: senha,
      senhaConf: senhaConf
      //senhaConf: new FormControl('')
    })
  }

  adicionarUsuario() {
    if (this.cadastroForm.dirty && this.cadastroForm.valid) {
      this.usuario = Object.assign({}, this.usuario, this.cadastroForm.value);
      this.formResult = JSON.stringify(this.cadastroForm.value);
      console.log(this.usuario);
    } else {
      this.formResult = "Não submeteu!!"
    }


  }

}
