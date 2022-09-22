import { useEffect, useRef, useState } from "react";


/**
 * Runs a countdown and returns seconds and milliseconds remaining starting from `start` until 0.
 *
 * @param {number} start Starting time of the countdown in milliseconds
 * @returns {[string, string]}
 */
const useCountdown = (start: number): [string, string] => {

  const requestRef = useRef<number>(0);
  const previousTimeRef = useRef(performance.now());
  const [countdown, setCountdown] = useState(start);
  const stopRef = useRef<boolean>(false);

  useEffect(() => {
    const animate = (time: number): void => {
      const deltaTime = time - previousTimeRef.current;
      setCountdown(prevCount => {
        const count = prevCount - deltaTime;
        stopRef.current = count <= 0;
        return count;
      });
      previousTimeRef.current = time;
      if (stopRef.current) {
        cancelAnimationFrame(requestRef.current);
        return;
      }
      requestRef.current = requestAnimationFrame(animate);
    };

    requestRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(requestRef.current);
  }, []);

  const count = Math.max(0, countdown);
  const seconds = Math.floor(count / 1000).toLocaleString("en-US", {
    minimumIntegerDigits : 2,
    useGrouping : false
  });
  const centiseconds = (Math.floor(count / 10) % 100).toLocaleString("en-US", {
    minimumIntegerDigits : 2,
    useGrouping : false
  });

  return [seconds, centiseconds];

};

export default useCountdown;
