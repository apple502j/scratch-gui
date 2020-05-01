import PropTypes from 'prop-types';
import React from 'react';
import ReactModal from 'react-modal';
import Box from '../box/box.jsx';
import {connect} from 'react-redux';
import {defineMessages, injectIntl, intlShape, FormattedMessage} from 'react-intl';

import {closeStageRecordModal} from '../../reducers/modals';
import styles from './record-stage-unsupported.css';

const messages = defineMessages({
    label: {
        id: 'gui.recordStageUnsupported.label',
        defaultMessage: 'Your Browser Does Not Support Recording Stage',
        description: 'Record stage support missing title'
    }
});

const RecordStageUnsupported = ({intl, ...props}) => (
    <ReactModal
        isOpen
        className={styles.modalContent}
        contentLabel={intl.formatMessage({...messages.label})}
        overlayClassName={styles.modalOverlay}
        onRequestClose={props.onClose}
    >
        <div dir={props.isRtl ? 'rtl' : 'ltr'}>
            <Box className={styles.illustration} />

            <Box className={styles.body}>
                <h2>
                    <FormattedMessage {...messages.label} />
                </h2>
                <p>
                    { /* eslint-disable max-len */ }
                    <FormattedMessage
                        defaultMessage="Unfortunately it looks like your browser does not support recording stage. We recommend using latest version of Chrome or Firefox."
                        description="Record stage support missing message"
                        id="gui.recordStageUnsupported.description"
                    />
                    { /* eslint-enable max-len */ }
                </p>

                <Box className={styles.buttonRow}>
                    <button
                        className={styles.backButton}
                        onClick={props.onClose}
                    >
                        <FormattedMessage
                            defaultMessage="Close"
                            description="Label for modal close button"
                            id="gui.recordStageUnsupported.cloe"
                        />
                    </button>

                </Box>
                <div className={styles.faqLinkText}>
                    <FormattedMessage
                        defaultMessage="To learn more, go to the {previewFaqLink}."
                        description="Scratch 3.0 FAQ description"
                        id="gui.recordStageUnsupported.previewfaq"
                        values={{
                            previewFaqLink: (
                                <a
                                    className={styles.faqLink}
                                    href="//scratch.mit.edu/3faq"
                                >
                                    <FormattedMessage
                                        defaultMessage="FAQ"
                                        description="link to Scratch 3.0 FAQ page"
                                        id="gui.recordStageUnsupported.previewfaqlinktext"
                                    />
                                </a>
                            )
                        }}
                    />
                </div>
            </Box>
        </div>
    </ReactModal>
);

RecordStageUnsupported.propTypes = {
    intl: intlShape.isRequired,
    isRtl: PropTypes.bool,
    onClose: PropTypes.func.isRequired
};

const mapStateToProps = () => ({});
const mapDispatchToProps = dispatch => ({
    onClose: dispatch(closeStageRecordModal())
});

export default injectIntl(connect(
    mapStateToProps,
    mapDispatchToProps
)(RecordStageUnsupported));
