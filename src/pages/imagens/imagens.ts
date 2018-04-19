import { Component } from '@angular/core';
import { IonicPage, NavController, AlertController , NavParams } from 'ionic-angular';
import 'rxjs/add/operator/map';
import { Http } from '@angular/http';

@IonicPage()
@Component({
  selector: 'page-imagens',
  templateUrl: 'imagens.html',
})
export class ImagensPage {

  public dados: any = {};

  constructor(
      public navCtrl: NavController, 
      public navParams: NavParams, 
      public alertCtrl: AlertController,
      public http: Http)
          {        
          let url    = this.navParams.get('endereco');
          let codigo = this.navParams.get('codigo');

          this.http.get(url + '/master/lista.json')
          .map(res => res.json())
          .subscribe(data => {
            this.dados = data;
          });
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad ImagensPage');
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
