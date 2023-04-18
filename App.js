import Item from './Item'
import { StyleSheet, View, Text, StatusBar, ImageBackground } from 'react-native';
import { Dimensions } from 'react-native'
import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      orientation: true,
      equation: '',
      evaled: '0'
    };
    Dimensions.addEventListener("change", () => {
      this.setState({
        orientation: this.isPortrait()
      })
    })
  }

  isPortrait = () => {
    print(Dimensions.get('screen'))
  };

  addToEquation = (val) => {
    deletelast = () => {          
      this.setState({
        equation: this.state.equation.substring(0,this.state.equation.length-1)
      })
    }
    const signs = ['+','-','/','*','n','s','w','t','.','(',')']
    const longersigns = ['n','s','w','t']
    if (val == '=') {
      if (!signs.includes(this.state.equation[this.state.equation.length-1])){
        this.setState({
          evaled: eval(this.state.equation)
        })
      }
    }
    else if (val == 'C') {
      this.setState({
        equation: '',
        evaled: '0'
      })
    }
    else if (val == 'sqrt'){
      if (this.state.evaled != ''){
        if (signs.includes(this.state.equation[this.state.equation.length-1])){
          deletelast()
        }
        this.setState({
          evaled: Math.sqrt(parseFloat(eval(this.state.equation)))
        })
      }
    }    
    else if (val == 'pow'){
      if (this.state.evaled != ''){
        if (signs.includes(this.state.equation[this.state.equation.length-1])){
          deletelast()
        }
        this.setState({
          evaled: Math.pow(parseFloat(eval(this.state.equation)),2)
        })
      }
    }    
    else if (val == 'sin'){
      if (this.state.evaled != ''){
        if (signs.includes(this.state.equation[this.state.equation.length-1])){
          deletelast()
        }
        this.setState({
          evaled: Math.sin(parseFloat(eval(this.state.equation)))
        })
      }
    }    
    else if (val == 'cos'){
      if (this.state.evaled != ''){
        if (signs.includes(this.state.equation[this.state.equation.length-1])){
          deletelast()
        }
        this.setState({
          evaled: Math.cos(parseFloat(eval(this.state.equation)))
        })
      }
    }
    else if (val == 'Del'){
      if (longersigns.includes(this.state.equation[this.state.equation.length-1])){
        if (this.state.equation[this.state.equation.length-1] == 't'){
          this.setState({
            equation: this.state.equation.substring(0,this.state.equation.length-4)
          })
        }
        else {
          this.setState({
            equation: this.state.equation.substring(0,this.state.equation.length-3)
          })
        }
      }
      else {
        this.setState({
          equation: this.state.equation.substring(0,this.state.equation.length-1)
        })
      }
    }
    else if (!(signs.includes(val[val.length-1]) && (signs.includes(this.state.equation[this.state.equation.length-1])))){
      this.setState({
        equation: this.state.equation + val,
      })
    }
  };


  render() {
    if (Dimensions.get('screen').height > Dimensions.get('screen').width) {
      const img = require("./assets/gradientland.jpg")
      return (
        <ImageBackground source={img} style={styles.container}>
        <StatusBar style="auto" />
        <View style={styles.bar1}><Text style={styles.bar1Text}>{this.state.equation}</Text></View>
        <View style={styles.bar2}><Text style={styles.bar2Text}>{this.state.evaled}</Text></View>
          {
            ['C','Del',
            '1','2','3','+',
            '4','5','6','-',
            '7','8','9','*',
            '0','.','=','/'].map((element) => {
              return <Item styles={styles} val={element} key={element} addToEquation={this.addToEquation} />
            })
          }
    
    </ImageBackground>);
    }
    else {
      const img = require("./assets/gradientland.jpg")
      return (<ImageBackground source={img} style={styles.container}>
        <StatusBar style="auto" />
        <View style={stylesland.bar1}><Text style={styles.bar1Text}>{this.state.equation}</Text></View>
        <View style={styles.bar2}><Text style={styles.bar2Text}>{this.state.evaled}</Text></View>
          {
            ['1','2','3','Del','sqrt',
            '4','5','6','C','pow',
            '7','8','9','-','+','sin',
            '0','.','=','/','*','cos'].map((element) => {
              return <Item styles={stylesland} val={element} key={element} addToEquation={this.addToEquation} />
            })
            
          }
      </ImageBackground>);
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  img: {
    width: '100%',
    height: '100%',
  },
  div: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '24.44%',
    height: '10.75%',
    backgroundColor: 'rgba(0, 0, 0, .1)',
    borderRadius: 10,
    margin: 1
  },
  divText: {
    color: "lightgrey",
    fontSize: 20
  },
  bar1: {
    width: '100%',
    height: '25%',
    borderTopColor: "aliceblue",
    display: "flex",
    justifyContent: "flex-end"
  },
  bar1Text: {
    fontSize: 25,
    textAlign: "center",
    color: "silver"
  },
  bar2Text: {
    fontSize: 30,
    textAlign: "center",
    color: "white"
  },
  bar2: {
    width: '100%',
    height: '20%',
    borderTopColor: "aliceblue",
    borderBottomColor: "transparent",
    borderWidth: .2,
    fontSize: 20,
  },
  divoff: {
    width: '24%',
    height: '10.75%',
    margin: 1,
    opacity: 0
  },
  divCDel: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '49.4%',
    height: '10.75%',
    backgroundColor: 'rgba(0, 0, 0, .1)',
    borderRadius: 10,
    margin: 1
  },
});

const stylesland = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  div: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '16.4%',
    height: '14.9%',
    backgroundColor: 'rgba(0, 0, 0, .1)',
    borderRadius: 10,
    margin: 1
  },
  divText: {
    color: "lightgrey",
    fontSize: 20
  },
  bar1: {
    width: '100%',
    height: '17.5%',
    borderTopColor: "aliceblue",
    justifyContent: "flex-end"
  },
  divoff: {
    width: '16.4%',
    height: '14.9%',
    margin: 1,
    opacity: 0
  },
  divCDel: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '33.05%',
    height: '14.9%',
    backgroundColor: 'rgba(0, 0, 0, .1)',
    borderRadius: 10,
    margin: 1
  },
});

export default App;