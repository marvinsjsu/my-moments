import { useState, useEffect, useRef } from "react";

type CountDownReturn = [
  {
    countDown: number,
    isStarted: boolean,
    isPaused: boolean,
  },
  {
    start: (count?: number) => void,
    pause: () => void,
    reset: () => void,
  }
];

export function useCountdown(): CountDownReturn {
  const [ initialCount, setInitialCount ] = useState<number>(-1);
  const [ countDown, setCountDown ] = useState<number>(-1);
  const [ isStarted, setIsStarted ] = useState<boolean>(false);
  const [ isPaused, setIsPaused ] = useState<boolean>(false);

  const intervalRef = useRef<number | null>();

  const removeInterval = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  useEffect(() => {
    if (countDown === -1) return;

    if (intervalRef.current && countDown < 0) {
      removeInterval();
    } else {
      if (!intervalRef.current) {
        setIsStarted(true);
        intervalRef.current = window.setInterval(() => {
          setCountDown((count) => {
            console.log("COUNT: ", count);
            return count - 1;
          });
        }, 100);
      }
    }

    return () => removeInterval();
  }, [countDown, initialCount, isPaused]);

  useEffect(() => {
    if (intervalRef.current && isPaused) {
      removeInterval();
    }
  }, [isPaused]);

  useEffect(() => {
    setCountDown(initialCount);
  }, [initialCount]);

  return [
    { countDown, isStarted, isPaused },
    { 
      start: (count) => {
        setInitialCount(count ?? initialCount);
        setIsPaused(false);
      },
      pause: () => {
        removeInterval();
        setIsPaused(true);
      },
      reset: () => {
        setIsStarted(false);
        setIsPaused(false);
        setInitialCount(-1);
      },
    }
  ];
}



