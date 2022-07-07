import React from "react";

function Article(props) {


    return (
        <>
            <div className="row">
                <div className={"col-lg-" + props.width}>
                    <div className="card">
                        <a href={props.url}>
                            <div className="card-body">
                                <p className="card-text">{props.title}</p>
                            </div>
                            <img src={props.imageUrl} className="card-img-top" alt={props.title} />
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Article