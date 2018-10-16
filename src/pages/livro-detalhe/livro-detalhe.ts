import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Livro } from '../../model/livro';

/**
 * Generated class for the LivroDetalhePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-livro-detalhe',
  templateUrl: 'livro-detalhe.html',
})
export class LivroDetalhePage {
  public livro: any;
  public book: Livro;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.livro = this.navParams.get('livro');
    this.book = new Livro();
    this.book.titulo = this.livro.title;
    if (this.livro.cover != null) {
      if (this.livro.cover.large != null) {
        this.book.capa = this.livro.cover.large;
      } else if (this.livro.cover.medium != null) {
        this.book.capa = this.livro.cover.medium;
      } else if (this.livro.cover.small != null) {
        this.book.capa = this.livro.cover.small;
      } else {
        this.book.capa = '../../assets/imgs/Book-Cover-Unavailable.png';
      }
    } else {
      this.book.capa = '../../assets/imgs/Book-Cover-Unavailable.png';
    }
    if (this.livro.subtitle != null) {
      this.book.subtitulo = this.livro.subtitle;
    }
    if (this.livro.authors != null) {
      var autor = this.livro.authors;
      for (var i = 0; i < autor.length; i++) {
        if (i == 0) {
          this.book.autor = autor[i].name;
        } else {
          this.book.autor += '; ' + autor[i].name;
        }
      }
    }
    if (this.livro.publishers != null) {
      var editora = this.livro.publishers;
      for (i = 0; i < editora.length; i++) {
        if (i == 0) {
          this.book.editora = editora[i].name;
        } else {
          this.book.editora += '; ' + editora[i].name;
        }
      }
    }
    this.book.publicacao = this.livro.publish_date;
    this.book.paginas = this.livro.number_of_pages;
    if (this.livro.identifiers != null) {
      if (this.livro.identifiers.isbn_13 != null) {
        this.book.isbn = this.livro.identifiers.isbn_13;
      } else if (this.livro.identifiers.isbn_10) {
        this.book.isbn = this.livro.identifiers.isbn_10;
      }
    }
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad LivroDetalhePage');
  }

}
