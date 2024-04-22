import { Link } from 'react-router-dom';
import articles from './article-content';

const ArticlesListPage = () => {
    return (
        <div className=' items-center   '>
        <h1 className='text-center text-white m-10  '>Articles</h1>
        {articles.map(article => (
            <Link key={article.name} className="text-center text-white no-underline  font-serif" to={`/articles/${article.name}`}>
                {/* This is a JavaScript expression that maps over the articles array and renders JSX for each article. 
                It iterates over each article object in the articles array. */}
                <h3 className='font-bold m-10 text-blue-200'>{article.title}</h3>
           
                <p>{article.content[0].substring(0, 40)}...</p>
                <hr />
            </Link>
        ))}
        </div>
    );
}

export default ArticlesListPage;