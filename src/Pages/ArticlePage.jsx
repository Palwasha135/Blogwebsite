import { useParams } from 'react-router-dom';
import articles from './article-content';

const ArticlePage = () => {
    const { articleId } = useParams();
    const article = articles.find(article => article.name === articleId);
//articles/learn-react
//articles/nextjs

    return (
        <div className=' text-white'>
        <h1>{article.title}</h1>
        {article.content.map(paragraph => (
            <p>{paragraph}</p>
        ))}
        </div>
    );
}

export default ArticlePage;