import React, {Children, Component} from 'react';
import {View, 
  Text, 
  TouchableOpacity, 
  Animated, 
  ScrollView, 
  Image,Dimensions
} from 'react-native';


  

const {width} = Dimensions.get('window');

class App extends Component {
  
  state = {
    active: 0,
    xTabOne:0,
    xTabTwo:0,
    translateX: new Animated.Value(0),
    translateY: -1000,
    translateXTaOne: new Animated.Value(0),
    translateXTabTwo: new Animated.Value(width)
    
  } 

  handleSlide = type => {
    let {active, xTabOne,xTabTwo,translateX,translateXTabTwo,translateXTaOne} = this.state
    Animated.spring(translateX,{
      toValue: type,
      duration: 100
    }).start();
    if(active === 0){
      Animated.parallel([
        Animated.spring(translateXTaOne,{
          toValue: 0,
          duration: 100,

        }).start(),
        Animated.spring(translateXTabTwo,{
          toValue: width,
          duration: 100,
        }).start(),
      ])
    }else{
      Animated.parallel([
        Animated.spring(translateXTaOne,{
          toValue: -width,
          duration: 100,

        }).start(),
        Animated.spring(translateXTabTwo,{
          toValue: 0,
          duration: 100,
        }).start(),
      ])
    }
  }

  render (){
    let { xTabOne,
      xTabTwo,
      translateX,
      translateY,
      active,
      translateXTaOne,
      translateXTabTwo} = this.state
    return (
 
      <View style={{flex: 1}}>
        <View 
          style={{
            width: '100%' ,
            marginLeft: 'auto',
            marginRight: 'auto',
            backgroundColor: '#000',
            height: '100%'

            }}
        >
          <View 
            style={{
              flexDirection: 'row',
              marginTop: 40,
              marginBottom: 20,
              height: 80,
              backgroundColor: '#440f0',
              borderBottomWidth: 2,
              borderColor: '#f62d00',
              
            }}
          >
              <Animated.View 
                style={{
                  position: 'absolute',
                  width: '50%',
                  height: '100%',
                  top:0,
                  left:0,
                  backgroundColor: '#f62d00',
                  borderRadius: 4,
                  shadowColor: '#f62d00',
                  shadowRadius: 30,
                  transform:[{
                    translateX
                  }]
                }}
              />

              
              <TouchableOpacity 
                style={{
                  flex:1,
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: 4,
                  borderBottomWidth: 0,
                  borderTopRightRadius: 0,
                  borderBottomRightRadius: 0,
    
                }}
                onLayout={event => this.setState({xTabOne: event.nativeEvent.layout.x})}
                onPress={() => this.setState({active: 0}, () => this.handleSlide(xTabOne))}
              >
                <Text style={{fontSize: 30,color: active === 0 ? '#fff' : '#f62d00'}}>WELLCOME</Text>
              </TouchableOpacity>
              <TouchableOpacity 
                style={{
                  flex:1,
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: 4,
                  borderLeftWidth: 0,
                  borderTopleftRadius: 0,
                  borderBottomLeftRadius: 0,
                }}
                onLayout={event => this.setState({xTabTwo: event.nativeEvent.layout.x})}
                onPress={() => this.setState({active: 1}, () => this.handleSlide(xTabTwo))}
              >
                <Text style={{ fontSize: 30, color: active === 1 ? '#fff' : '#f62d00'}}>ALFHEIM</Text>
              </TouchableOpacity>

            
          </View>
          <ScrollView>
          <Animated.View style={{
            justifyContent: 'center', 
            alignItems: 'center',
            transform:[
              {
                translateX: translateXTaOne
              }
            ]  
          
          }}
          onLayout={event => this.setState({translateY: event.nativeEvent.layout.height})}
        >
              <Text style={{color: '#fff',fontSize: 100,marginTop: 40}}>Wellcome!</Text>
              <View style={{marginTop: 20}}>
                <Image source={require('./assets/mylogo.jpg')}
                style={{width: 200, height: 200, borderRadius: 200}}
                />
              </View>
            </Animated.View>  
      
      
          <Animated.View
            style={{
              justifyContent: 'center', 
              alignItems: 'center',
              width: 300,
              height: 200,
              marginLeft: width/2-150,
              marginBottom: 500, 
      
              transform:[
                {
                  translateX: translateXTabTwo
                },
                {
                  translateY: -translateY
                }
              ]  
              
            }}
          >
              <Text style={{color: '#fff',marginTop:400}}> Hi , I am Guzmán!</Text>
             
              <View>
                <Image source={require('./assets/my.jpg')}
                style={{width: 50, height: 50, borderRadius: 100}}
                />
              
              </View>
                <Text style={{color: '#fff',marginLeft: 1000,marginTop:400,height:400}}>Goten.mannss@gmail.com</Text>
             
            </Animated.View>  
          </ScrollView>
        </View>

      </View>
    )
  }
}

export default App;


//const styles = StyleSheet.create({
  
  
 
//});
