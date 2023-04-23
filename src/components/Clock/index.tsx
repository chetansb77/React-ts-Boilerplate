import React, { useState, useEffect } from 'react';
import calcTime from './regionTime';

interface ClockProps {
  timeType?: 'long' | 'short';
  regionCode?: string;
}

function Clock({
  timeType = 'short',
  regionCode = 'IST',
}: ClockProps): JSX.Element {
  const [time, setTime] = useState(calcTime(regionCode));

  useEffect(() => {
    const interval = setInterval(() => { setTime(calcTime(regionCode)); }, 1000);

    return () => { clearInterval(interval); };
  }, []);

  return (
    <div className="text-5xl font-extrabold ...">
      <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-500">
        {timeType === 'long' && time.toString()}
        {timeType === 'short' && time.toDateString()}
      </span>
    </div>
  );
}

export default Clock;
