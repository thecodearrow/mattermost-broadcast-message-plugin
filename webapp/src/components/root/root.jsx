import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const Root = ({ visible, close, theme, subMenu }) => {
    if (!visible) {
        return null;
    }

    const style = getStyle(theme);

    return (
        <div
            style={style.backdrop}
        >
            <div style={style.modal}>
                <span><b>Broadcast Message</b></span>
                <br />
                <TextField
                    id='standard-full-width'
                    label='Find'
                    style={{ margin: 8 }}
                    placeholder='Search for Users'
                    fullWidth={true}
                    margin='normal'
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
                <br />
                <TextField
                    id='standard-full-width'
                    label='Message'
                    style={{ margin: 8 }}
                    placeholder='Enter your message'
                    fullWidth={true}
                    multiline
                    rows={3}
                    rowsMax={5}
                    margin='normal'
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
                <br />
                <Button
                    variant='contained'
                    color='primary'
                >Send</Button>
                <Button
                    style={style.cancel}
                    variant='contained'
                    color='secondary'
                    onClick={close}
                >Cancel</Button>

            </div>
        </div>
    );
};

Root.propTypes = {
    visible: PropTypes.bool.isRequired,
    close: PropTypes.func.isRequired,
    theme: PropTypes.object.isRequired,
    subMenu: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
};

const getStyle = (theme) => ({
    backdrop: {
        position: 'absolute',
        display: 'flex',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.50)',
        zIndex: 2000,
        alignItems: 'center',
        justifyContent: 'center',
    },
    modal: {
        height: '350px',
        width: '600px',
        padding: '1em',
        color: theme.centerChannelColor,
        backgroundColor: theme.centerChannelBg,
    },
    cancel: {
        position: 'relative',
        left: '10px',
    },
});

export default Root;
