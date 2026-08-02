import styles from './FormCheckbox.module.css';

function FormCheckbox({ label, error, register, name }) {
  return (
    <div className={styles.wrapper}>
      <label className={styles.label}>
        <input
          type="checkbox"
          {...register(name, {
            required: 'You must agree to the processing of personal data',
          })}
        />

        <span>{label}</span>
      </label>

      {error && <span className={styles.error}>{error.message}</span>}
    </div>
  );
}

export default FormCheckbox;
