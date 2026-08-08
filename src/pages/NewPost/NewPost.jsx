import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import { createArticle } from '@/api/articles';

import styles from './NewPost.module.css';

function NewPost() {
  const { register, handleSubmit } = useForm();

  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      const response = await createArticle({
        title: data.title,
        description: data.description,
        body: data.body,
        tagList: [],
      });

      console.log(response.data);

      const slug = response.data.article.slug;

      navigate(`/articles/${slug}`);
    } catch (error) {
      console.log(error.response?.status);
      console.log(error.response?.data);
    }
  };

  return (
    <main className={styles.page}>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <input
          className={styles.input}
          type="text"
          placeholder="Title"
          {...register('title')}
        />

        <input
          className={styles.input}
          type="text"
          placeholder="Short description"
          {...register('description')}
        />

        <textarea
          className={styles.textarea}
          placeholder="Input your text"
          {...register('body')}
        />

        <div className={styles.tags}>
          <span className={styles.tag}>one</span>
          <span className={styles.tag}>something</span>
          <span className={styles.tag}>chinese</span>
          <span className={styles.tag}>english</span>
          <span className={styles.tag}>french</span>
        </div>

        <div className={styles.buttonWrapper}>
          <button className={styles.button} type="submit">
            Publish Article
          </button>
        </div>
      </form>
    </main>
  );
}

export default NewPost;
