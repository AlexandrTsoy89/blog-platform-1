import styles from './FormCheckbox.module.css';

function FormCheckbox({ children }) {
  return (
    <label className={styles.checkbox}>
      <input type="checkbox" />

      <span>{children}</span>
    </label>
  );
}

export default FormCheckbox;
