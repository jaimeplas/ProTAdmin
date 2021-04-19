import { Component, OnDestroy} from '@angular/core';
import { Observable, interval, Subscription } from 'rxjs';
import { retry, take, map, filter } from 'rxjs/operators'

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: [
  ]
})
export class RxjsComponent implements OnDestroy {

  public intervalSub: Subscription

  constructor() { 

    // this.retornaObservable().pipe(
    //   retry(1)
    // ).subscribe(
    //   valor => console.log('Subs:', valor),
    //   err => console.warn('ERROR', err),
    //   () => console.info('Obs Terminado')
    // )
    this.intervalSub = this.retornaIntervalo().subscribe(console.log)
  }
  ngOnDestroy(): void {
    this.intervalSub.unsubscribe()
  }

retornaIntervalo(): Observable<number> {

  return interval(500)
                .pipe(
                  take(10),
                  map( valor => valor + 1),
                  filter(valor => (valor % 2 === 0)? true: false )
                  //map( valor => {return 'Hola Mundo: ' + valor})
                  )
}

  retornaObservable(): Observable<number>{
    let i = -1
    return new Observable<number>(observer =>{
      const intervalo = setInterval(()=>{
        i++
        observer.next(i)
        if(i===4){
          clearInterval(intervalo)
          observer.complete()
        }
        if(i===2){
          console.log('i = ' + i)
          observer.error('i llego al valro 2')
        }        

      }, 1000)
    })
  }
}
