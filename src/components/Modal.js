import React from 'react'

const Modal = ({ seletedImg, setSelectedImg }) => {

    const HandleClick = (e) => {
        if (e.target.classList.contains('backDrop')) {
            setSelectedImg(null);
        }
    }

    return (
        <div className='backDrop' onClick={HandleClick}>
            <img src={seletedImg} alt="bigPic" />
        </div>
    )
}

export default Modal;