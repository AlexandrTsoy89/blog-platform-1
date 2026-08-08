import { useContext } from 'react';
import AuthContext from '@/context/AuthContext';

import styles from './Profile.module.css';

function Profile() {
  const { user } = useContext(AuthContext);

  const firstLetter = user?.username?.charAt(0).toUpperCase();

  return (
    <main className={styles.page}>
      <section className={styles.banner}>
        <div className={styles.profile}>
          {user?.image ? (
            <img
              className={styles.avatar}
              src={user.image}
              alt={user.username}
            />
          ) : (
            <div className={styles.avatar}>{firstLetter}</div>
          )}

          <h1 className={styles.username}>{user?.username}</h1>

          <p className={styles.bio}>{user?.bio}</p>
        </div>
      </section>

      <section className={styles.articles}>
        <div className={styles.tabs}>
          <button className={styles.activeTab}>My Articles</button>

          <button className={styles.tab}>Favorited Articles</button>
        </div>

        <div className={styles.articleList}>
          {/* Здесь позже будут статьи пользователя */}
        </div>
      </section>
    </main>
  );
}

export default Profile;
