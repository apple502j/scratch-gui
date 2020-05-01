import PropTypes from 'prop-types';
import React from 'react';
import bindAll from 'lodash.bindall';
import {connect} from 'react-redux';
import RecordStageModalComponent from '../components/record-stage-modal/record-stage-modal.jsx';
import {startRecording} from '../reducers/stage-record';
import {closeStageRecordModal} from '../reducers/modals';

class RecordStageModal extends React.Component {
    constructor (props) {
        super(props);
        bindAll(this, [
            'handleRecord',
            'handleCancel',
            'handleChangeDuration',
            'handleKeyPress'
        ]);

        this.state = {
            duration: '60'
        };
    }
    handleKeyPress (event) {
        if (event.key === 'Enter') this.handleOk();
    }
    handleRecord () {
        const duration = parseInt(this.state.duration, 10);
        this.props.onStartRecording(Math.min(60, Math.max(1, duration)));
        this.props.onClose();
    }
    handleCancel () {
        this.props.onClose();
    }
    handleChangeDuration (e) {
        this.setState({duration: parseInt(e.target.value, 10) ? e.target.value : ''});
    }
    render () {
        return (
            <RecordStageModalComponent
                duration={this.state.duration}
                onCancel={this.handleCancel}
                onChangeDuration={this.handleChangeDuration}
                onKeyPress={this.handleKeyPress}
                onStartRecording={this.handleRecord}
            />
        );
    }
}

RecordStageModal.propTypes = {
    onClose: PropTypes.func.isRequired,
    onStartRecording: PropTypes.func.isRequired
};

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => ({
    onClose: () => dispatch(closeStageRecordModal()),
    onStartRecording: duration => dispatch(startRecording(duration))
});

export default connect(mapStateToProps, mapDispatchToProps)(RecordStageModal);
