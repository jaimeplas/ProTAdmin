import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styles: [
  ]
})
export class PromesasComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {


     this.getUsuarios().then(Usuarios => {
       console.log(Usuarios)
     })

    //this.getUsuarios()

    // const promesa = new Promise((resolve, reject)  => {
    //   if (true){
    //     resolve("Ini Prom");
    //   } else {
    //     reject('Algo salio mal')
    //   }

      
    // });
    // promesa.then((mensaje)=>{
    //   console.log(mensaje)  
    // }).catch(error => console.log('Errpr en la promesa', error))

    // console.log("Fin Prom")
  }

  getUsuarios(){
    const promesa = new Promise( resolve => {
      fetch('https://reqres.in/api/users')
      .then(resp => resp.json())
      .then(body => resolve(body.data))
    })
    return promesa
  }
}
