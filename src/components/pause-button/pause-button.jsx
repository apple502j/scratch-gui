import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import pauseIcon from './icon--pause.svg';
import styles from './pause-button.css';

const PauseButtonComponent = function (props) {
    const {
        className,
        onClick,
        title,
        ...componentProps
    } = props;
    return (
        <img
            className={classNames(
                className,
                styles.pauseButton
            )}
            draggable={false}
            src={pauseIcon}
            title={title}
            onClick={onClick}
            {...componentProps}
        />
    );
};

PauseButtonComponent.propTypes = {
    className: PropTypes.string,
    onClick: PropTypes.func.isRequired,
    title: PropTypes.string
};

PauseButtonComponent.defaultProps = {
    title: 'Pause Recording'
};

export default PauseButtonComponent;
