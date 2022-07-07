import React from "react";
import Article from "./articles";

function Column(props) {


    return (
        <div key={props.title} type={props.title}>

            {props.columns && <>{props.articles.map(article => (
                <Article imageUrl={article.imageUrl} title={article.title} url={article.url} width={article.width} />
            ))}
            </>}
        </div>
    )
}

export default Column