import React, { Component } from 'react';

import {
  BrowserRouter as Router, Route, Switch, Redirect,
} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import { Document, Page, Text, Image, Font, View } from 'react-pdf';
import { PDFViewer, StyleSheet, PDFDownloadLink } from '@react-pdf/renderer';

import MyDocument from './react_pdf';
import Quixote from './react_pdf_old';
import Modal from 'react-responsive-modal';


class App extends Component {
  
  render() {
    return (
      <div>
         <h1>hello world</h1>
         </div>
    );
 }
}

export default App;
