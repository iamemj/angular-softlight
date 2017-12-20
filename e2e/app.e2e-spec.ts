import { AngularSoftlightPage } from './app.po';

describe('angular-softlight App', function() {
  let page: AngularSoftlightPage;

  beforeEach(() => {
    page = new AngularSoftlightPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
