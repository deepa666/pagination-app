import React from 'react';
import './Todolist.css';

function Todolist(props) {
    const { list } = props;

    return (
        <div className="listContainer">
            {
                list.map((listObj) => (
                    <div className="listItem" key={listObj.id}>{listObj.title}</div>
                ))
            }
        </div>
    )
}
export default Todolist;