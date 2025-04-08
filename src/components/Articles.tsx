
function Article() {
    
    return (<>
        <div style={{ color: "black"}}>
            <h3 className="vertical-align: middle"> Some writings on things I have learned / built. </h3>
            <ul>
                <li className="vertical-align: middle"> 1. <a href={`${import.meta.env.ACTIVE_HOST}/article/1`}> Semper Incompletum </a> </li>
                <li className="vertical-align: middle"> 2. <a href={`${import.meta.env.ACTIVE_HOST}/article/2`}> Hic Etiam </a> </li>
            </ul>
        </div>
    </>)
}


export default Article;