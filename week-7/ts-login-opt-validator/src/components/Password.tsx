import React, { createRef, useEffect, useState } from "react";
import classes from "./PasswordProps.module.css";

interface PasswordProps {
  numerOfInputs?: number;
}
function Password(props: PasswordProps) {
  const numerOfInputs = props?.numerOfInputs || 4;

  const [inputRefsArray] = useState<React.RefObject<HTMLInputElement>[]>(() =>
    Array.from({ length: numerOfInputs }, () => createRef())
  );

  const [currentIndex, setCurrentIndex] = useState<number>(0);

  // save letters in a array where each entry in the array refers to an input
  const [letters, setLetters] = useState<string[]>(() =>
    Array.from({ length: numerOfInputs }, () => "")
  );

  const handleKeyPress = () => {
    console.log();
    
    setCurrentIndex((prevIndex) => {
      // calculate the next input index, next input after the final input will be again the first input. you can change the logic here as per your needs
      const nextIndex = prevIndex < numerOfInputs - 1 ? prevIndex + 1 : 0;
      const nextInput = inputRefsArray?.[nextIndex]?.current;
      if (nextInput) {
        nextInput.focus();
        nextInput.select();
      }
      return nextIndex;
    });
  };

  useEffect(() => {
    // focus the firs iput initially
    if (inputRefsArray?.[0]?.current) {
      inputRefsArray?.[0]?.current?.focus();
    }

    // add the event listener for keyup keyboard event
    window.addEventListener("keyup", handleKeyPress, false);

    // remove the event listener when the component unmounts
    return () => {
      window.removeEventListener("keyup", handleKeyPress);
    };
  }, []);

  return (
    <>
      {inputRefsArray.map((ref, index) => {
        return (
          <input
            className={classes.otpBox}
            ref={ref}
            type="text"
            id={`box${index}-1`}
            onChange={(e) => {
              const { value } = e.target;
              setLetters((letters) =>
                letters.map((letter, letterIndex) =>
                  letterIndex === index ? value : letter
                )
              );
            }}
            onClick={(e: React.MouseEvent<HTMLInputElement>) => {
              setCurrentIndex(index);
              (e.target as HTMLInputElement).select();
            }}
            value={letters[index]}
            max={"1"}
          />
        );
      })}
    </>
  );
}
export default Password;
