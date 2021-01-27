import React from 'react';
import './Searchwidget.css'


function Searchwidget(props) {

    return (
        <div className="formContainer">
            <input type="text" placeholder='Input to search' onChange={(e) => props.inputChangeHandler(e.target.value)} value={props.filterValue} />
        </div>
    )
}

export default Searchwidget;