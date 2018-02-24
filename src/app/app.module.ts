import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { WebBluetoothModule } from '@manekinekko/angular-web-bluetooth';
import { BluetoothService } from './bluetooth-service/bluetooth-service.service';

import { AppComponent } from './app.component';
import { BluetoothTestComponent } from './bluetooth-test/bluetooth-test.component';

@NgModule({
  declarations: [
    AppComponent,
    BluetoothTestComponent
  ],
  entryComponents: [
    BluetoothTestComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ServiceWorkerModule.register('/ngsw-worker.js', {enabled: environment.production}),
    WebBluetoothModule.forRoot({enableTracing: true})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
