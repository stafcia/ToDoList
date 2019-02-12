import { Component } from '@angular/core';
import { DeseoService } from '../../services/deseos.service';
import { Lista } from '../../models/lista.model';
import { NavController, AlertController } from 'ionic-angular';
import { AgregarPage } from '../agregar/agregar.component';

@Component({
    selector: 'page-pendientes',
    templateUrl: 'pendientes.component.html'
})
export class PendientesPage {

    constructor( public deseoService: DeseoService, private navCtrl: NavController,public alertCtrl: AlertController )
    {
        
    }

   

    agregarLista() {
    
        const alerta = this.alertCtrl.create({
            title: "Nueva Lista",
            message: "Nombre de la Nueva lista",
            inputs: [{
                name:'titulo',
                placeholder: 'Nombre de la lista'
            }],
            buttons:[{
                text:'Cancelar'
            },
                {text: 'Agregar',
                handler: data => {
                    if(data.titulo.length === 0){
                        return;
                    }
                    this.navCtrl.push( AgregarPage, {
                        titulo: data.titulo
                    });
                }
            }
            ]
        })

        alerta.present();
    }

   
   
}
