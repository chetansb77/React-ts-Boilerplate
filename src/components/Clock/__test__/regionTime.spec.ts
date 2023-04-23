import { vi } from 'vitest';
import calcTime from '../regionTime';

describe('calcTime', () => {
  const testCases = [
    { timezone: 'IST', expectedOffset: 5.5 },
    { timezone: 'PST', expectedOffset: -7 },
    // Add more test cases as needed
  ];

  test.each(testCases)('should calculate time correctly for %s timezone', ({ timezone, expectedOffset }) => {
    // Mock the current date to a fixed value for testing
    const currentDate = new Date('2023-04-23T10:30:00Z');
    global.Date = vi.fn(() => currentDate) as any;

    const expectedTime = new Date(currentDate.getTime() + expectedOffset * 3600000);

    const result = calcTime(timezone);

    expect(result).toEqual(expectedTime);
  });

  it('should return current time for invalid timezone', () => {
    // Mock the current date to a fixed value for testing
    const currentDate = new Date('2023-04-23T10:30:00Z');
    global.Date = vi.fn(() => currentDate) as any;

    // Test with an invalid timezone
    const timezone = 'InvalidTimezone';

    const result = calcTime(timezone);

    expect(result).toEqual(currentDate);
  });
});
