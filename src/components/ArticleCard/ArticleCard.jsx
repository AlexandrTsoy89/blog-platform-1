import UserInfo from '@/components/UserInfo/UserInfo';
import Tag from '@/components/Tag/Tag';
import { formatDate } from '../../utils/formatDate';
import { Link } from 'react-router-dom';

import styles from './ArticleCard.module.css';

function ArticleCard({ article }) {
  return (
    <article className={styles.card}>
      <div className={styles.header}>
        <UserInfo
          username={article.author.username}
          date={formatDate(article.createdAt)}
          image={article.author.image}
        />

        <button className={styles.favorite}>❤ {article.favoritesCount}</button>
      </div>

      <h2 className={styles.title}>
        <Link to={`/article/${article.slug}`}>{article.title}</Link>
      </h2>

      <p className={styles.description}>{article.description}</p>

      <div className={styles.tags}>
        {article.tagList.length > 0 && (
          <div className={styles.tags}>
            {article.tagList.slice(0, 6).map((tag) => (
              <Tag key={tag}>{tag}</Tag>
            ))}
          </div>
        )}
      </div>
    </article>
  );
}

export default ArticleCard;
