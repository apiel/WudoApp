/**
 * Wudo
 * @flow
 */

import React, { Component } from 'react';
import { StyleSheet, AppRegistry } from 'react-native';

import { Container, Header, Content,
         Title, Button, Left, Text,
         Right, Body, Icon } from 'native-base';

export default class Wudo extends Component {
    styles = StyleSheet.create({
        container: {
            flex: 1,
            marginLeft: 10,
            marginRight: 10,
            alignItems: 'stretch',
            justifyContent: 'center',
        },
    });

    render() {
        return (
            <Container>
                <Header>
                    <Left>
                        <Button transparent>
                            <Icon name="menu" />
                        </Button>
                    </Left>
                    <Body>
                        <Title>Wudo</Title>
                    </Body>
                    <Right>
                        <Button transparent>
                            <Icon name="settings" />
                        </Button>
                    </Right>
                </Header>
                <Content>
                    <Text>Yoyo</Text>
                </Content>
            </Container>
        );
    }
}

AppRegistry.registerComponent('Wudo', () => Wudo);
