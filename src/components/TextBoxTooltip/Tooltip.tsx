import * as React from 'react';

import { TooltipProps } from './Tooltip.props';
import './Tooltip.scss';


export const TextBoxTooltip = (props:TooltipProps) => {
    const getId = 'tooltip' + new Date().getTime();
    return (
        <React.Fragment>
            <div className="input-group-append" data-toggle="collapse" data-target={"#"+getId} aria-expanded="false" aria-controls={getId}>
                <span className="input-group-text">?</span>
            </div>
            <div className="collapse adjust-flex" id={getId}>
                <div className="card card-body">
                   {props.children}
                </div>
            </div>
        </React.Fragment>
    )
};