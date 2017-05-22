import { BlockExploderUiPage } from './app.po';

describe('block-exploder-ui App', () => {
  let page: BlockExploderUiPage;

  beforeEach(() => {
    page = new BlockExploderUiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
