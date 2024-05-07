import React, { useState, useEffect } from 'react';
import { useAuth0 } from "@auth0/auth0-react";

function TypeWriter() {



  const {user}=useAuth0();
  const words = [`Hello,${user.name} `, "Welcome to my website!", "This is a typewriter effect."];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  

  useEffect(() => {
    const typingTimeout = setTimeout(() => {
      const currentWord = words[currentWordIndex];
      const textLength = currentText.length;

      if (!isDeleting) {
        setCurrentText(currentWord.substring(0, textLength + 1));
      } else {
        setCurrentText(currentWord.substring(0, textLength - 1));
      }

      if (!isDeleting && currentText === currentWord) {
        setIsDeleting(true);
      } else if (isDeleting && currentText === '') {
        setIsDeleting(false);
        setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
      }
    }, 100);

    return () => clearTimeout(typingTimeout);
  }, [currentText, currentWordIndex, isDeleting, words]);

  return (
    <div className="  flex basis-1/3 justify-center items-center">
      <h2 className="text-[3vw]  	text-gray-400/20 ">{currentText}</h2>
    </div>
  );
}

export default TypeWriter;
