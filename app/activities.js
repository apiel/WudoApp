/**
 * Wudo
 * @flow
 */

import React, { Component, PropTypes } from 'react';
import { Text, ListItem, Right, Body, Button, Container } from 'native-base';

import data from '../__mock__/data';

export default class extends Component {
    static propTypes = {
        navigator: PropTypes.object.isRequired, // eslint-disable-line
    }

    getActivities() {
        return data.activities;
    }

    getActivityKeys(): string[] {
        return Object.keys(this.getActivities());
    }

    doActivity(): void {
        this.props.navigator.showLightBox({
            screen: 'doActivity',
            style: {
                backgroundBlur: 'dark',
            },
        });
    }

    render() {
        return (
            <Container>
                { this.getActivityKeys().map(id =>
                    (<ListItem key={id}>
                        <Body>
                            <Text>{this.getActivities()[id].name}</Text>
                        </Body>
                        <Right>
                            <Button rounded info onPress={() => this.doActivity()}>
                                <Text>Do</Text>
                            </Button>
                        </Right>
                    </ListItem>))
                }
            </Container>
        );
    }
}
