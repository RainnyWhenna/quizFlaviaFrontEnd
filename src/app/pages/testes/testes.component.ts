import { Component, OnInit } from '@angular/core';
import { Resultado } from 'src/app/models/Resultados';
import { TestesService } from 'src/app/services/testes.service';
import { ResultadosService } from 'src/app/services/resultados.service';
import { PessoaService } from 'src/app/services/pessoa.service';
import { Pessoa } from 'src/app/models/Pessoas';

@Component({
  selector: 'app-testes',
  templateUrl: './testes.component.html',
  styleUrls: ['./testes.component.css']
})
export class TestesComponent implements OnInit {
  questions: any[] = [];
  cadastroForm: any;

  constructor(public testesService: TestesService, private resultadosService: ResultadosService, private pessoaService: PessoaService) {}

  ngOnInit(): void {
    this.testesService.displayQuestion();
  }

  selectOption(optionScore: number) {
    this.testesService.updateScore(optionScore);
    this.testesService.nextQuestion();
  }

  textoPontuacao(score: number): string {
    if (score <= 35) {
      return '35 pontos: Nível 1 - Você deu os primeiros passos e está começando. Provavelmente, será preciso ampliar sua frequência de publicações, apostar em formatos novos, definir melhor seus temas, entender melhor os recursos da plataforma, formas de engajar mais e até mesmo uma compreensão melhor das métricas, dentre outros. O ideal é fazer tudo isso tendo uma estratégia, ou seja, entendendo seus objetivos, público estratégico, dentre outros pontos.';
    } else if (score <= 70) {
      return '36-70 pontos: Nível 2 - Você está caminhando, vem tentando manter uma presença, mas pode refinar sua estratégia, definindo objetivos, público estratégico, entendendo melhor recursos a seu favor, melhorando a qualidade e o engajamento do seu conteúdo. Continue!';
    } else if (score <= 105) {
      return '71-105 pontos: Nível 3 - Você parece ter uma boa estratégia de conteúdo, mas acredite, o LinkedIn tem tantos recursos, possibilidades e formatos, que certamente há algo a explorar ainda, seja em relação ao seu posicionamento, frequência, formatos, métricas, melhor definição de temas e formas de engajar, entre outros. Muito bem, continue!';
    } else {
      return '106-140 pontos: Nível 4 - Você parece conhecer bastante do LinkedIn, seus recursos, formatos e possibilidades, vem se dedicando, testando... precisamos rever qual a "cereja do bolo" e, acredite, o LinkedIn oferece tantos recursos e possibilidades, que certamente há muito o que testar e aprimorar ainda. De todo modo, você está no caminho certo!';
    }
  }

  get currentQuestion() {
    return this.testesService.currentQuestion;
  }

  get score() {
    return this.testesService.score;
  }

  get testeFinalizado() {
    return this.testesService.testeFinalizado;
  }

  enviarResultados() {
    function getCurrentDateWithoutTime(): string {
      const today = new Date();
      const dd = String(today.getDate()).padStart(2, '0');
      const mm = String(today.getMonth() + 1).padStart(2, '0');
      const yyyy = today.getFullYear();
      return `${yyyy}-${mm}-${dd}`;
    }

    if (this.testeFinalizado) {
      const currentDateWithoutTime = getCurrentDateWithoutTime();

      let idPessoa!: number;

      this.pessoaService.GetMaxIdPessoa().subscribe((maxId: number) => {
        idPessoa = maxId;

        const resultado: Resultado = {
          IdResultado: 0,
          RespondidoEm: currentDateWithoutTime,
          pergunta: this.currentQuestion,
          resposta: this.currentQuestion.respostaSelecionada,
          IdPessoa: idPessoa
        };

        this.resultadosService.createResultado(resultado).subscribe(
          (response) => {
            console.log('Resultado criado com sucesso:', response);
          }
        );
      });
    }
  }
}