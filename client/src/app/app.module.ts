import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { UserPage } from '../pages/user/user';
import { ChatPage } from '../pages/chat/chat';
import { LoginPage } from '../pages/login/login';
import { GlobalPage } from '../pages/global/global';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    UserPage,
    ChatPage,
    GlobalPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    UserPage,
    ChatPage,
    GlobalPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
