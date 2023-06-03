import React, { useLayoutEffect, useState } from 'react';

function DarkMode() {
  const [isWhite, setIsWhite] = useState(true);

  useLayoutEffect(() => {
    const body = document.querySelector('body');
    body.className = isWhite ? 'light-mode' : 'dark-mode';

    return () => {
      body.className = '';
    };
  }, [isWhite]);

  const toggleBackground = () => {
    setIsWhite((prevIsWhite) => !prevIsWhite);
  };

  return (
    <div className='position-absolute top-5 end-5'>
      <button className='ovr-btn btn btn-sm' onClick={toggleBackground}>
        {isWhite ? 'DarkMode' : 'LightMode'}
      </button>
    </div>
  );
}

export default DarkMode;