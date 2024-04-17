import React from 'react';
import {
  StyleSheet,
  Button,
  View,
  SafeAreaView,
  Text,
  Alert,
} from 'react-native';

const Separator = () => <View style={styles.separator} />

const App = () => (
  <SafeAreaView style={styles.container}>
    <View>
      <Text style={styles.title}>
        APLICACIÓN Escuela de Música doña TEO!!!!! App de CARLOS TÉLLEZ
      </Text>
    <Button
        title="Violín"
        onPress={() => Alert.alert('Estudiamos el instrumento Violín')}
      /> 
    <Separator />  
      <Text style={styles.title}>
      El violín, es un instrumento musical, creado desde tiempos antiguos 
      y cuyos orígenes corresponden a Italia, se trata de un instrumento de cuerdas frotadas.
      </Text>

      <Button
        title="Piano"
        color="#57a639"
        onPress={() => Alert.alert('Estudiamos el Piano')}
      />
    </View>
    <Separator />
    <View>
      <Text style={styles.title}>
      Un piano es un instrumento de teclado que produce sonido mediante 
      el golpeo de cuerdas con pequeñas barras de metal llamadas martillos.
      </Text>
      <Button
        title="Guitarra clásica"
        color="#ff5a36"
        onPress={() => Alert.alert('Estudiamos la guitarra clásica')}
      />
    </View>
    <Separator />
    <View>
      <Text style={styles.title}>
      Instrumento de cuerda. Está hecho de madera y tiene seis cuerdas, generalmente de metal o nailon.
      </Text>
      <Button
        title="Acordeón"
        color="#0000ff"
        onPress={() => Alert.alert('Estudiamos acordeón')}
      />
      </View>
      <Separator />
    <View>
      <Text style={styles.title}>
      instrumento musical armónico de viento, constituido por un fuelle, 
      un diapasón y dos cajas armónicas de madera.
      </Text>
      </View>

      <View style={styles.fixToText}>
        <Button
          title="Instrumentos de cuerda"
          color="#a12312"
          onPress={() => Alert.alert('Estudiamos los instrumentos de cuerda')}
        />
        <Button
          title="Instrumentos de viento"
          color="#a12312"
          onPress={() => Alert.alert('Estudiamos los instrumentos de viento')}
        />
    </View>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 16,
  },
  title: {
    textAlign: 'center',
    marginVertical: 8,
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#a12312',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});

export default App;

// // import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>aplicación de CARLOS TÉLLEZ!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
