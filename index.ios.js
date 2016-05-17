/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import { LineChart } from 'react-native-ios-charts';


const config = {
      dataSets: [{
        values: [-1, 1, -1, 1, -1, 1],
        drawValues: false,
        colors: ['rgb(199, 255, 140)'],
        label: 'Sine function',
        drawCubic: true,
        drawCircles: false,
        lineWidth: 2
      }, {
        values: [1, -1, 1, -1, 1, -1],
        drawValues: false,
        colors: ['rgb(255, 247, 141)'],
        label: 'Cosine function',
        drawCubic: true,
        drawCircles: false,
        lineWidth: 2
      }],
      backgroundColor: 'transparent',
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
      minOffset: 20,
      scaleYEnabled: false,
      legend: {
        textSize: 12
      },
      xAxis: {
        axisLineWidth: 0,
        drawLabels: false,
        position: 'bottom',
        drawGridLines: false
      },
      leftAxis: {
        customAxisMax: 1,
        customAxisMin: -1,
        labelCount: 11,
        startAtZero: false
      },
      rightAxis: {
        enabled: false,
        drawGridLines: false
      },
      valueFormatter: {
        minimumSignificantDigits: 1,
        type: 'regular',
        maximumDecimalPlaces: 1
      }
    };

class RNSpike extends Component {
  render() {
    return (
      <View style={styles.container}>
	<LineChart config={config} style={styles.chart}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor: '#F5FCFF',
    paddingTop: 40,
    paddingBottom: 40,
    paddingLeft: 10,
    paddingLeft: 10
  },
  chart: {
    flex: 1
  }
  });

AppRegistry.registerComponent('RNSpike', () => RNSpike);
