import React,{ Component } from 'react';
import img from './assets/splash.png'
import { Button, StyleSheet, Text, View, TextInput } from 'react-native';

export default class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      text:"kabundege",
      holder:""
    }
  }
  render(){
    const { text } = this.state;
    return (
      <View style={styles.container}>
        <Text style={styles.text}>My Name is {text}</Text>
        <TextInput style={styles.input} placeholder=" New Name ...." onChangeText={(value)=>this.setState({ holder: value })}/>
        <View style={styles.button}>
            <Button title="Update Name" onPress={()=>this.setState({ text: this.state.holder })}/>
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
  },
  input:{
    borderWidth:1,
    borderColor:"grey",
    borderRadius:10,
    marginTop:20,
    padding:10,
    paddingVertical:5
  }
});
