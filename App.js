import React,{ Component } from 'react';
import img from './assets/splash.png'
import { Button, StyleSheet, Text, View } from 'react-native';

export default class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      text:"kabundege"
    }
  }
  render(){
    const { text } = this.state;
    return (
      <View style={styles.container}>
        <Text style={styles.text}>My Name is {text}</Text>
        <View style={styles.button}>
            <Button title="Update Name" onPress={()=>this.setState({ text: "also kwizera" })}/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text:{
    fontWeight:'bold',
    color:'crimson'
  },
  button:{
    marginTop:20,
  }
});
