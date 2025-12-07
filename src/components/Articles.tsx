import '../css/Articles.css'

function Article() {
    const articles = [
        { id: 1, title: 'Primitives for Agentic Applications', link: 'https://www.linkedin.com/feed/update/urn:li:activity:7398482291158634496/?originTrackingId=SHm21Rny7wIt5pu%2FWeWhfw%3D%3D'},
        { id: 2, title: 'Evaluating Agents for Critical Applications', link: 'https://www.linkedin.com/feed/update/urn:li:activity:7395151671783301120/?originTrackingId=dLK%2FXFckQLLUfh554ZOQJg%3D%3D'},
        { id: 3, title: 'Agent Design Thoughts', link: 'https://www.linkedin.com/feed/update/urn:li:activity:7391927297546657792/?originTrackingId=2aM7umTEOiLG%2FYktqSdJTw%3D%3D'},
        { id: 4, title: 'UX For AI Applications', link: 'https://www.linkedin.com/feed/update/urn:li:activity:7389351368324710400/?originTrackingId=zW3bPtICZbFn2Eimun8tjg%3D%3D'}
    ];

    return (
        <div className="articles">
            <h2 className="articles-title"> Posts </h2>
            <ul className="articles-list">
                {articles.map((article, index) => (
                    <li key={article.id} className="article-item">
                        <span className="article-number">{index + 1}</span>
                        <a 
                            href={article.link}
                            target="_blank"
                            rel="noopener noreferrer"
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