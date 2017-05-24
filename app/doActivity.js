/**
 * Wudo
 * @flow
 */

import React, { Component } from 'react';

import { Text, Card, CardItem, Body, Container } from 'native-base';

export default class extends Component {
    render() {
        // height: Dimensions.get('window').height * 0.3,
        return (
            <Container style={{ padding: 10 }}>
                <Card>
                    <CardItem>
                        <Body>
                            <Text>
                                Do acitivity
                            </Text>
                        </Body>
                    </CardItem>
                </Card>
            </Container>
        );
    }
}
