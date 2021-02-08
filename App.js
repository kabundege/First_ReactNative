import React,{ Component } from 'react';
import img from './assets/splash.png'
import { Button, FlatList, SafeAreaView, StyleSheet, Text, TextInput, View,  } from 'react-native';

export default class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      content:[
        {name:'kabundege',age:21},
        {name:'kabundege',age:24},
        {name:'kabundege',age:27},
        {name:'kabundege',age:30},
      ],
      input:''
    }
  }
  render(){
    const { content } = this.state;
    return (
      <View style={styles.container}>
          <Text style={styles.header}>My Todos</Text>
          <View>
            <FlatList
              keyExtractor={(item) => content.indexOf(item)}
              data={content}
              renderItem={({ item })=>
                  <Text 
                    style={styles.person}
                    onPress={()=> this.setState((prevState,props)=>({ 
                      content : prevState.content.filter(el=> el.age != item.age) 
                    })
                    )}
                    >
                      {item.name} is {item.age} old
                  </Text>
                }
            />
          </View>
          <View>
            <TextInput
              style={styles.input}
              placeholder="new task"
              placeholderTextColor="whitesmoke"
              onChangeText={(val)=>this.setState({ input :  val})}
            />
            <Button
              title="Add"
              color="coral"
              onPress={(e)=> 
                this.setState({ content : [{ name:input,age:30 },...this.state.content]})
              }
            />
          </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'dodgerblue',
  },
  header:{
    padding:20,
    backgroundColor:"coral",
    fontSize:30,
    fontWeight:'bold',
    textAlign:"center",
    color:'whitesmoke',
    marginBottom:30
  },
  person:{
    padding:15,
    margin:5,
    color:"white",
    borderRadius:5,
    borderWidth:1,
    borderColor:"lightgrey",
    borderStyle:"dashed"
  },
  input:{
    padding:20,
    backgroundColor:'#333',
    margin:10,
    color:'white',
    borderRadius:50,
    borderWidth:1,
    borderColor:"grey",
    shadowColor:"#333",
    shadowRadius:10,
  }
});
