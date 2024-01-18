import { Component, OnInit } from '@angular/core';
import { ResultadosService } from 'src/app/services/resultados.service';
import * as xlsx from 'xlsx';
import { MergeData } from 'src/app/models/MergeData';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styleUrls: ['./resultados.component.css']
})
export class ResultadosComponent implements OnInit {

  dados: MergeData[] = [];

  displayedColumns: string[] = ['Nome Completo', 'Email', 'Whatsapp', 'Linkedin', 'Pergunta', 'Resposta'];

  constructor(private resultadosService: ResultadosService) {}

  ngOnInit(): void {
    this.resultadosService.GetMergeData().subscribe(data => {       
      this.dados = data.dados;
    })
  }
  
}
