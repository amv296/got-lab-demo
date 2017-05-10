import { GotLabDemoPage } from './app.po';

describe('got-lab-demo App', () => {
  let page: GotLabDemoPage;

  beforeEach(() => {
    page = new GotLabDemoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
