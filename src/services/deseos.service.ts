import { Injectable } from '@angular/core';
import { Lista } from '../models';
import { Loading } from 'ionic-angular';

@Injectable()
export class DeseoService {

    listas : Lista[] = [];

    constructor() {
        this.cargarStorage();
    }

    agregarLista( lista: Lista) {
        this.listas.push( lista );
        this.guardarStorage();
    }

    guardarStorage () {
        localStorage.setItem('data', JSON.stringify( this.listas ));
    }

    cargarStorage() {
        if(localStorage.getItem('data'))
        {
            this.listas = JSON.parse(localStorage.getItem('data'));
        }
    }

    borrarLista( lista: Lista) {
        this.listas = this.listas.filter( ListaData => {
            return ListaData.id !== lista.id;
        })
        this.guardarStorage();
    }

}