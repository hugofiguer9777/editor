import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-terminal',
  templateUrl: './terminal.component.html',
  styleUrls: ['./terminal.component.css']
})
export class TerminalComponent implements OnInit {

  actual: any;
  archivos: any = [];

  contenido: string;
  constructor() { }

  ngOnInit(): void {
    this.archivos.push({ nombre: "Archivo1.txt", contenido: "Esta es una prueba de un archivo \nAgregue un enter" });
    this.archivos.push({ nombre: "Archivo2.txt", contenido: "Esta es una prueba de un archivo 2" });
    this.archivos.push({ nombre: "Archivo3.txt", contenido: "Esta es una prueba de un archivo 3" });
  }

  seleccionTab(tab: any) {
    this.actual = tab;
    this.contenido = tab.contenido;
  }

  nuevaTab() {
    this.archivos.push({ nombre: "Archivo nuevo", contenido: ""});
  }

}
