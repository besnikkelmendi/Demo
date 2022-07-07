import React from "react";
import Column from "./column";

function RowDemo(props) {

    // React.useEffect(() => {
    //     console.log(props.columns)
    // }, [])
    return (
        <div className="row" key={props.title} type={props.title}>
            {props.columns && <> {
                props.columns.map((column, key) => (
                    <Column key={key} articles={column.articles} imageUrl={column.imageUrl} title={column.title} url={column.url} width={column.width}/>
                ))
            }
            </>}
        </div>
    )
}

export default RowDemo