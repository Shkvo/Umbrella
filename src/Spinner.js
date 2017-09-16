import React from 'react';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { CircularProgress } from 'material-ui';

const Spinner = () => (
    <div className="spinner-wrapp">
        <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
            <CircularProgress />
        </MuiThemeProvider>
    </div>
)

export default Spinner;