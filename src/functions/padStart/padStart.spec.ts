import padStart from './padStart';

describe('padStart', () => {
  it('Should be padding is applied from the start of the current string.', () => {
    const fullNumber = '2034399002125581';
    const last4Digits = fullNumber.slice(-4);
    const result = padStart(last4Digits, {
      character: '*',
      pads: fullNumber.length
    });
    expect(result).toBe('************5581');
  });
});
