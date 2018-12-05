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
import styles from './modal.css';

class App extends Component {
  state = {
    open: false,
  };
 
  onOpenModal = () => {
    this.setState({ open: true });
  };
 
  onCloseModal = () => {
    this.setState({ open: false });
  };

  render() {
    const { open } = this.state;
    return (
      <div>
         <h1>hello world</h1>
          <button onClick={this.onOpenModal}>Open modal</button>
        <Modal open={open} onClose={this.onCloseModal}  center>
          <PDFViewer style = {{width: '1000px', minHeight: '750px'}}>
    <MyDocument />
  </PDFViewer>
        </Modal>
         </div>
    );
 }
}

export default App;
