### router-outlet
Nell'applicazione dev'essere presente router-outlet con il name specificato:
<router-outlet name="popUp"></router-outlet>



Ipotizzando di trovarsi nel sottomodulo con rotta "example";

### creare una rotta
Quando si crea una nuova rotta per la popUp bisogna controllare che esista una rotta vuota con il reindirizzamento, altrimenti all'apertura della popUP sparisce la pagina sottostante.
``
	{
		path: '',
		redirectTo: 'list',
		pathMatch: 'full'
	},
	{
		path: 'list',
		component: TableMainComponent,
		pathMatch: 'full'
	},
	
``

Di seguito una configurazione di rotta per l'apertura di una popUP.
``
    {
        path: 'percorso_apertura_pop_up',
        component: NomeComponente,
        outlet: 'popUp',
        pathMatch: 'full'
    }
``


### componente

.html

```
<p-dialog header="Run"
          [transitionOptions]="'0ms'"
          [visible]="true"
          [modal]="true"
          [responsive]="true"
          [style]="{width: '70em', minWidth: '200px'}"
          [minY]="70"
          [maximizable]="false"
          [closable]="false"
          (onHide)="onClose()">
          
        <p-header>
            <a (click)="onClose()" role="button" tabindex="0" class="ng-tns-c11-8 ui-dialog-titlebar-icon ui-dialog-titlebar-close ng-star-inserted" ><span class="pi pi-times"></span></a>                
        </p-header>
        ...
        ...
        ...
        <p-footer>
            <button pButton type="button" label="Cancel" (click)="cancel()"></button>
        </p-footer>
</p-dialog>

```

.ts

```

export class EditExamplePopUpComponent extends PopUpBaseComponent<EditExamplePopUpVo>{

    setItemPerform(value: EditExamplePopUpVo): void {
        
    }

    acceptPerform(): void {
        
    }
    
    onClose() {
        this.store$.dispatch(RouterStoreActions.RouterGo({path: ['example', {outlets: {popUp: null}}]}));
    }
}


export class EditExamplePopUpVo {
    datoA: DatoA[];
    datoB: DatoB;
}

```

Aggiungere il componente nell'attributo declared nel modulo corretto.

##  apertura della popUp:
```
    this.store$.dispatch(RouterStoreActions.RouterGo({
        path: ['example', {outlets: {popUp: ['percorso_apertura_pop_up']}}],
        extras: {state}
    }));
    
```
Descrizione del valore presente in "path", è un array di due elementi:
    Il primo è relativo al alla rotta del modulo, nel nostro caso "example"
    La seconda è quella della popUp "percorso_apertura_pop_up"
    
Il parametro "extras" serve a passare dati alla popUp.
