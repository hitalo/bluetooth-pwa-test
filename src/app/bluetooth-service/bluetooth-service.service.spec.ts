import { TestBed, inject } from '@angular/core/testing';

import { BluetoothServiceService } from './bluetooth-service.service';

describe('BluetoothServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BluetoothServiceService]
    });
  });

  it('should be created', inject([BluetoothServiceService], (service: BluetoothServiceService) => {
    expect(service).toBeTruthy();
  }));
});
