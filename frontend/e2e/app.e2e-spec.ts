import { SimpleDashboardPage } from './app.po';

describe('simple-dashboard App', function() {
  let page: SimpleDashboardPage;

  beforeEach(() => {
    page = new SimpleDashboardPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
