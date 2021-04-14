import { Injectable } from '@angular/core';
import { OneSignal } from '@ionic-native/onesignal/ngx';

@Injectable({
  providedIn: 'root'
})
export class PushService {

  constructor(
    private oneSignal: OneSignal
  ) { }

  configuracionInicial() {
    this.oneSignal.startInit('78064c43-87c7-4724-8037-a9642b048c79', '179837453995');

    this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.InAppAlert);
    
    this.oneSignal.handleNotificationReceived().subscribe(( noti ) => {
     // do something when notification is received
     console.log('nOTIFICACION RECIBIDA', noti);
    });
    
    this.oneSignal.handleNotificationOpened().subscribe(( noti ) => {
      // do something when a notification is opened
      console.log('nOTIFICACION ABIERTA', noti);
    });
    
    this.oneSignal.endInit();    
  }
}
