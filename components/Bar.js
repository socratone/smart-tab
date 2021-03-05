import React from 'react';
import styles from './Bar.module.scss';
import Beat from './Beat';

const Bar = ({ bar }) => {
  return (  
    <div className={styles.bar}>
      <div className={styles.notesContainer}>
        <Beat beat={bar.b1g1} />
        <Beat beat={bar.b1g2} />
        <Beat beat={bar.b1g3} />
        <Beat beat={bar.b1g4} />
        <Beat beat={bar.b2g1} />
        <Beat beat={bar.b2g2} />
        <Beat beat={bar.b2g3} />
        <Beat beat={bar.b2g4} />
        <Beat beat={bar.b3g1} />
        <Beat beat={bar.b3g2} />
        <Beat beat={bar.b3g3} />
        <Beat beat={bar.b3g4} />
        <Beat beat={bar.b4g1} />
        <Beat beat={bar.b4g2} />
        <Beat beat={bar.b4g3} />
        <Beat beat={bar.b4g4} />
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