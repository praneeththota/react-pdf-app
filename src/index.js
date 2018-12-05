import React from 'react';
import ReactDOM from 'react-dom';
import { NavLink } from 'react-router-dom';
import './index.css';
import App from './App';
import { PDFViewer, StyleSheet, PDFDownloadLink } from '@react-pdf/renderer';

import MyDocument from './react_pdf';
import Quixote from './react_pdf_old';


import * as serviceWorker from './serviceWorker';
const PdfDoc = () => (
  <PDFViewer style = {{width: '100%', minHeight: '100px'}}>
    <MyDocument />
  </PDFViewer>

);

ReactDOM.render(
<div>
<PdfDoc/>
<App />
</div>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
