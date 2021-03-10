import styles from '../../styles/feed.module.scss';
import { useRouter } from 'next/router';

export const Feed = ({pageNumber, articles}) => {
    const router = useRouter();

    return (
        <>
            {articles.map((article, index) => (
                <article key={index} className={styles.post}>
                    <h2><a href={article.url}>{article.title}</a></h2>
                    <p className={styles.source}>{article.source.name}</p>
                    <p>{article.description}</p>
                    {article.urlToImage ? <img src={article.urlToImage} alt={article.title} /> : ''}
                </article>
            ))}

            <div className={styles.paginator}>
                <button
                    onClick={() => {
                        if (pageNumber > 1) {
                            router.push(`/feed/${pageNumber - 1}`)
                                .then(() => window.scrollTo(0, 0));
                        }
                    }}
                    className={`${styles.button} ${pageNumber === 1 ? styles.disabled : styles.active}`}>
                        Previous page
                </button>

                <div>#{pageNumber}</div>

                <button
                    onClick={() => {
                        if (pageNumber < 5) {
                            router.push(`/feed/${pageNumber + 1}`)
                                .then(() => window.scrollTo(0, 0));
                        }
                    }}
                    className={pageNumber >= 5 ? styles.disabled : styles.active}>
                        Next page
                </button>
            </div>
        </>
    )
};

export const getServerSideProps = async pageContext => {
    const pageNumber = pageContext.query.slug;

    if (!pageNumber || pageNumber < 1 || pageNumber > 5) {
        return {
            props: {
                articles: [],
                pageNumber: 1,
            }
        }
    }

    const apiResponse = await fetch(
        `https://newsapi.org/v2/everything?q=SpaceX&sortBy=popularity&pageSize=5&page=${pageNumber}`,
        {
            headers: {
                Authorization: `Bearer ${process.env.NEWS_API_KEYS}`,
            }
        }
    );

    const apiJson = await apiResponse.json();
    const { articles } = apiJson;

    return {
        props: {
            articles,
            pageNumber: Number.parseInt(pageNumber)
        }
    }
};

export default Feed;