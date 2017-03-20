import nightmare from 'nightmare';
import assert from 'assert';

const URL = 'http://localhost:9999';

describe('p5', () => {
  let page;
  beforeEach(() => {
    page = nightmare({ show: true });
  });

  it('should show page', () => {
    const result = page
      .goto(URL)
      .title()
      .end()
      .then(title => assert.strictEqual(title, 'p5'));
    return result;
  });
});
