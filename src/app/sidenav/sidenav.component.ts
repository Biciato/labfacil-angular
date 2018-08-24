import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit  {
  sidenavMenuButtons: Array<string>;
  sidenavIcons: Array<string>;
  sidenavRDButtons: Array<string>;
  sidenavCadButtons: Array<string>;
  sidenavFatButtons: Array<string>;
  sidenavRelButtons: Array<string>;
  sidenavADMButtons: Array<string>;
  menuButtonSelected: string;

  tabs: any;

  constructor() {
    this.sidenavMenuButtons = ['Rotina Diária', 'Cadatro', 'Faturamento', 'Relatórios', 'Administrativo'];
    this.sidenavIcons = ['assignment_turned_on', 'how_to_reg', 'monetization_on', 'assignment', 'border_color'];
    this.sidenavRDButtons = ['Atendimento', 'Prontuário | Histórico', 'Recebimento de Material | Triagem',
     'Lançamento de Resultados', 'Situação de Atendimento', 'Consultar Preços'];
    this.sidenavCadButtons = ['Paciente', 'Médicos', 'Exames', 'CID', 'Laboratórios de Apoio', 'Equipamentos'];
    this.sidenavFatButtons = ['Caixa Particular', 'Faturamento', 'Repasse Médico', 'Recibos', 'Notas Fiscais'];
    this.sidenavRelButtons = ['Dashboard - Resumo Geral', 'Previsão de Faturamento por Convênio', 'Previsão de Repasse Médicos',
     'Produtividade Médicos', 'Exames por paciente', 'Preços por Exame', 'Pendências de Atendimento',
     'Comparação Tabelas de Preços / Faturamento',
      'Atendimento Realizados X Recebidos', 'Autorização de guias', 'Previsão de Faturamento por Guia', 'Previsão de Faturamento por Dia',
      'Estatísticas Exames Realizados', 'Estatísticas por Convênio Sintético'];
    this.sidenavADMButtons = ['Unidades', 'Postos de Coleta', 'Materiais de Coleta', 'Listar Usuários', 'Novos Usuários'];
  }

  ngOnInit() {
    this.tabs = [
      { title: 'Unidades'},
      { title: 'Postos de Coleta'},
      { title: 'Faturamento'},
      { title: 'Usuários'},
      { title: 'Horários'},
      { title: 'Documentos'},
    ];
  }

  return_icons_names(index) {
    return this.sidenavIcons[index];
  }
}
