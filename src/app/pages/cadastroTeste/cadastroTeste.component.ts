import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PessoaService } from 'src/app/services/pessoa.service';
import { Pessoa } from 'src/app/models/Pessoas';

@Component({
  selector: 'app-cadastro-teste',
  templateUrl: './cadastroTeste.component.html',
  styleUrls: ['./cadastroTeste.component.css']
})
export class CadastroTesteComponent implements OnInit {
  cadastroForm: FormGroup;
  newPessoa: Pessoa | undefined;

  constructor(
    private formBuilder: FormBuilder,
    private pessoaService: PessoaService,
    private router: Router
  ) {
    this.cadastroForm = this.formBuilder.group({
      idPessoa: [''],
      nomeCompleto: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      whatsapp: ['', Validators.required],
      linkedin: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.cadastroForm = this.formBuilder.group({
      idPessoa: [''],
      nomeCompleto: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      whatsapp: ['', Validators.required],
      linkedin: ['', Validators.required]
    });
  }

  submit() {
    if (this.cadastroForm.valid) {
      const formValues = this.cadastroForm.value;
  
      const nomeCompleto = formValues.nomeCompleto;
      const email = formValues.email;
      const whatsapp = formValues.whatsapp;
      const linkedin = formValues.linkedin;
  
      const newPessoa: Pessoa = {
        IdPessoa: 0,
        NomeCompleto: nomeCompleto,
        Email: email,
        Whatsapp: whatsapp,
        Linkedin: linkedin
      };

      this.pessoaService.createPessoa(newPessoa).subscribe(
        (pessoaResponse) => {
          console.log('Pessoa criada com sucesso:', pessoaResponse);
          this.router.navigate(['/Teste']);
        }
      );
    }
  }
}
