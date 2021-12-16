import React from 'react';
import { 
    Text, 
    Dimensions,
    StyleSheet,
    View,
    TouchableOpacity} from 'react-native';
import { useTheme } from '@react-navigation/native';
import * as Animatable from 'react-native-animatable';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { LinearGradient } from 'expo-linear-gradient';
import { StackActions } from '@react-navigation/native';



const LogoScreen = ({navigation}) => {
    const { colors } = useTheme();

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Animatable.Image 
                    animation="bounceIn"
                    duraton="1500"
                source={require('../../../assets/revel-systems-logo.png')}
                style={styles.logo}
                resizeMode="center"/>
            </View>
           
            <LinearGradient style={styles.footer} colors={['#229fe3', '#ffffff']}>
                <Animatable.View x
                    style={styles.footer}
                    animation="fadeInUpBig">
                    
                <Text style={[styles.title, {color: colors.text}]}>Welcome to Revel Lite!</Text>

                <Text style={styles.text}>Sign in with account</Text>

                <Text style={styles.textSign}>Email</Text>
                <View style={styles.textInput}>
                    <FontAwesome name="user-o" color='black' size={20}/>
                </View>
                <Text style={styles.textSign}>Password</Text>
                <View style={styles.textInput}>
                    <FontAwesome name="key" color='black' size={20}/>
                </View>

                <View style={styles.button}>
                    <TouchableOpacity onPress={()=>navigation.dispatch(
                        StackActions.replace('ShopNavigator'))}>
                        <LinearGradient colors={['#08d4c4', '#01ab9d']} style={styles.signIn}>
                                <Text style={styles.textSign}>Log In</Text>
                        </LinearGradient>
                    </TouchableOpacity>
                </View>
                </Animatable.View>
            </LinearGradient>
        </View>
    );
};

export default LogoScreen;

const {height} = Dimensions.get("screen");
const height_logo = height * 0.30;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#ffffff'
  },
  header: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
  },
  footer: {
      flex: 1.5,
      backgroundColor: 'transparent',
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
      paddingVertical: 10,
      paddingHorizontal: 10
  },
  logo: {
      width: height_logo,
      height: height_logo
  },
  title: {
      color: '#05375a',
      fontSize: 30,
      fontWeight: 'bold'
  },
  text: {
      color: 'black',
      marginTop:5,
      padding: 10
  },
  button: {
      alignItems: 'flex-end',
      marginTop: 30
  },
  signIn: {
      width: 150,
      height: 40,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 50,
      flexDirection: 'row'
  },
  textSign: {
      color: 'white',
      fontWeight: 'bold'
  },
  textInput: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    paddingBottom: 5
  }
});
