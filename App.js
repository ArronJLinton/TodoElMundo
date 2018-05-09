/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import {
  PowerTranslator,
  ProviderTypes,
  Translation
} from "react-native-power-translator";

import I18n from 'react-native-i18n';
// type Props = {};
export default class App extends Component{

  // constructor() {
  //   super();
    state = { languageCode: 'pt' };
  // }

  componentWillMount() {
    console.log(I18n.currentLocale().slice(0,2))
    // this.setState({languageCode: I18n.currentLocale().slice(0,2)})
  }

  render() {
    const styles = this.getStyles();

    Translation.setConfig(ProviderTypes.Google, 'AIzaSyCMul48qN-Vahl_m3Q_5gtCUZAA29Zm3AA', this.state.languageCode);


    return (
      <View style={styles.container}>
        <View style={styles.section}>
        <PowerTranslator style={styles.p} text={"Jose Mourinho believes Brazil and Spain are the teams to beat at the 2018 FIFA World Cup Russia™, but feels the presence of Lionel Messi and Cristiano Ronaldo – and that alone – gives Argentina and Portugal a chance. I really like Brazil’s basic structure – their tactics, mentality,” the Manchester United manager told ESPN Brasil. “There’s a mixture of natural Brazilian talent with a serious, physical, tactical approach. It’s a team capable of defending well, of conceding few goals, with a good support base. And they have an attack with Willian, Neymar, Philippe Coutinho and Gabriel Jesus… all players with exceptional qualities."}/>
        </View>
      </View>
    );
  }

  getStyles() {
        return {
            container: {
                padding: 40,
                backgroundColor: '#FAFAFA',
            },
            section: {
                marginTop: 15,
                marginBottom: 15,
            },
            title: {
                marginTop: 80,
                marginBottom: 5,
                fontWeight: 'bold',
                fontSize: 38,
                lineHeight: 38
            },
            subtitle: {
                color: '#B3B3B3',
            },
            p: {
                color: 'black',
                lineHeight: 24
            },
            languageBar: {
                flexDirection: 'row',
                justifyContent: 'space-between'
            },
            languageBarItem: {
                color: '#828280',
            }
        }
    }
}



// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     // backgroundColor: '#F5FCFF',
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5,
//   },
// });

// I18n.fallbacks = true;
// I18n.translations = {
//   en: {
//     greeting: "Hello",
//     goodbye: "Bye"
//   },
//   es: {
//     greeting: "Hola",
//     goodbye: "Adios"
//   },
//   fr: {
//     greeting: "Bonjour",
//     goodbye: "Au Revoir"
//   }
// }