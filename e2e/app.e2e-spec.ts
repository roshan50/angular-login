import { AngProj2Page } from './app.po';

describe('ang-proj2 App', function() {
  let page: AngProj2Page;

  beforeEach(() => {
    page = new AngProj2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
