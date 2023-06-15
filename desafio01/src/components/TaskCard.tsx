import { Circle, Trash, CheckCircle } from "phosphor-react";

import styles from "./TaskCard.module.css";
import { useState } from "react";


interface Props{
  content: string,
  onDeltetask:() => void,
  onDoneTask:() => void
}

export function TaskCard({ content, onDeltetask, onDoneTask }:Props) {
  const [done, setDone] = useState(false);

  function handleDoneTrue() {
    onDoneTask();
    setDone(true);
  }
  function handleDoneFalse() {
    onDoneTask();
    setDone(false);
  }

  return (
    <div className={styles.Card}>
      {done ? (
        <button onClick={handleDoneFalse}>
          <CheckCircle size={20} color="var(--blue)" weight="fill" />
        </button>
      ) : (
        <button onClick={handleDoneTrue}>
          <Circle size={20} color="var(--blue)" />
        </button>
      )}
      <p className={done ? styles.Done : ""}>{content}</p>
      <button onClick={onDeltetask}>
        <Trash size={20} color="var(--gray-300)" />
      </button>
    </div>
  );
}
