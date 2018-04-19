import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { Http} from '@angular/http';

import {ImagensPage} from '../imagens/imagens';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  private url:string = 'https://raw.githubusercontent.com/vagneraugus/imgs';
  public wall: Array<{}>;

  constructor(
      public navCtrl: NavController, 
      public alertCtrl: AlertController,
      public http: Http
          ) {
              this.http.get(this.url +'/master/lista.json')            
              .map(res => res.json())
              .subscribe(data => {
                this.wall = data;
              });
          }
       
  descricao(id){
    this.navCtrl.push(ImagensPage,
    {
      'codigo': id,
      'endereco': this.url
    });
  }
 
  showAlert() {
    let alert = this.alertCtrl.create({
      title: 'Alunos',
      subTitle: 'Vagner Augustinho e Robson Ap. Cominato',
      buttons: ['OK']
    });
    alert.present();
  }

}
