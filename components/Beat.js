import React from 'react';
import styles from './Beat.module.scss';

const Beat = ({ beat }) => {
  return (
    <section className={styles.beat}>
      {beat && beat.capo !== undefined && (
        <div className={styles.capo}>
          {'C.' + beat.capo}
        </div>
      )}
      <div className={styles.noteContainer}>
        {beat && <span className={styles.note}>{beat.line1}</span>}
      </div>
      <div className={styles.noteContainer}>
        {beat && <span className={styles.note}>{beat.line2}</span>}
      </div>
      <div className={styles.noteContainer}>
        {beat && <span className={styles.note}>{beat.line3}</span>}
      </div>
      <div className={styles.noteContainer}>
        {beat && <span className={styles.note}>{beat.line4}</span>}
      </div>
      <div className={styles.noteContainer}>
        {beat && <span className={styles.note}>{beat.line5}</span>}
      </div>
      <div className={styles.noteContainer}>
        {beat && <span className={styles.note}>{beat.line6}</span>}
      </div>
    </section>
  );
};

export default Beat;
