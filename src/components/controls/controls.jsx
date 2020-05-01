import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import {defineMessages, injectIntl, intlShape} from 'react-intl';

import GreenFlag from '../green-flag/green-flag.jsx';
import StopAll from '../stop-all/stop-all.jsx';
import TurboMode from '../turbo-mode/turbo-mode.jsx';
import PauseButton from '../pause-button/pause-button.jsx';

import styles from './controls.css';

const messages = defineMessages({
    goTitle: {
        id: 'gui.controls.go',
        defaultMessage: 'Go',
        description: 'Green flag button title'
    },
    stopTitle: {
        id: 'gui.controls.stop',
        defaultMessage: 'Stop',
        description: 'Stop button title'
    },
    recordStopTitle: {
        id: 'gui.controls.stopRecording',
        defaultMessage: 'Stop Recording',
        description: 'Stop Recording button title'
    },
    recordPauseTitle: {
        id: 'gui.controls.pauseRecording',
        defaultMessage: 'Pause Recording',
        description: 'Pause Recording button title'
    },
    recordResumeTitle: {
        id: 'gui.controls.resumeRecording',
        defaultMessage: 'Resume Recording',
        description: 'Resume Recording button title'
    }
});

const Controls = function (props) {
    const {
        active,
        className,
        intl,
        onGreenFlagClick,
        onStopAllClick,
        turbo,
        recording,
        recordingPaused,
        isPlayerOnly,
        onRecordStopClick,
        onRecordResumeClick,
        onRecordPauseClick,
        ...componentProps
    } = props;
    return (
        <div
            className={classNames(styles.controlsContainer, className)}
            {...componentProps}
        >
            <GreenFlag
                active={active}
                title={intl.formatMessage(messages.goTitle)}
                onClick={onGreenFlagClick}
            />
            <StopAll
                active={active}
                title={intl.formatMessage(messages.stopTitle)}
                onClick={onStopAllClick}
            />
            {turbo ? (
                <TurboMode />
            ) : null}
            {recording && !isPlayerOnly && (
                <React.Fragment>
                    {recordingPaused ? (
                        <GreenFlag
                            title={intl.formatMessage(messages.recordResumeTitle)}
                            onClick={onRecordResumeClick}
                        />
                    ) : (
                        <PauseButton
                            title={intl.formatMessage(messages.recordPauseTitle)}
                            onClick={onRecordPauseClick}
                        />
                    )}
                    <StopAll
                        title={intl.formatMessage(messages.recordStopTitle)}
                        onClick={onRecordStopClick}
                    />
                </React.Fragment>
            )}
        </div>
    );
};

Controls.propTypes = {
    active: PropTypes.bool,
    className: PropTypes.string,
    intl: intlShape.isRequired,
    onGreenFlagClick: PropTypes.func.isRequired,
    onStopAllClick: PropTypes.func.isRequired,
    turbo: PropTypes.bool,
    recording: PropTypes.bool,
    recordingPaused: PropTypes.bool,
    isPlayerOnly: PropTypes.bool,
    onRecordStopClick: PropTypes.func,
    onRecordPauseClick: PropTypes.func,
    onRecordResumeClick: PropTypes.func
};

Controls.defaultProps = {
    active: false,
    turbo: false,
    recording: false
};

export default injectIntl(Controls);
