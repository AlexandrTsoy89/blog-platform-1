import AuthForm from '@/components/AuthForm/AuthForm';
import { useForm } from 'react-hook-form';

import styles from './SignUpPage.module.css';

const fields = [
  {
    name: 'username',
    type: 'text',
    placeholder: 'Username',
  },
  {
    name: 'email',
    type: 'email',
    placeholder: 'Email address',
  },
  {
    name: 'password',
    type: 'password',
    placeholder: 'Password',
  },
  {
    name: 'repeatPassword',
    type: 'password',
    placeholder: 'Repeat Password',
  },
];

function SignUpPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <main className={styles.page}>
      <AuthForm
        title="Sign Up"
        fields={fields}
        buttonText="Sign Up"
        register={register}
        errors={errors}
        onSubmit={handleSubmit(onSubmit)}
      />
    </main>
  );
}

export default SignUpPage;
