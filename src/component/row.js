import React from "react";
import Column from "./column";

function RowDemo(props) {

    // React.useEffect(() => {
    //     console.log(props.columns)
    // }, [])
    return (
        <div key={props.title} type={props.title}>
            {props.columns && <> {
                props.columns.map((column, key) => (
                    <Column key={key} title={"column "+key} articles={column.articles} />
                ))
            }
            </>}
        </div>
    )
}

export default RowDemo