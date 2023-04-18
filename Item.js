import React from 'react';
import { Text, Pressable } from 'react-native';

class Item extends React.Component {

    add = () => {
        this.props.addToEquation(this.props.val)
    }

    render(){
        if (this.props.val == 'C' || this.props.val == 'Del'){
            return (<Pressable style={this.props.styles.divCDel} onPress={this.add}>
                        <Text style={this.props.styles.divText}> {this.props.val} </Text>
                </Pressable>)
        }
        else {
            return (<Pressable style={this.props.styles.div} onPress={this.add}>
                        <Text style={this.props.styles.divText}> {this.props.val} </Text>
                </Pressable>)
        }
    }
}

export default Item;