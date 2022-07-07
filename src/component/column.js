import React from "react";
import Article from "./articles";

function Column(props) {


    return (
        <div key={props.title} type="article" className={"col-lg-" + props.width}>

            {props && 
                <div className="card">
                    <a href={props.url}>
                        <div className="card-body">
                            <p className="card-text">{props.title}</p>
                        </div>
                        <img src={props.imageUrl} className="card-img-top" alt={props.title} />
                    </a>
                </div>
            }
        </div>
    )
}

export default Column