import bindAll from 'lodash.bindall';
import PropTypes from 'prop-types';
import React from 'react';
import VM from 'scratch-vm';
import {STAGE_DISPLAY_SIZES} from '../lib/layout-constants.js';
import clamp from '../lib/clamp.js';
import StageWrapperComponent from '../components/stage-wrapper/stage-wrapper.jsx';

class StageWrapper extends React.Component {
    constructor (props) {
        super(props);
        bindAll(this, [
            'handleMouseMove'
        ]);
        this.state = {
            mouseX: 0,
            mouseY: 0
        };
    }

    handleMouseMove (position) {
        const clampedX = Math.round(clamp(position[0], -240, 240));
        const clampedY = Math.round(clamp(position[1], -180, 180));
        if (this.state.mouseX !== clampedX ||
            this.state.mouseY !== clampedY) {
            this.setState({
                mouseX: clampedX,
                mouseY: clampedY
            });
        }
    }

    render () {
        return (
            <StageWrapperComponent
                mouseX={this.state.mouseX}
                mouseY={this.state.mouseY}
                onMouseMove={this.handleMouseMove}
                {...this.props}
            />
        );
    }
}

StageWrapper.propTypes = {
    isRendererSupported: PropTypes.bool.isRequired,
    stageSize: PropTypes.oneOf(Object.keys(STAGE_DISPLAY_SIZES)).isRequired,
    vm: PropTypes.instanceOf(VM).isRequired
};

export default StageWrapper;
