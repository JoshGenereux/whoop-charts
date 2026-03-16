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

  return (
    <div
      className={styles.progressCircle}
      data-innercirclecolor={innerCircleColor}
      data-percentage={percentage}
      data-backgroundcolor={backgroundColor}
      data-progresscolor={progressColor}
    >
      <div className={styles.innerCircle}></div>
      <div className={styles.percentage}></div>
    </div>
  );
}
