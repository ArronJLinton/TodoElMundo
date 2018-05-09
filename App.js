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

  constructor() {
    super();
    this.state = { languageCode: 'en' };
  }

  componentWillMount() {
    console.log(I18n.currentLocale())
    // this.setState({languageCode: I18n.currentLocale()})
  }

  render() {
    const styles = this.getStyles();

    Translation.setConfig(ProviderTypes.Google, 'AIzaSyB5ip6KC-9KCIjO9Q7Rm47dYJDmOdjLgM0', this.state.languageCode);


    return (
      <View style={styles.container}>
        <View style={styles.section}>
        <PowerTranslator style={styles.p} text={'Hello World'}/>
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