import { PlaygroundPage } from './app.po';

describe('playground App', () => {
  let page: PlaygroundPage;

  beforeEach(() => {
    page = new PlaygroundPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
