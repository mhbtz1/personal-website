import '../css/Articles.css'

function Article() {
    const articles = [
        { id: 1, title: 'Semper Incompletum' },
        { id: 2, title: 'Hic Etiam' }
    ];

    return (
        <div className="articles">
            <h2 className="articles-title">Technical Writings</h2>
            <ul className="articles-list">
                {articles.map((article, index) => (
                    <li key={article.id} className="article-item">
                        <span className="article-number">{index + 1}</span>
                        <a 
                            href={`${import.meta.env.ACTIVE_HOST}/article/${article.id}`}
                            className="article-link"
                        >
                            {article.title}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Article;