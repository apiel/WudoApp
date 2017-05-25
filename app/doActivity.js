/**
 * Wudo
 * @flow
 */

import React, { Component } from 'react';
import { AutoGrowingTextInput } from 'react-native-autogrow-textinput';
import { Text, Card, CardItem, Body, Button, Right, Icon } from 'native-base';
import { StyleSheet, View, Dimensions } from 'react-native';

export default class extends Component {
    styles = StyleSheet.create({
        container: {
            width: Dimensions.get('window').width,
            height: Dimensions.get('window').height,
            backgroundColor: '#FFFFFF00',
            padding: 10,
            paddingBottom: Dimensions.get('window').height * 0.5,
        } });

    render() {
        // height: Dimensions.get('window').height * 0.3,
        return (
            <View style={this.styles.container}>
                <Card>
                    <CardItem header>
                        <Text>Climbing</Text>
                        <Right>
                            <Button info transparent>
                                <Icon name="close" />
                            </Button>
                        </Right>
                    </CardItem>
                    <CardItem style={{ flex: 1 }}>
                        <Body>
                            <AutoGrowingTextInput placeholder={'Put some details...'} />
                        </Body>
                    </CardItem>
                    <CardItem footer>
                        <Body>
                            <Button block info>
                                <Text>Do</Text>
                            </Button>
                        </Body>
                    </CardItem>
                </Card>
            </View>
        );
    }
}
