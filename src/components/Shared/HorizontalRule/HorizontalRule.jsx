import React from 'react';

import styles from './HorizontalRule.module.css';

function HorizontalRule() {
  return (
    <hr style={{padding: "0 0 10px 0", margin: "10px 0 0 0"}} className={styles.horizontalRule}></hr>
    )
}

export default HorizontalRule