import { useEffect, useRef, useState } from "react";
import styles from "./progressCircle.module.css";

interface CircleProps {
  percentage: string;
  progressColor: string;
}

export default function ProgressCircle({
  percentage,
  progressColor,
}: CircleProps) {
  let innerCircleColor: string = "rgba(103, 104, 106, 0.368)";
  let backgroundColor: string = "rgb(45, 46, 55)";

  const endValue = Number(percentage);
  const [value, setValue] = useState(0);

  const progressCircleRef = useRef(null);
  const precentageRef = useRef(null);
  const innerCircleRef = useRef(null);

  useEffect(() => {
    let start = 0;

    const interval = setInterval(() => {
      start++;

      setValue(start);

      if (start >= endValue) {
        clearInterval(interval);
      }
    }, 50);
  }, [endValue]);

  return (
    <div
      ref={progressCircleRef}
      className={styles.progressCircle}
      data-innercirclecolor={innerCircleColor}
      data-percentage={percentage}
      data-backgroundcolor={backgroundColor}
      data-progresscolor={progressColor}
    >
      <div className={styles.innerCircle} ref={innerCircleRef}></div>
      <div className={styles.percentage} ref={precentageRef}>
        {value}%
      </div>
    </div>
  );
}
