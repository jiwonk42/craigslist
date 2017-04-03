import { CraiglistPage } from './app.po';

describe('craiglist App', function() {
  let page: CraiglistPage;

  beforeEach(() => {
    page = new CraiglistPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
