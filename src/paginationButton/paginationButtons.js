import React from 'react';
import './paginationButton.css';

function PaginationButtons(props) {
    return (
        <div className="buttonContainer">
            <button className="prevButton" onClick={props.prevButtonHandler} disabled={props.startIndex === 0 ? true : false}>Previous</button>
            <button className="nextButton" onClick={props.nextButtonHandler}>Next</button>
        </div>
    )
}

export default PaginationButtons;