import AuthForm from '@/components/AuthForm/AuthForm';

import styles from './SignInPage.module.css';

const fields = [
  {
    name: 'username',
    type: 'text',
    placeholder: 'Username',
  },
  {
    name: 'password',
    type: 'password',
    placeholder: 'Password',
  },
];

function SignInPage() {
  return (
    <main className={styles.page}>
      <AuthForm title="Sign In" fields={fields} buttonText="Sign In" />
    </main>
  );
}

export default SignInPage;
