import ArticleCard from '@/components/ArticleCard/ArticleCard';
import styles from './ArticleList.module.css';

function ArticleList({ articles }) {
  return (
    <>
      {articles.map((article) => (
        <ArticleCard
          key={article.slug}
          article={article}
        />
      ))}
    </>
  );
}

export default ArticleList;
