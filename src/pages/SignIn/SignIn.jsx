import { useForm } from 'react-hook-form';
import AuthForm from '@/components/AuthForm/AuthForm';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '@/api/auth';
import { useContext } from 'react';
import AuthContext from '@/context/AuthContext';

import styles from './SignIn.module.css';

const fields = [
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
    },
  },
];

function SignIn() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const { login } = useContext(AuthContext);

  const onSubmit = async (data) => {
    try {
      const response = await loginUser({
        email: data.email,
        password: data.password,
      });

      const user = response.data.user;

      login(user);

      navigate('/');
    } catch (error) {
      console.log(error.response?.status);
      console.log(error.response?.data);
    }
  };
  return (
    <main className={styles.page}>
      <AuthForm
        title="Sign In"
        fields={fields}
        buttonText="Sign In"
        register={register}
        errors={errors}
        onSubmit={handleSubmit(onSubmit)}
      />
    </main>
  );
}

export default SignIn;
