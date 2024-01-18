import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestesService {
  questions = [
    {
      question: "Diversidade de Formatos",
      options: [
      { text: "Na maioria das vezes faço posts apenas de compartilhamento ou, no máximo com texto puro. Eventualmente/raramente até coloco alguma imagem", score: 5 },
      { text: "Textos, imagens, vídeos/lives e também documentos e carrosséis", score: 10 },
      { text: "Textos, imagens, vídeos/lives, documentos/carrosséis e tenho newsletter regular", score: 15 },
      { text: "Praticamente todos os formatos acima e ainda crio vídeos e/ou lives", score: 20 }
      ]
    },
    {
      question: "Frequência de postagens",
      options: [
      { text: "Posto menos de uma vez por semana", score: 5 },
      { text: "Posto pelo menos uma vez por semana", score: 10 },
      { text: "Faço postagens várias vezes por semana", score: 15 },
      { text: "Posto conteúdo todos os dias ou quase todos os dias", score: 20 }
      ]
    },
    {
      question: "Engajamento e interatividade",
      options: [
      { text: "Recebo poucos ou nenhum comentário e curtidas", score: 5 },
      { text: "Recebo algum engajamento, como comentários e compartilhamentos", score: 10 },
      { text: "Tenho um engajamento sólido com conversas regulares nos comentários", score: 15 },
      { text: "Minhas postagens geram discussões extensas e muitos compartilhamentos", score: 20 }
      ]
    },
    {
      question: "Qualidade e Relevância do Conteúdo",
      options: [
      { text: "Meu conteúdo é básico e não se destaca", score: 5 },
      { text: "O conteúdo é informativo e ocasionalmente gera interesse", score: 10 },
      { text: "Produzo conteúdo que é bem recebido e considerado útil por meus seguidores", score: 15 },
      { text: "Meu conteúdo é considerado uma referência na minha área, gerando alto valor agregado", score: 20 }
      ]
    },
    {
      question: "Consistência e Planejamento",
      options: [
      { text: "Posto esporadicamente, sem planejamento", score: 5 },
      { text: "Tenho uma programação básica, mas não sempre a sigo", score: 10 },
      { text: "Sou consistente com meu calendário de postagens", score: 15 },
      { text: "Planejo meu conteúdo estrategicamente com antecedência e mantenho consistência", score: 20 }
      ]
    },
    {
      question: "Informações do perfil",
      options: [
      { text: "Meu perfil está incompleto e não utilizo palavras-chave", score: 5 },
      { text: "Meu perfil está completo, mas não estou focado em SEO", score: 10 },
      { text: "Incluo palavras-chave no meu perfil e em algumas postagens", score: 15 },
      { text: "Meu perfil e conteúdos são otimizados para SEO, aumentando a visibilidade", score: 20 }
      ]
    },
    {
      question: "Uso de Análises e Métricas",
      options: [
      { text: "Não acompanho as métricas do LinkedIn", score: 5 },
      { text: "Olho ocasionalmente as métricas, mas não as uso estrategicamente", score: 10 },
      { text: "Uso as métricas para entender o desempenho das postagens", score: 15 },
      { text: "Analiso meticulosamente as métricas e as utilizo para otimizar meu conteúdo", score: 20 }
      ]
    }
  ];

  currentQuestionIndex = 0;
  score = 0;
  currentQuestion: any;
  testeFinalizado = false;

  displayQuestion() {
    if (this.currentQuestionIndex < this.questions.length) {
      this.currentQuestion = this.questions[this.currentQuestionIndex];
    } else {
      this.currentQuestion = null;
      this.testeFinalizado = true;
    }    
  }

  updateScore(optionScore: number) {
    this.score += optionScore;
  }

  nextQuestion() {
    this.currentQuestionIndex++;
    this.displayQuestion();
  }
}