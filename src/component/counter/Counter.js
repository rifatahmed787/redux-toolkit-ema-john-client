import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "../../features/counterSlice";

import styles from "./Counter.module.css";

export function Counter() {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  return (
    <div>
      <div className={styles.row}>
        <button
          className={styles.button}
          aria-label="Decrement value"
          onClick={() => dispatch(decrement(5))}
        >
          -
        </button>
        <span className={styles.value}>{count}</span>
        <button
          className={styles.button}
          aria-label="Increment value"
          onClick={() => dispatch(increment(5))}
        >
          +
        </button>
      </div>
    </div>
  );
}
