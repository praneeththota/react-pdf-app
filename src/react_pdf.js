import React from 'react';
import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';

// Create styles
const styles = StyleSheet.create({
 page: {
    flexDirection: 'row',
    backgroundColor: '#E4E4E4'
  },
  text: {
    margin: 12,
    fontSize: 14,
    textAlign: 'justify',
    fontFamily: 'Times-Roman'
  },

  body: {
  	height: '100%'
  }
});

// Create Document Component
const MyDocument = () => (
  <Document>
    <Page size="A4" styles= {styles.page}>
      
      <Text style={styles.text}>
        Hello world caminó sin acontecerle cosa que de contar fuese, de
        lo cual se desesperaba, porque quisiera topar luego luego con quien
        hacer experiencia del valor de su fuerte brazo. Autores hay que dicen
        que la primera aventura que le avino fue la del Puerto Lápice, otros
        dicen que la de los molinos de viento; pero lo que yo he podido
        averiguar en este caso, y lo que he hallado escrito en los anales de la
        Mancha, es que él anduvo todo aquel día, y, al anochecer, su rocín y él
        se hallaron cansados y muertos de hambre, y que, mirando a todas partes
        por ver si descubriría algún castillo o alguna majada de pastores donde
        recogerse y adonde pudiese remediar su mucha hambre y necesidad, vio, no
        lejos del camino por donde iba, una venta,que fue como si viera una
        estrella que, no a los portales, sino a los alcázares de su redención le
        encaminaba. Diose priesa a caminar, y llegó a ella a tiempo que
        anochecía.
      </Text>
      <Text style={styles.text}>
        Casi todo aquel día caminó sin acontecerle cosa que de contar fuese, de
        lo cual se desesperaba, porque quisiera topar luego luego con quien
        hacer experiencia del valor de su fuerte brazo. Autores hay que dicen
        que la primera aventura que le avino fue la del Puerto Lápice, otros
        dicen que la de los molinos de viento; pero lo que yo he podido
        averiguar en este caso, y lo que he hallado escrito en los anales de la
        Mancha, es que él anduvo todo aquel día, y, al anochecer, su rocín y él
        se hallaron cansados y muertos de hambre, y que, mirando a todas partes
        por ver si descubriría algún castillo o alguna majada de pastores donde
        recogerse y adonde pudiese remediar su mucha hambre y necesidad, vio, no
        lejos del camino por donde iba, una venta,que fue como si viera una
        estrella que, no a los portales, sino a los alcázares de su redención le
        encaminaba. Diose priesa a caminar, y llegó a ella a tiempo que
        anochecía.
      </Text>
      <Text style={styles.text}>
        Casi todo aquel día caminó sin acontecerle cosa que de contar fuese, de
        lo cual se desesperaba, porque quisiera topar luego luego con quien
        hacer experiencia del valor de su fuerte brazo. Autores hay que dicen
        que la primera aventura que le avino fue la del Puerto Lápice, otros
        dicen que la de los molinos de viento; pero lo que yo he podido
        averiguar en este caso, y lo que he hallado escrito en los anales de la
        Mancha, es que él anduvo todo aquel día, y, al anochecer, su rocín y él
        se hallaron cansados y muertos de hambre, y que, mirando a todas partes
        por ver si descubriría algún castillo o alguna majada de pastores donde
        recogerse y adonde pudiese remediar su mucha hambre y necesidad, vio, no
        lejos del camino por donde iba, una venta,que fue como si viera una
        estrella que, no a los portales, sino a los alcázares de su redención le
        encaminaba. Diose priesa a caminar, y llegó a ella a tiempo que
        anochecía.
      </Text>
      <Text style={styles.text}>
        Casi todo aquel día caminó sin acontecerle cosa que de contar fuese, de
        lo cual se desesperaba, porque quisiera topar luego luego con quien
        hacer experiencia del valor de su fuerte brazo. Autores hay que dicen
        que la primera aventura que le avino fue la del Puerto Lápice, otros
        dicen que la de los molinos de viento; pero lo que yo he podido
        averiguar en este caso, y lo que he hallado escrito en los anales de la
        Mancha, es que él anduvo todo aquel día, y, al anochecer, su rocín y él
        se hallaron cansados y muertos de hambre, y que, mirando a todas partes
        por ver si descubriría algún castillo o alguna majada de pastores donde
        recogerse y adonde pudiese remediar su mucha hambre y necesidad, vio, no
        lejos del camino por donde iba, una venta,que fue como si viera una
        estrella que, no a los portales, sino a los alcázares de su redención le
        encaminaba. Diose priesa a caminar, y llegó a ella a tiempo que
        anochecía.
      </Text>
      
    </Page>
  </Document>
);
export default MyDocument;