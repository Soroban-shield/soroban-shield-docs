import React from 'react';
import styles from './styles.module.css';

export default function WaveBanner(): JSX.Element {
  return (
    <div className={styles.banner}>
      <strong>Stellar Wave</strong> — Soroban Shield participates in Wave 5.{' '}
      <a href="https://www.drips.network/wave/stellar">Apply on Drips</a>
    </div>
  );
}
