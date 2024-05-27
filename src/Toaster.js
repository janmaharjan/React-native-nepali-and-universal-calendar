import React from 'react';
import {View, StyleSheet, ToastAndroid, Button, StatusBar} from 'react-native';
class Toaster {
  customToast(msg){
    ToastAndroid.show(msg, ToastAndroid.SHORT);
  }
  connectionFailed() {
    alert('Failed to connect.');
  }
  serverFailed() {
    alert('Failed to connect the server.');
  }
  cannotFetch() {
    alert('Failed to Fetch.');
  }
  success() {
    alert('Success.');
  }
  invalidUser() {
    alert('Invalid User! Username or password is incorrect.');
  }
  offline() {
    alert('You are offline.');
  }
  notSynced() {
    alert('Still previous user has not synced collected information.');
  }
  simpleError() {
    alert('Error');
  }
}
const toaster = new Toaster();
export default toaster;
