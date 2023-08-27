import React, { useRef, useEffect } from 'react';

function WhiteCursor() {
  const cursorDivRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      if (cursorDivRef.current) {
        const { clientX, clientY } = event;
        cursorDivRef.current.style.left = `${clientX}px`;
        cursorDivRef.current.style.top = `${clientY}px`;
      }
    }
    
    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

 

  return (
    <div>
      <div className="white-cursor" ref={cursorDivRef}></div>
    </div>
  );
}

export default WhiteCursor
