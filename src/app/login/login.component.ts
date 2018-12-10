import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formCadastro;
  valoresForm: Object;
  dadosForm;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.formCadastro = this.fb.group({
      nome:['', Validators.compose([
        // Validators.minLenght(3),
        // Validators.maxLenght(100)
      ])],
      sobrenome:['', Validators.compose([
        // Validators.minLenght(3),
        // Validators.maxLenght(100)
      ])],
      cpf:[],
      email:['', Validators.compose([Validators.email])],
      usuario:[],
      password:[],
      endereço:[],
      confirmarpassword:[],
      confrimaremail:['', Validators.compose([Validators.email])],
      masculino:[],
      feminina:[],

    });

    // this.formCadastro.valueChanges.pipe(
    //   debounceTime(1000))
    //   .subscribe(res => {
    //     console.log(res);
    //     this.valoresForm = res;
    //   })


    //   cadastro() {
    //     this.dadosForm = JSON.stringify(this.valoresForm);
    //     console.log(this.dadosForm);
    //     localStorage.setItem('cadastro', this.dadosForm);
    //   }

  }

}
