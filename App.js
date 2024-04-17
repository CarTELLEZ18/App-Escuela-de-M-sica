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
        APLICACIÓN MOVIL elaborada por CARLOS TÉLLEZ sobre temas de Química Orgánica!!!
      </Text> 
      <Button
        title="Concepto de Química Organica"
        onPress={() => Alert.alert('Estudiamos el concepto de Química Orgánica')}
      />
    </View>
    <Separator />
    <View>
      <Text style={styles.title}>
        Química Orgánica es el estudio de las sustancias y compuestos de tipo orgánico, 
        lo cual quiere decir que tienen como base combinatoria de su estructura atómica 
        los elementos carbono, hidrógeno y algunos otros como azufre y oxígeno. Además, 
        los compuestos orgánicos constituyen las distintas formas de seres vivos en nuestro planeta.
      </Text>
      <Button
        title="Clasificación de los compuestos orgánicos"
        color="#57a639"
        onPress={() => Alert.alert('Estudiamos la clasificación de compuestos orgánicos')}
      />
    </View>
    <Separator />
    <View>
      <Text style={styles.title}>
        Compuestos naturales: Son los sintetizados tanto por organismos vivos, como por procesos naturales.
        Por ejemplo: proteínas, lípidos y ácidos nucleicos.
        Compuestos sintéticos. Son sintetizados artificialmente por el ser humano en laboratorios químicos. 
        Por ejemplo: fármacos, colorantes, plásticos, entre otros productos.
      </Text>
      <Button
        title="Clasificación según su estructura"
        color="#ff5a36"
        onPress={() => Alert.alert('Estudiamos la clasificación según su estructura')}
      />
    </View>
    <Separator />
    <View>
      <Text style={styles.title}>
        1-Hidrocarburos aromáticos que son compuestos orgánicos cíclicos (con forma de anillo) como el benceno y tolueno.
        2-Hidrocarburos alifáticos como: Alcanos, alquenos y alquinos, Alcoholes, Cetonas, Aldehídos, Acidos carboxílicos y Aminas.
        3-Compuestos organometálicos conformados por átomos de carbono unidos covalentemente
         a uno o más átomos de un elemento metálico como son el metil-litio y butil-litio.
      </Text>
      <Button
        title="Ejemplos de Química Orgánica"
        color="#0000ff"
        onPress={() => Alert.alert('Estudiamos algunos ejemplos de Q.O')}
      />
      </View>
      <Separator />
    <View>
      <Text style={styles.title}>
        1-Diseño y producción de antibióticos.
        2-La industria petroquímica.
        3-La industria de licores.
        4-Produccion de jabón.
        5-Síntesis de almidones.
      </Text>
      </View>

      <View style={styles.fixToText}>
        <Button
          title="Química Orgánica Avanzada"
          color="#a12312"
          onPress={() => Alert.alert('Estudiamos la Q.O Avanzada')}
        />
        <Button
          title="Química Orgánica Especial"
          color="#a12312"
          onPress={() => Alert.alert('Estudiamos la Q.O Especial')}
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
