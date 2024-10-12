"use client";

import { cn } from "../../../lib/utils";
import { motion, stagger, useAnimate } from "framer-motion";
import { useEffect ,useState} from "react";

export const TypewriterEffect = ({
    words,
    className,
    cursorClassName,
  }: {
    words: {
      text: string;
      className?: string;
    }[];
    className?: string;
    cursorClassName?: string;
  }) => {
    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const [isInView, setIsInView] = useState(false);
  
    const wordsArray = words.map((word) => {
      return {
        ...word,
        text: word.text.split(""),
      };
    });
  
    const [scope, animate] = useAnimate();
    useEffect(() => {
      if (isInView) {
        animate(
          "span",
          {
            display: "inline-block",
            opacity: 1,
            width: "fit-content",
          },
          {
            duration: 0.3,
            delay: stagger(0.1),
            ease: "easeInOut",
          }
        );
      }
    }, [isInView, currentWordIndex]); // Add currentWordIndex as a dependency
  
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentWordIndex((prevIndex) => (prevIndex + 1) % wordsArray.length); // Loop through words
      }, 3000); // Adjust the duration as needed
  
      return () => clearInterval(interval);
    }, [wordsArray.length]);
  
    const renderWords = () => {
      return (
        <motion.div ref={scope} className="inline">
          {wordsArray[currentWordIndex].text.map((char, index) => (
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              key={`char-${index}`}
              className={cn(
                `dark:text-white text-black opacity-0 hidden text-3xl`,
                wordsArray[currentWordIndex].className
              )}
            >
              {char}
            </motion.span>
          ))}
        </motion.div>
      );
    };
  
    return (
      <div
        className={cn(
          "text-base sm:text-2xl md:text-5xl lg:text-5xl font-bold text-center",
          className
        )}
        onMouseEnter={() => setIsInView(true)} // Set inView when mouse hovers
        onMouseLeave={() => setIsInView(false)} // Reset inView when mouse leaves
      >
        {renderWords()}
        <motion.span
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 0.8,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className={cn(
            "inline-block rounded-sm w-[8px] h-4 md:h-6 lg:h-10 bg-blue-500",
            cursorClassName
          )}
        ></motion.span>
      </div>
    );
  };

export const TypewriterEffectSmooth = ({
  words,
  className,
  cursorClassName,
}: {
  words: {
    text: string;
    className?: string;
  }[];
  className?: string;
  cursorClassName?: string;
}) => {
  // split text inside of words into array of characters
  const wordsArray = words.map((word) => {
    return {
      ...word,
      text: word.text.split(""),
    };
  });
  const renderWords = () => {
    return (
      <div>
        {wordsArray.map((word, idx) => {
          return (
            <div key={`word-${idx}`} className="inline-block">
              {word.text.map((char, index) => (
                <span
                  key={`char-${index}`}
                  className={cn(`dark:text-white text-black text-xl sm:text-6xl lg:text-8xl`, word.className)}
                >
                  {char}
                </span>
              ))}
              &nbsp;
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <div className={cn("flex space-x-1 my-7", className)}>
      <motion.div
        className="overflow-hidden pb-2"
        initial={{
          width: "0%",
        }}
        whileInView={{
          width: "fit-content",
        }}
        transition={{
          duration: 2,
          ease: "linear",
          delay: 1,
        }}
      >
        <div
          className="text-xs sm:text-base md:text-xl lg:text:3xl xl:text-5xl font-bold"
          style={{
            whiteSpace: "nowrap",
          }}
        >
          {renderWords()}{" "}
        </div>{" "}
      </motion.div>
      <motion.span
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          duration: 0.8,

          repeat: Infinity,
          repeatType: "reverse",
        }}
        className={cn(
          "block  w-[16px]  left-0 bg-teal-500",
          cursorClassName
        )}
      ></motion.span>
    </div>
  );
};
