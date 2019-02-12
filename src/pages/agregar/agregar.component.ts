import { Component } from '@angular/core';
import { DeseoService } from '../../services/deseos.service';
import { Lista, ListaItem } from '../../models';
import { NavParams } from 'ionic-angular';
import { PendientesPage } from '../pendientes/pendientes.components';



@Component({
    selector: 'page-agregar',
    templateUrl: 'agregar.component.html'
})
export class AgregarPage {
    lista: Lista;
    nombreItem: string = '';

    constructor( public deseoService: DeseoService, private navParams: NavParams )
    {   
        const titulo = this.navParams.get('titulo');

        if(this.navParams.get('lista')) {
            this.lista = this.navParams.get('lista');
        }else {
            this.lista = new Lista(titulo);
            this.deseoService.agregarLista( this.lista );
        }
        
    }

    agregarItem() {
        if(this.nombreItem.length === 0){
            return;
        }
        const nuevoItem = new  ListaItem(this.nombreItem);
        this.lista.items.push( nuevoItem );
        this.nombreItem = '';
        this.deseoService.guardarStorage();

    }

    actualizarTarea(item: ListaItem){
        item.completado = !item.completado;
        const pendientes = this.lista.items.filter(itemData => {
           return !itemData.completado;
        }).length;
        if(pendientes === 0)
        {
            this.lista.terminada = true;
            this.lista.terminadaEn = new Date();
        }else{
            this.lista.terminada = false;
            this.lista.terminadaEn = null;
        }
        this.deseoService.guardarStorage();
    }

    borrar(idx: number)
    {
        this.lista.items.splice( idx, 1 );
        this.deseoService.guardarStorage();
    }

 

}
