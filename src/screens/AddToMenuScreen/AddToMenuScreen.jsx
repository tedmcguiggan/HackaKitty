import React from 'react';
import { StyleSheet, View, TextInput, Button} from 'react-native';

const AddToMenuScreen = ()=> {
  return ( 
    <View style ={{padding: 60}}>
      <View style= {{flexDirection: 'row'}}>
        <TextInput placeholder='Enter item name...' style={{borderColor: 'black', borderWidth: 1, padding: 10}}/>
        <Button title="ADD" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  
});

export default AddToMenuScreen;