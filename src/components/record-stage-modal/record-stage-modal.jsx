import {defineMessages, FormattedMessage, intlShape, injectIntl} from 'react-intl';
import PropTypes from 'prop-types';
import React from 'react';

import Box from '../box/box.jsx';
import Modal from '../../containers/modal.jsx';

import styles from './record-stage-modal.css';


const messages = defineMessages({
    duration: {
        defaultMessage: 'Duration',
        description: 'Label of duration input for recording stage',
        id: 'gui.recordStageModal.duration'
    },
    title: {
        defaultMessage: 'Record Stage',
        description: 'Title of record stage modal',
        id: 'gui.recordStageModal.title'
    }
});

const RecordStageModalComponent = props => (
    <Modal
        className={styles.modalContent}
        contentLabel={props.intl.formatMessage(messages.title)}
        id="recordStageModal"
        onRequestClose={props.onCancel}
    >
        <Box className={styles.body}>
            <Box className={styles.label}>
                <FormattedMessage
                    defaultMessage="You can record the stage as a WebM file. Audio recording is coming soon."
                    description="Description about stage recording"
                    id="gui.recordStageModal.description"
                />
            </Box>
            <Box className={styles.label}>
                {props.intl.formatMessage(messages.duration)}
            </Box>
            <Box>
                <input
                    className={styles.duration}
                    max="60"
                    min="1"
                    name={props.intl.formatMessage(messages.duration)}
                    type="number"
                    value={props.duration}
                    onChange={props.onChangeDuration}
                    onKeyPress={props.onKeyPress}
                />
            </Box>
            <Box className={styles.buttonRow}>
                <button
                    className={styles.cancelButton}
                    onClick={props.onCancel}
                >
                    <FormattedMessage
                        defaultMessage="Cancel"
                        description="Button in prompt for cancelling the dialog"
                        id="gui.recordStageModal.cancel"
                    />
                </button>
                <button
                    className={styles.recordButton}
                    onClick={props.onStartRecording}
                >
                    <FormattedMessage
                        defaultMessage="Record"
                        description="Button in prompt for confirming the dialog"
                        id="gui.recordStageModal.record"
                    />
                </button>
            </Box>
        </Box>
    </Modal>
);

RecordStageModalComponent.propTypes = {
    intl: intlShape,
    duration: PropTypes.number,
    onCancel: PropTypes.func.isRequired,
    onChangeDuration: PropTypes.func.isRequired,
    onKeyPress: PropTypes.func.isRequired,
    onStartRecording: PropTypes.func.isRequired
};

export default injectIntl(RecordStageModalComponent);
