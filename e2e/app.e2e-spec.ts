import { BclMoviesPage } from './app.po';

describe('bcl-movies App', () => {
  let page: BclMoviesPage;

  beforeEach(() => {
    page = new BclMoviesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
