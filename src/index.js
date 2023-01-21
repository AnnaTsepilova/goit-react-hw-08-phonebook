import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
//import { Provider } from 'react-redux';
//import { store } from './redux/store';
import App from 'components/App';
import './index.css';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        {/* <BrowserRouter basename="/goit-react-hw-05-movies"> */}
        {/* <Provider store={store}> */}
        <App />
        {/* </Provider> */}
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
