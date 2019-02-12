import { Component } from '@angular/core';
import { DeseoService } from '../../services/deseos.service';
import { Lista } from '../../models/lista.model';

@Component({
    selector: 'page-terminados',
    templateUrl: 'terminados.component.html'
})
export class TerminadosPage {
    constructor( public deseoService: DeseoService )
    {
        
    }

    listaSeleccionada( lista: Lista )
    {
        console.log(lista);
    }
}
