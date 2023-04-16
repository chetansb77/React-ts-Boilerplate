type ITimeZone = Record<string, string>;

// Fill in the supported time zones with zone code
const timeZoneOffsets: ITimeZone = {
  IST: '+5.5',
};

const calcTime = (timezone: string): Date => {
  // create Date object for current location
  const d = new Date();

  // convert to msec
  // subtract local time zone offset
  // get UTC time in msec
  const utc = d.getTime() + d.getTimezoneOffset() * 60000;

  // create new Date object for different city
  // using supplied offset
  const nd = new Date(utc + 3600000 * Number(timeZoneOffsets[timezone]));

  // return date object
  return nd;
};

export default calcTime;
export { timeZoneOffsets };
