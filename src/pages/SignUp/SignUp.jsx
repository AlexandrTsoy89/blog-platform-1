import AuthForm from '@/components/AuthForm/AuthForm';
import { useForm } from 'react-hook-form';
import { registerUser } from '@/api/auth';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import AuthContext from '@/context/AuthContext';

import styles from './SignUp.module.css';

function SignUp() {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const { login } = useContext(AuthContext);

  const fields = [
    {
      name: 'username',
      type: 'text',
      placeholder: 'Username',
      rules: {
        required: 'Username is required',
        minLength: {
          value: 3,
          message: 'Username must be at least 3 characters',
        },
        maxLength: {
          value: 20,
          message: 'Username must be at most 20 characters',
        },
      },
    },
    {
      name: 'email',
      type: 'email',
      placeholder: 'Email address',
      rules: {
        required: 'Email is required',
        pattern: {
          value: /^\S+@\S+\.\S+$/,
          message: 'Please enter a valid email',
        },
      },
    },
    {
      name: 'password',
      type: 'password',
      placeholder: 'Password',
      rules: {
        required: 'Password is required',
        minLength: {
          value: 6,
          message: 'Password must be at least 6 characters',
        },
        maxLength: {
          value: 40,
          message: 'Password must be at most 40 characters',
        },
      },
    },
    {
      name: 'repeatPassword',
      type: 'password',
      placeholder: 'Repeat Password',
      rules: {
        required: 'Repeat your password',
        validate: (value) =>
          value === getValues('password') || 'Passwords do not match',
      },
    },
  ];

  const onSubmit = async (data) => {
    try {
      const response = await registerUser({
        username: data.username,
        email: data.email,
        password: data.password,
      });

      const user = response.data.user;

      login(user);

      navigate('/');

      console.log(user);
    } catch (error) {
      console.log('Status:', error.response?.status);
      console.log('Errors:', error.response?.data);
    }
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

export default SignUp;
