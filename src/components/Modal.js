import React from 'react'
import PropTypes from 'prop-types'

import MyPortal from "./Portal";

const Modal = ({
    title, isOpen, onClose, children
}) => {

    return(
        <>
            {   isOpen &&
            <MyPortal>
                <div className="modalOverlay">
                    <div className="modalWindow">
                        <div className="modalHeader">
                            <div className="modalTitle">{title}</div>
                        </div>
                        <div className="modalBody">
                            {children}
                        </div>
                        <div className="modalFooter">
                            <button onClick={onClose}>Close</button>
                        </div>
                    </div>
                </div>
            </MyPortal>
            }
        </>
    );
};

Modal.propTypes = {
    title: PropTypes.string,
    isOpen: PropTypes.bool,
    onClose: PropTypes.func,
    children: PropTypes.node
}

Modal.defaultProps = {
    title: "Modal title",
    isOpen: false,
    onClose: () => {},
    children: null
}

export default Modal;