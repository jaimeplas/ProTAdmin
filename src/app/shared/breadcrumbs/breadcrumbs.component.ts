import { Component, OnDestroy } from '@angular/core';
import { ActivationEnd, Router } from '@angular/router';
import { filter, map } from 'rxjs/operators';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styles: [
  ]
})
export class BreadcrumbsComponent implements OnDestroy {

  public titulo: string
  public tituloSubs$: Subscription

  constructor(private router: Router) { 
    this.tituloSubs$ = this.getArgumentosRuta()
                      .subscribe(data => {
                        this.titulo = data.title
                        document.title = `AdminPro - ${data.title}`
                      })
  }

  ngOnDestroy(): void {
    this.tituloSubs$.unsubscribe()
  }

  getArgumentosRuta(){
    return this.router.events
    .pipe(
      filter(event => event instanceof ActivationEnd),
      filter((event: ActivationEnd) => event.snapshot.firstChild === null),
      map((event: ActivationEnd) => event.snapshot.data),
    )
    //.subscribe({title} => {
    //  this.titulo = title
    //})
  }

}
