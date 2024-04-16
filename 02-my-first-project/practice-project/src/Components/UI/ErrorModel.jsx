import React from 'react';
import Card from './Card';
import Button from './Button';
import styles from './ErrorModel.module.css';

const ErrorModel = (props) => {
  return (
    <div className={styles.backdrop} onClick={props.onConfirm}>
      <Card className={styles.model}>
        <header className={styles.header}>
          <h2>{props.title}</h2>
        </header>
        <div>
          <p className={styles.para}>{props.message}</p>
        </div>
        <footer className={styles.foot}>
          <Button onClick={props.onConfirm}>Okay</Button>
        </footer>
      </Card>
    </div>
  );
};

export default ErrorModel;
