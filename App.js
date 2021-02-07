import React,{ Component } from 'react';
import img from './assets/splash.png';
import { StyleSheet, Text, View, FlatList } from 'react-native';

export default class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      data:[
        {name:'ange',age:1},
        {name:'ange',age:2},
        {name:'ange',age:3},
        {name:'ange',age:4},
        {name:'ange',age:5},
        {name:'ange',age:6},
        {name:'ange',age:7},
        {name:'ange',age:8},
      ]
    }
  }
  render(){
    const { data } = this.state;
    return (
      <View style={styles.container}>
        <FlatList
          keyExtractor={(item)=> data.indexOf(item)}
          data={data}
          numColumns={2}
          renderItem={({ item })=>
              <Text style={styles.person}>{item.name} is {item.age} old</Text>
            }
        />
        {/* <ScrollView >
          {data.map((item,index)=>
          <View key={index} style={styles.person}>
            <Text>{item.name} is {item.age} old</Text>
          </View>
          )}
        </ScrollView> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333',
    // alignItems: 'center',
    // justifyContent: 'center',
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
  },
  person:{
    padding:20,
    margin:20,
    backgroundColor:'dodgerblue'
  }
});
