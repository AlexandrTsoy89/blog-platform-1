import styles from './FormButton.module.css';

function FormButton({ children, type = 'submit' }) {
  return (
    <button className={styles.button} type={type}>
      {children}
    </button>
  );
}

export default FormButton;
