import { YuxiPocSliderPage } from './app.po';

describe('yuxi-poc-slider App', () => {
  let page: YuxiPocSliderPage;

  beforeEach(() => {
    page = new YuxiPocSliderPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
