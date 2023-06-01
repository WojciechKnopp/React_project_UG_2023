import React, { useLayoutEffect, useState } from 'react';

function DarkMode() {
  const [isWhite, setIsWhite] = useState(true);

  useLayoutEffect(() => {
    const body = document.querySelector('body');
    body.style.backgroundColor = isWhite ? 'whitesmoke' : 'black';
    body.style.color = isWhite ? 'black' : 'white'

    return () => {
      body.style.backgroundColor = '';
    };
  }, [isWhite]);

  const toggleBackground = () => {
    setIsWhite((prevIsWhite) => !prevIsWhite);
  };

  return (
    <div>
      <button onClick={toggleBackground}>
        {isWhite ? 'DarkMode' : 'LightMode'}
      </button>
    </div>
  );
}

export default DarkMode;