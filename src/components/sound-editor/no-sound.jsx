import React from 'react';
import {defineMessages, FormattedMessage, injectIntl, intlShape} from 'react-intl';
import styles from './no-sound.css';
import soundEditorBack from './sound-editor-bg.png';

const messages = defineMessages({
    alt: {
        id: 'gui.soundEditor.noSound.alt',
        defaultMessage: 'A picture of instruments',
        description: 'Alt text of a picture for accessibility'
    }
});

const NoSound = props => (
    <div className={styles.editorContainer}>
        <div className={styles.image}>
            <img
                alt={props.intl.formatMessage(messages.alt)}
                height="334"
                src={soundEditorBack}
                width="540"
            />
        </div>
        <div className={styles.text}>
            <p className={styles.addSoundText}>
                <FormattedMessage
                    defaultMessage="Add a sound to get creative"
                    description="A message to let the user add a sound"
                    id="gui.soundEditor.noSound.addSound"
                />
            </p>
            <p className={styles.howtoAddSound}>
                <FormattedMessage
                    defaultMessage={'You can choose from "Choose a Sound". {lineBreak}' +
                                   'Recording or uploading one is also awesome!'}
                    description="A message to tell the user how to add a sound"
                    id="gui.soundEditor.noSound.howtoAddSound"
                    values={{
                        lineBreak: (<br />)
                    }}
                />
            </p>
        </div>
    </div>
);

NoSound.propTypes = {
    intl: intlShape
};

export default injectIntl(NoSound);
