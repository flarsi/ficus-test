import React from 'react';
import Modal from '@material-ui/core/Modal';
import "./Modal.scss"

export function HouseModal({open, handleClose, data}) {

    const body = (
        <div className="modal">
            <h2 id="simple-modal-title">Text in a modal</h2>
            <p id="simple-modal-description">
                Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            </p>
            <HouseModal/>
        </div>
    );

    return (
        <div>
            {open &&
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                {body}
            </Modal>
            }
        </div>
    );
}
