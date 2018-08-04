import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { FeedPageModule } from "../pages/feed/feed.module";
import { UserPageModule } from "../pages/user/user.module";
import { SignupPageModule } from "../pages/signup/signup.module";
import { UsersServiceProvider } from '../providers/users-service/users-service';
import { FeedServiceProvider } from '../providers/feed-service/feed-service';
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [
    MyApp,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
    FeedPageModule,
    UserPageModule,
    SignupPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UsersServiceProvider,
    FeedServiceProvider
  ]
})
export class AppModule {}
