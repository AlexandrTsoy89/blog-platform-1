import { useForm } from 'react-hook-form';
import styles from './Settings.module.css';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import AuthContext from '@/context/AuthContext';

function Settings() {
  const { logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

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
      <div className={styles.container}>
        <h1 className={styles.title}>Your Settings</h1>

        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
          <input
            className={`${styles.input} ${errors.username ? styles.error : ''}`}
            type="text"
            placeholder="Username"
            {...register('username', {
              required: 'Username is required',
            })}
          />

          {errors.username && (
            <p className={styles.errorMessage}>{errors.username.message}</p>
          )}

          <input
            className={`${styles.input} ${errors.email ? styles.error : ''}`}
            type="email"
            placeholder="Email Address"
            {...register('email', {
              required: 'Email is required',
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: 'Please enter a valid email address',
              },
            })}
          />

          {errors.email && (
            <p className={styles.errorMessage}>{errors.email.message}</p>
          )}

          <textarea
            className={styles.textarea}
            placeholder="Input your bio"
            {...register('bio')}
          />

          <input
            className={`${styles.input} ${errors.image ? styles.error : ''}`}
            type="url"
            placeholder="Avatar image (URL)"
            {...register('image', {
              pattern: {
                value: /^https?:\/\/.+/i,
                message: 'Please enter a valid URL',
              },
            })}
          />

          {errors.image && (
            <p className={styles.errorMessage}>{errors.image.message}</p>
          )}

          <input
            className={`${styles.input} ${errors.password ? styles.error : ''}`}
            type="password"
            placeholder="Password"
            {...register('password', {
              minLength: {
                value: 6,
                message: 'Password must contain at least 6 characters',
              },
              maxLength: {
                value: 40,
                message: 'Password must contain no more than 40 characters',
              },
            })}
          />

          {errors.password && (
            <p className={styles.errorMessage}>{errors.password.message}</p>
          )}

          <button className={styles.button} type="submit">
            Update Settings
          </button>
        </form>

        <button className={styles.logout} type="button" onClick={handleLogout}>
          Or click here to logout
        </button>
      </div>
    </main>
  );
}

export default Settings;
