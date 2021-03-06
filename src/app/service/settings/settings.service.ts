import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  ajustes: Ajustes = {
    temaUrl: 'assets/css/colors/default.css',
    tema: 'default'
  }

  constructor(@Inject(DOCUMENT) private _document,) {this.cargarAjustes()}

  guardarAjustes(){
    localStorage.setItem('Ajustes', JSON.stringify(this.ajustes))
  }

  cargarAjustes(){
    if (localStorage.getItem('Ajustes')){
      this.ajustes = JSON.parse(localStorage.getItem('Ajustes'))
      this.aplicatTema(this.ajustes.tema)
    }else{
      this.aplicatTema(this.ajustes.tema)      
    }
  }

  aplicatTema(tema: string){
    let url = `assets/css/colors/${tema}.css`
    this._document.getElementById('theme').setAttribute('href', url)
    this.ajustes.tema = tema
    this.ajustes.temaUrl = url
    this.guardarAjustes()
  }
}

interface Ajustes {
  temaUrl: string;
  tema: string
}