import * as React from 'react';

import { ModalProps } from './Modal.props';
import './Modal.scss';


export const Modal = (props:ModalProps) => {
    const getId = 'modal' + new Date().getTime();
    return (
        <React.Fragment>
            <a data-toggle="modal" href={"#"+getId}>
                {props.children.linktext}
            </a>
            <div className="modal fade" tabIndex={-1} id={getId} role="dialog">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">{props.children.modalheader}</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        {props.children.modalbody}
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-primary">Save changes</button>
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                    </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
};