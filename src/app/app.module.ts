import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule, ToastController, LoadingController } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { OpenLibraryProvider } from '../providers/open-library/open-library';
import { OpenLibraryPageModule } from '../pages/open-library/open-library.module';
import { HttpClientModule } from '@angular/common/http';
import { LivroDetalhePageModule } from '../pages/livro-detalhe/livro-detalhe.module';
import { BarcodeScanner } from '@ionic-native/barcode-scanner'

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    OpenLibraryPageModule,
    HttpClientModule,
    LivroDetalhePageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    OpenLibraryProvider,
    BarcodeScanner,
    ToastController,
    LoadingController
  ]
})
export class AppModule {}
