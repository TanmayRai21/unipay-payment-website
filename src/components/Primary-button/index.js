import React from "react";
import './styles.scss';

export const PrimaryButton = (props) => {

    const { name } = props;

    return (
        <div className="primary-btn">
            {name}
        </div>
    );
};
