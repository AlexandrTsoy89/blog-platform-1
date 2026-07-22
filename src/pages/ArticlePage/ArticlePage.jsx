import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';

import UserInfo from '@/components/UserInfo/UserInfo';
import Tag from '@/components/Tag/Tag';

import { getArticle } from '@/api/articles';
import { formatDate } from '@/utils/formatDate';

import styles from './ArticlePage.module.css';

function ArticlePage() {
  const { slug } = useParams();

  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);

    getArticle(slug)
      .then((response) => {
        setArticle(response.data.article);
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [slug]);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    return <h2>Error: {error}</h2>;
  }

  return (
    <div className={styles.page}>
      <article className={styles.article}>
        <div className={styles.header}>
          <div className={styles.content}>
            <h1 className={styles.title}>{article.title}</h1>

            <div className={styles.tags}>
              {article.tagList.map((tag) => (
                <Tag key={tag}>{tag}</Tag>
              ))}
            </div>

            <p className={styles.description}>{article.description}</p>
          </div>

          <button className={styles.favorite}>
            ❤ {article.favoritesCount}
          </button>
        </div>

        <div className={styles.body}>
          <ReactMarkdown>{article.body}</ReactMarkdown>
        </div>

        <div className={styles.author}>
          <UserInfo
            username={article.author.username}
            date={formatDate(article.createdAt)}
            image={article.author.image}
          />
        </div>
      </article>
    </div>
  );
}

export default ArticlePage;
