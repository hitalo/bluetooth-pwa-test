import { Component, OnInit, NgZone } from '@angular/core';
import { BluetoothService } from '../bluetooth-service/bluetooth-service.service';

@Component({
  selector: 'app-bluetooth-test',
  templateUrl: './bluetooth-test.component.html',
  styleUrls: ['./bluetooth-test.component.css'],
  providers: [ BluetoothService ]
})
export class BluetoothTestComponent implements OnInit {

  batteryLevel: string = '--';
    device: any = {};

    constructor(public _zone: NgZone, public _batteryLevelService: BluetoothService) { 
      console.log("ble ", navigator.bluetooth);
    }

    ngOnInit() {
      this.getDeviceStatus();
      this.streamValues();
    }

    streamValues() {
      this._batteryLevelService.streamValues().subscribe(this.showBatteryLevel.bind(this));
    }

    getDeviceStatus() {
      this._batteryLevelService.getDevice().subscribe(
        (device) => {

          if(device) {
            this.device = device;
            console.log("name: ", device.name);
          }
          else {
            // device not connected or disconnected
            this.device = null;
            this.batteryLevel = '--';
          }
        }
      );
    }

    getFakeValue() {
      this._batteryLevelService.getFakeValue();
    }

    getBatteryLevel() {
      return this._batteryLevelService.getBatteryLevel().subscribe(this.showBatteryLevel.bind(this));
    }

    showBatteryLevel(value: number) {

      // force change detection
      this._zone.run( () =>  {
        console.log('Reading battery level %d', value);
        this.batteryLevel = ''+value;
      });
    }

}
