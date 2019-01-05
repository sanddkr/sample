import * as React from 'react';

import { GeneralLayoutProps } from './GeneralLayout.props';


export const GeneralLayout = (props:GeneralLayoutProps) => {
    return (
        <div className="row">
            <div className="col-sm-5 offset-sm-1">
                {props.children}
            </div>
            <div className="col-sm">
                <img src={props.image.src} alt={props.image.alt} />
            </div>
        </div>
    )
};