import { useEffect, useState } from 'react';
import '../styles/phone.css';
import { FaBatteryFull, FaSignal, FaWifi } from 'react-icons/fa';

const PhoneHeader = () => {
  const [time, setTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const hours = now.getHours().toString().padStart(2, '0');
      const minutes = now.getMinutes().toString().padStart(2, '0');
      setTime(`${hours}:${minutes}`);
    };
    updateTime();
    const intervalId = setInterval(updateTime, 60000); // Update every minute
    return () => clearInterval(intervalId);
  }, []);

  return (

    <div className="phone-header">
      <div className="left-section p-2">
        <span className="time">{time}</span>
      </div>
      <div className="right-section p-2">

        <FaSignal />
        <FaWifi />
        <FaBatteryFull />

      </div>
    </div>


  );
};

export default PhoneHeader;
