import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import {NovologinPage} from '../pages/novologin/novologin';
import {ProdutosPage} from '../pages/produtos/produtos';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AuthProvider } from '../providers/auth/auth';

import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireModule } from 'angularfire2';
import { firebaseConfig } from '../enviroments/environment';
import { ProdutosProvider } from '../providers/produtos/produtos';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    NovologinPage,
    ProdutosPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig), //criado arquivo deo configuracao e inicia o firebase
    AngularFireDatabaseModule, // modulo database
    AngularFireAuthModule // modulo de autenticacao
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    NovologinPage,
    ProdutosPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthProvider,
    ProdutosProvider
  ]
})
export class AppModule {}
