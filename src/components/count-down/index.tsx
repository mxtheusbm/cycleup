import { useTaskContext } from "../../contexts/task-context/useTaskContext";
import styles from "./styles.module.css";

export function CountDown() {
  const { state } = useTaskContext();

  return (
    <div className={styles.container}>{state.formattedSecondsRemaining}</div>
  );
}
