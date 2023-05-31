import React, { useLayoutEffect, useState } from 'react';

function DarkMode() {
  const [isWhite, setIsWhite] = useState(true);

  useLayoutEffect(() => {
    const body = document.querySelector('body');
    body.style.backgroundColor = isWhite ? 'white' : 'black';
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
      <h2>Background Changer</h2>
      <button onClick={toggleBackground}>
        Change Background to {isWhite ? 'Black' : 'White'}
      </button>
    </div>
  );
}

export default DarkMode;