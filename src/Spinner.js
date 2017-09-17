import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { CircularProgress } from 'material-ui';

const Spinner = () => (
    <div className="spinner-wrapp">
        <MuiThemeProvider >
            <CircularProgress color="#fff" />
        </MuiThemeProvider>
    </div>
)

export default Spinner;