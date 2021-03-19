import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mi-proyecto';
  promEdad = 0;
  sumaEdad = 0;
  edadUno:string = '';
  edadDos:string = '';

  Calcular() {
    /*console.log(this.edadUno);*/
    if (this.edadUno != '' && this.edadDos != '') {
      this.sumaEdad = parseFloat(this.edadUno) + parseFloat(this.edadDos);
      this.promEdad = this.sumaEdad / 2;
    }

    console.log(this.sumaEdad);
    console.log(this.promEdad);
  }

  Limpiar(){
    this.edadUno = '';
    this.edadDos = '';
  }
}
