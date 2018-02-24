import { BluetoothPwaTestPage } from './app.po';

describe('bluetooth-pwa-test App', () => {
  let page: BluetoothPwaTestPage;

  beforeEach(() => {
    page = new BluetoothPwaTestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
