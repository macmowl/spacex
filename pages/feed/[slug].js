import Image from 'next/image';
import styles from '../../styles/feed.module.css';
import { useRouter } from 'next/router';
import { Menu } from '../../components/menu';

export const Feed = ({pageNumber, articles}) => {
    const router = useRouter();

    return (
        <div className='page-container'>
            <Menu />
            <div className={styles.main}>
                {articles.map((article, index) => (
                    <div key={index} className={styles.post}>
                        <h2><a href={article.url}>{article.title}</a></h2>
                        <p>{article.description}</p>
                        <div className={styles.img_wrapper}>
                            <img 
                                src={article.urlToImage}
                                alt={article.title}
                            />
                        </div>
                    </div>
                ))}
            </div>

            <div className={styles.paginator}>
                <div
                    onClick={() => {
                        if (pageNumber > 1) {
                            router.push(`/feed/${pageNumber - 1}`)
                                .then(() => window.scrollTo(0, 0));
                        }
                    }}
                    className={pageNumber === 1 ? styles.disabled : styles.active}>
                        Previous page
                </div>

                <div>#{pageNumber}</div>

                <div
                    onClick={() => {
                        if (pageNumber < 5) {
                            router.push(`/feed/${pageNumber + 1}`)
                                .then(() => window.scrollTo(0, 0));
                        }
                    }}
                    className={pageNumber === 5 ? styles.disabled : styles.active}>
                        Next page
                </div>
            </div>
        </div>
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
        `https://newsapi.org/v2/everything?q=SpaceX&pageSize=5&page=${pageNumber}`,
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