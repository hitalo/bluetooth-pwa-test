import { TestBed, inject } from '@angular/core/testing';

import { BluetoothService } from './bluetooth-service.service';

describe('BluetoothServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BluetoothService]
    });
  });

  it('should be created', inject([BluetoothService], (service: BluetoothService) => {
    expect(service).toBeTruthy();
  }));
});
