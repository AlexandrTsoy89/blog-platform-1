import styles from './AuthCard.module.css';

function AuthCard({ title, children }) {
  return (
    <section className={styles.card}>
      <h1 className={styles.title}>{title}</h1>

      {children}
    </section>
  );
}

export default AuthCard;
