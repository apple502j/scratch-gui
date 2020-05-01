import bindAll from 'lodash.bindall';
import PropTypes from 'prop-types';
import React from 'react';
import VM from 'scratch-vm';
import {connect} from 'react-redux';

import ControlsComponent from '../components/controls/controls.jsx';
import {startRecording, stopRecording, pauseRecording} from '../reducers/stage-record';

class Controls extends React.Component {
    constructor (props) {
        super(props);
        bindAll(this, [
            'handleGreenFlagClick',
            'handleStopAllClick'
        ]);
    }
    handleGreenFlagClick (e) {
        e.preventDefault();
        if (e.shiftKey) {
            this.props.vm.setTurboMode(!this.props.turbo);
        } else {
            if (!this.props.isStarted) {
                this.props.vm.start();
            }
            this.props.vm.greenFlag();
        }
    }
    handleStopAllClick (e) {
        e.preventDefault();
        this.props.vm.stopAll();
    }
    render () {
        const {
            vm, // eslint-disable-line no-unused-vars
            isStarted, // eslint-disable-line no-unused-vars
            projectRunning,
            turbo,
            recording,
            recordingPaused,
            onRecordStopClick,
            onRecordPauseClick,
            onRecordResumeClick,
            ...props
        } = this.props;
        return (
            <ControlsComponent
                {...props}
                active={projectRunning}
                turbo={turbo}
                recording={recording}
                recordingPaused={recordingPaused}
                onGreenFlagClick={this.handleGreenFlagClick}
                onStopAllClick={this.handleStopAllClick}
                onRecordStopClick={onRecordStopClick}
                onRecordPauseClick={onRecordPauseClick}
                onRecordResumeClick={onRecordResumeClick}
            />
        );
    }
}

Controls.propTypes = {
    isStarted: PropTypes.bool.isRequired,
    projectRunning: PropTypes.bool.isRequired,
    turbo: PropTypes.bool.isRequired,
    recording: PropTypes.bool.isRequired,
    recordingPaused: PropTypes.bool,
    onRecordStopClick: PropTypes.func,
    onRecordPauseClick: PropTypes.func,
    onRecordResumeClick: PropTypes.func,
    vm: PropTypes.instanceOf(VM)
};

const mapStateToProps = state => ({
    isStarted: state.scratchGui.vmStatus.running,
    projectRunning: state.scratchGui.vmStatus.running,
    turbo: state.scratchGui.vmStatus.turbo,
    recording: state.scratchGui.stageRecord.recording,
    recordingPaused: state.scratchGui.stageRecord.paused
});

const mapDispatchToProps = dispatch => ({
    onRecordStopClick: dispatch(stopRecording()),
    onRecordPauseClick: dispatch(pauseRecording()),
    onRecordResumeClick: dispatch(startRecording())
});

export default connect(mapStateToProps, mapDispatchToProps)(Controls);
