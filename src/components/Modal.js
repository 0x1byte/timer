import React from 'react';

const Modal = ({ text, setShow }) => {
    const modalButton = {
        marginTop: '10px',
    }
    const closeModal = () => {
        setShow(false);
    }
    return (
        <div id="myModal" className="modal">
            <div className="modal-content">
                <p>{text}</p>
                <button style={modalButton} onClick={closeModal}>بستن</button>
            </div>
        </div>
    )
}

export default Modal
