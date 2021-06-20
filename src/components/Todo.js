import { useState } from "react";
import Modal from "./Modal";
import Backdrop from "./Backdrop";

function Todo(props) {

    const [modalIsOpen, setModalIsOpen] = useState(false);

    function deleteHandler() {
        setModalIsOpen(true);
    }

    return (
        <div className='card'>
            <h2>{props.title}{2 + 2}</h2>
            <div className='actions'>
                <span>...</span>
                <button className='btn' onClick={deleteHandler}>Delete</button>
            </div>
            {modalIsOpen && <Modal />}
            {modalIsOpen && <Backdrop />}
        </div>
    )
};

export default Todo;