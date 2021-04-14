import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './theme/layout/auth/auth.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NativeGeocoder } from '@ionic-native/native-geocoder/ngx';
import { Geolocation } from '@ionic-native/geolocation/ngx/';
import { GlobalError } from './interceptor/global-error';
import { Server } from './interceptor/server';
import { ReactiveFormsModule } from '@angular/forms';
import { Camera } from '@ionic-native/camera/ngx';
import { IonicStorageModule } from '@ionic/storage';
import { FileTransfer } from '@ionic-native/file-transfer/ngx';
import { Facebook } from '@ionic-native/facebook/ngx';
import { GooglePlus } from '@ionic-native/google-plus/ngx';
import { NgApexchartsModule } from 'ng-apexcharts';
import { OneSignal } from '@ionic-native/onesignal/ngx';


@NgModule({
  declarations: [AppComponent, AuthComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    IonicStorageModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgApexchartsModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    NativeGeocoder,
    FileTransfer,
    Facebook,
    GooglePlus,
    Geolocation,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    { provide: ErrorHandler, useClass: GlobalError },
    { provide: HTTP_INTERCEPTORS, useClass: Server, multi: true },
    Camera,
    OneSignal
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
