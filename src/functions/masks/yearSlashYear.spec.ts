import yearSlashYear from './yearSlashYear';

describe('yearSlashYear', () => {
  it('Should be returns year/year from any string date', () => {
    const result = yearSlashYear('20202023');

    expect(result).toBe('2020/2023');
  });
});
