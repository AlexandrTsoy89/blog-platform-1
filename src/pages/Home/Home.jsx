import Banner from '@/components/Banner/Banner';
import Sidebar from '@/components/Sidebar/Sidebar';
import ArticleList from '@/components/ArticleList/ArticleList';
import Pagination from '@/components/Pagination/Pagination';
import { useEffect, useState } from 'react';
import { getArticles } from '@/api/articles';
import '@/styles/Index.css';

import styles from './Home.module.css';

function Home() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [articlesCount, setArticlesCount] = useState(0);
  const totalPages = Math.ceil(articlesCount / 5);
  const limit = 5;
  useEffect(() => {
    const offset = (page - 1) * limit;

    getArticles(limit, offset)
      .then((response) => {
        setArticles(response.data.articles);
        setArticlesCount(response.data.articlesCount);

        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setError(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [page]);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    return <h2>Error: {error}</h2>;
  }

  return (
    <>
      <Banner />

      <div className={styles.container}>
        <main className={styles.content}>
          <Sidebar />
          <ArticleList articles={articles} />
        </main>

        <Pagination
          currentPage={page}
          totalPages={totalPages}
          onPageChange={setPage}
        />
      </div>
    </>
  );
}

export default Home;
