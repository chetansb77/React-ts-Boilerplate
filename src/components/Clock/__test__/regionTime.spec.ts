import calcTime, { timeZoneOffsets } from '../regionTime';

const cases: Array<[string, number]> = [
  ['IST', (Number(timeZoneOffsets.IST) * 60)],
  ['JPN', NaN],
];

describe('test calcTime function', () => {
  test.each(cases)('get %p time', (timezoneCode: string, result: number): any => {
    const dateTimeObj = calcTime(timezoneCode);
    expect(Math.abs(dateTimeObj.getTimezoneOffset())).toEqual(result);
    expect(true).toEqual(true);
  });
});
