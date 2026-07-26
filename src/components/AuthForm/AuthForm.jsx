import FormInput from '@/components/FormInput/FormInput';
import FormButton from '@/components/FormButton/FormButton';

import styles from './AuthForm.module.css';

function AuthForm({ title, fields, buttonText, register, errors, onSubmit }) {
  return (
    <form className={styles.form} onSubmit={onSubmit}>
      <h1 className={styles.title}>{title}</h1>

      {fields.map((field) => (
        <FormInput
          key={field.name}
          type={field.type}
          placeholder={field.placeholder}
          error={errors[field.name]?.message}
          {...register(field.name)}
        />
      ))}

      <div className={styles.actions}>
        <FormButton>{buttonText}</FormButton>
      </div>
    </form>
  );
}

export default AuthForm;
