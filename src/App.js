import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Document, Page, Text, Image, Font, View } from 'react-pdf';
import { PDFViewer, StyleSheet } from '@react-pdf/renderer';
import MyDocument from './react_pdf';

class App extends Component {
  render() {
    return (
      <div>
         <h1>hello wrold</h1>
         <PDFViewer>
         <MyDocument/>
         </PDFViewer>
         </div>
    );
  }
}

export default App;
