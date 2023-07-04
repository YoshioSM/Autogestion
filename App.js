import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, Dimensions, TouchableOpacity } from 'react-native';
import Svg, { G, Path, Defs, Pattern, Use, Image } from 'react-native-svg'
import ButtonGradient from './ButtonGradient';
const { width, height } = Dimensions.get('window')

export default function App() {
  function SvgTop() {
    return (
      <Svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        fill="none"
        width={450}
        height={310}
      >
        <G filter="url(#a)">
          <Path
            fill="url(#b)"
            d="M501 0H4v34.3c0 96.813 0 145.22 19.14 182.066a170.001 170.001 0 0 0 72.494 72.494C132.48 308 180.887 308 277.7 308h175c17.085 0 25.627 0 32.129-3.378a29.989 29.989 0 0 0 12.793-12.793C501 285.327 501 276.785 501 259.7V0Z"
            shapeRendering="crispEdges"
          />
        </G>
        <Defs>
          <Pattern
            id="b"
            width={1}
            height={1}
            patternContentUnits="objectBoundingBox"
          >
            <Use xlinkHref="#c" transform="matrix(.00151 0 0 .00244 -.05 0)" />
          </Pattern>
          <Image
            xlinkHref="data:image/png;base64,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"
            id="c"
          />
        </Defs>
      </Svg>
    )
  }
  return (
    <View style={styles.maincontainer}>
      <View style={styles.containerSVG}>
        <SvgTop />
      </View>
      <View style={styles.container}>
        <Text style={styles.titulo}>AutoGestion</Text>
        <Text style={styles.subtitulo}>Ingresa a la cuenta</Text>
        <TextInput
          placeholder='Usuario'
          style={styles.TextInput}
        />
        <TextInput
          placeholder='Contraseña'
          style={styles.TextInput}
        />
        <Text style={styles.contraseña}>¿Olvidaste tu Contraseña?</Text>
        <StatusBar style="auto" />
      </View></View>
  );
}

const styles = StyleSheet.create({
  maincontainer: {
    flex: 1,
    backgroundColor: '#F1F1F1',

  },
  container: {

    alignItems: 'center',
    justifyContent: 'center',

  },
  containerSVG: {
    width: width,
    justifyContent: 'flex-start',
    alignItems: 'center',

  },
  titulo: {
    fontSize: 50,
    color: '#20252E',
    fontWeight: 'bold',
    padding: 40,
    textAlign: 'center',
  },
  subtitulo: {
    fontSize: 20,
    color: 'gray',
    marginTop: -26,
  },
  TextInput: {
    padding: 10,
    width: '80%',
    height: 50,
    borderRadius: 30,
    backgroundColor: '#fff',
    paddingStart: 30,
    marginTop: 20,
  },
  contraseña: {
    fontSize: 13,
    color: 'gray',
    marginTop: 20,
  },

  button: {

  },

});
