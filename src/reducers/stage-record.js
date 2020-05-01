const START_RECORDING = 'scratch-gui/stage-record/START_RECORDING';
const STOP_RECORDING = 'scratch-gui/stage-record/STOP_RECORDING';
const PAUSE_RECORDING = 'scratch-gui/stage-record/PAUSE_RECORDING';

const initialState = {
    recording: false,
    paused: false,
    recordDuration: 0,
    forceStop: false
};

const reducer = function (state, action) {
    if (typeof state === 'undefined') state = initialState;
    switch (action.type) {
    case START_RECORDING:
        return {
            recording: true,
            paused: false,
            recordDuration: action.recordDuration || state.recordDuration,
            forceStop: false
        };
    case STOP_RECORDING:
        return {
            recording: false,
            paused: false,
            recordDuration: 0,
            forceStop: !!action.forceStop
        };
    case PAUSE_RECORDING:
        return {
            recording: true,
            paused: true,
            forceStop: false
        };
    default:
        return state;
    }
};

const startRecording = recordDuration => ({type: START_RECORDING, recordDuration});
const stopRecording = forceStop => ({type: STOP_RECORDING, forceStop});
const pauseRecording = () => ({type: PAUSE_RECORDING});

export {
    reducer as default,
    initialState as stageRecordInitialState,
    startRecording,
    stopRecording,
    pauseRecording
};
