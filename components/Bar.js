import React from 'react';
import styles from './Bar.module.scss';
import Beat from './Beat';

const Bar = ({ bar }) => {
  return (  
    <div className={styles.bar}>
      <div className={styles.notesContainer}>
        <Beat beat={bar.beat1} />
        <Beat beat={bar.beat15} />
        <Beat beat={bar.beat2} />
        <Beat beat={bar.beat25} />
        <Beat beat={bar.beat3} />
        <Beat beat={bar.beat35} />
        <Beat beat={bar.beat4} />
        <Beat beat={bar.beat45} />
      </div>
      <div className={styles.lineContainer}>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
      </div>
    </div>
  );
}
 
export default Bar;