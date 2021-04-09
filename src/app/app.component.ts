import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { RecuperarDadosService } from 'src/shared/recuperar-dados.service';
import {formatDate} from '@angular/common';
import { ChartType, getPackageForChart, ScriptLoaderService } from 'angular-google-charts';
import { ExportToCsv } from 'export-to-csv';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  myData;

  chartColumns = ['', 'Deaths','Moving Average'];

  myOptions = {

    is3D: false,
    'width':1000,
    'height':600,
    vAxis: {title: 'Deaths'},
    hAxis: {title: 'Days'},
   // title:'COVID Moving Average - Pernambco',
    legend: {position: 'bottom', alignment:'center'},
    seriesType: 'bars',
    lineWidth: 5,
    chartArea: {'width': '80%', 'height': '60%'},
    series: {1: {type: 'line', color: 'red'}},
    'backgroundColor': {
      'fill': '#F4F4F4',
      'opacity': 100
   },
  };


  constructor(
    private servico: RecuperarDadosService,
    private loaderService: ScriptLoaderService){

  }


  public ngOnInit() {

    this.servico.recuperarDados().subscribe(value => {
      let dados;
      for (let elem in value) {
        if (value[elem]['results']) {
          let resultado = value[elem]['results'];
          dados = resultado.map(val => ({ data: val.date, mortes: val.deaths, mediaMovel: val.movAvgDay }))
        }
      }

      let final = dados.map(elem => ([formatDate(elem.data, 'dd/MM/yyyy', 'pt-br'), elem.mortes, Number(elem.mediaMovel)]))

      this.myData = final.reverse();


    });

  }

  export() {

    let data = this.myData.map(elem =>
      ({ date: elem[0], deaths: elem[1], movingAverage: Number(elem[2]) })
    );

    const options = {
      fieldSeparator: ',',
      quoteStrings: '"',
      decimalSeparator: '.',
      showLabels: true,
      showTitle: false,
      title: 'No Title',
      useTextFile: false,
      filename: 'covid-moving-average-pernambuco',
      useBom: true,
      useKeysAsHeaders: true,
    };

    const csvExporter = new ExportToCsv(options);

    csvExporter.generateCsv(data);

  }


}
