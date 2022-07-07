import React from "react";
import Article from "./articles";

function Column(props) {

    React.useEffect(() => {
        setTitle(props.title)
      }, [])
    
    const [isEdit, setIsEdit] = React.useState(false);
    const [titleValue, setTitleValue] = React.useState(null)
    const [title, setTitle] = React.useState(null)

    const onEditHandler = () => {
        setIsEdit(!isEdit)
    }
    
    const onDoneHandler = () => {
        setTitle(titleValue)
        setIsEdit(!isEdit)
    }

    const onChangeHandler = ({ target }) => {
        setTitleValue(target.value)
        // console.log(target.value)
    }
    return (
        <div key={props.title} type="article" className={"col-lg-" + props.width}>

            {props &&
                <div className="thumbnail">
                    <div className="card-body">
                        <a href={props.url}>

                            <img src={props.imageUrl} className="card-img" alt={props.title} height="100%" />

                        </a>
                        {isEdit ? 
                            <div className="input-group mb-3">
                                <input type="text" className="form-control" placeholder={title} onChange={onChangeHandler}/>
                            
                            <button type="button" className="btn btn-primary btn-sm btn-block" onClick={onDoneHandler}>Done</button>
                            </div>
        
                            :
                            <>
                                <h4 className="text-center" href={props.url}>{title}</h4>
                                <button type="button" className="btn btn-primary btn-sm btn-block" onClick={onEditHandler}>Edit</button>
                            </>
                        }


                    </div>


                </div>
            }
        </div>
    )
}

export default Column