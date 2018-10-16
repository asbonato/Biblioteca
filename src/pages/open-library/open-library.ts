import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, LoadingController } from 'ionic-angular';
import { OpenLibraryProvider } from '../../providers/open-library/open-library';
import { LivroDetalhePage } from '../livro-detalhe/livro-detalhe';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { THROW_IF_NOT_FOUND } from '@angular/core/src/di/injector';

/**
 * Generated class for the OpenLibraryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-open-library',
  templateUrl: 'open-library.html',
  providers: [OpenLibraryProvider]
})
export class OpenLibraryPage {
  public book: JSON;
  public isbn: string;
  public loader;
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private bookProvider: OpenLibraryProvider,
    private barcodeScanner: BarcodeScanner,
    public toastCtrl: ToastController,
    public loadingCtrl: LoadingController) {
  }

  bookSearch(isbn) {
    this.presentLoading();
    this.bookProvider.getBookData(isbn).subscribe(
      data => {
        const response = (data as any);
        console.log(response);
        var chaves = Object.keys(response);
        console.log('chaves: ' + chaves);
        this.loader.dismiss();
        if (chaves[0] == null) {
          const toast = this.toastCtrl.create({
            message: 'Livro não encontrado na base de dados da OpenLibrary.',
            duration: 3000,
            position: 'middle'
          });
          toast.present();
        } else {
          this.book = response[chaves[0]];
          this.navCtrl.push(LivroDetalhePage, { livro: this.book });
        }
        console.log(this.book);
      }, error => {
        console.log(error);
      }
    )
  }

  lerBarCode() {
    this.barcodeScanner.scan().then(barcodeData => {
      this.isbn = barcodeData.text;
      console.log('Barcode data', barcodeData);
    }).catch(err => {
      console.log('Error', err);
    });
  }

  presentLoading() {
    this.loader = this.loadingCtrl.create({
      content: "Consultando a API da OpenLibrary. Aguarde...",
      duration: 3000
    });
    this.loader.present();
  }

}
