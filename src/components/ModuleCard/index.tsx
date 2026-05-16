import React from 'react';
import styles from './styles.module.css';

export interface ModuleCardProps {
  title: string;
  description: string;
  href: string;
}

export default function ModuleCard({ title, description, href }: ModuleCardProps): JSX.Element {
  return (
    <a className={styles.card} href={href}>
      <h3>{title}</h3>
      <p>{description}</p>
    </a>
  );
}
