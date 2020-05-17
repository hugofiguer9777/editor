import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navegacion',
  templateUrl: './navegacion.component.html',
  styleUrls: ['./navegacion.component.css']
})
export class NavegacionComponent implements OnInit {

  file: any;
  extension: string;
  base64: string;
  name: string;

  contenido: any;

  constructor() { }

  ngOnInit(): void {
  }

  abrirArchivo() {

  }

  changeListener($event) : void {
    this.file = $event.target.files[0];
    if(this.file != null){
      this.getFile(this.file);
    }
  }

  getFile(newFile) {
    console.log(newFile);
    const reader = new FileReader();
    reader.readAsText(newFile);
    reader.onload = (e) => {
      this.name = newFile.name.split('.')[0];
      this.base64 = reader.result as string;
      this.base64 = this.base64.split(',')[1];
      this.extension = newFile.name.split('.')[1];

      this.contenido = reader.result;

      console.log(this.contenido);
      console.log(this.name);
      console.log(this.base64);
      console.log(this.extension);
    }
  }

}
