import { useState } from 'react';
import side1 from './assets/side_1.png';
import side2 from './assets/side_2.png';
import side3 from './assets/side_3.png';
import side4 from './assets/side_4.png';
import side5 from './assets/side_5.png';
import side6 from './assets/side_6.png';


export default function DieContainer() {

  const [side, setSide] = useState(5);
  const [rolled, setRolled] = useState(false);

  const images = {
    '1': side1,
    '2': side2,
    '3': side3,
    '4': side4,
    '5': side5,
    '6': side6
  }

  const handleClick = () => {
    if (!rolled) setRolled(true);
    setSide(Math.ceil(Math.random() * 6));
  }

  return (
    <div>
      <img src={images[side]} alt='side' />
      {rolled &&
      <div>
        <h1>{side}</h1>
      </div>
      }
      <button onClick={handleClick}>Roll</button>
    </div>
  )
}