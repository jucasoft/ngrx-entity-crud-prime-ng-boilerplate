import {Directive, HostListener, Input, NgModule, OnDestroy, OnInit} from '@angular/core';
import {Subject, Subscription} from 'rxjs';

/**
 * direttiva per utilizzare un subject al posto di un metodo in un tag html
 *
 *   fblClick$ = new Subject().pipe(
 *      debounceTime(1000),
 *      tap(tappo => console.log('tappo', tappo)),
 *   );
 *
 * <button type="button" pButton icon="pi pi-plus"
 *         label="New SpellBoard" (click)="fblClick$"
 *         [disabled]="(disabled$ |async)"
 *         class="p-button-success"></button>
 */
@Directive({
  selector: '[fblClick]'
})
export class FblClickDirective implements OnDestroy, OnInit {

  observable$: Subject<any>;
  subscription: Subscription;

  @Input('fblClick')
  set fblClick(observable$: Subject<any>) {
    console.log('FblClickDirective.fblClick()');
    this.observable$ = observable$;
  }

  constructor() {
    console.log('FblClickDirective.constructor()');
  }

  ngOnDestroy(): void {
    console.log('FblClickDirective.ngOnDestroy()');
    this.subscription.unsubscribe();
  }

  ngOnInit(): void {
    console.log('FblClickDirective.ngOnInit()');
    this.subscription = this.observable$.subscribe();
  }

  @HostListener('click', ['$event', '$event.target'])
  public onClick(event: MouseEvent, targetElement: HTMLElement): void {
    console.log('FblClickDirective.onClick()');
    console.log('targetElement', targetElement);
    if (!targetElement) {
      return;
    }

    this.observable$.next(event);
  }

}

@NgModule({
  declarations: [FblClickDirective],
  exports: [FblClickDirective]
})
export class FblClickModule {
}
