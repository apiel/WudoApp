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

    static navigatorButtons = {
        rightButtons: [
            {
                icon: require('../img/navicon_add.png'),  // eslint-disable-line
                title: 'Add',
                id: 'add',
            },
        ],
    }

    constructor(props: any) {
        super(props);
        this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));
    }

    onNavigatorEvent(event: any) {
        switch (event.id) {
        case 'add':
            this.addActivity();
            break;

        default:
            console.log('Unhandled event', event.id);
            break;
        }
    }

    getActivities() {
        return data.activities;
    }

    getActivityKeys(): string[] {
        return Object.keys(this.getActivities());
    }

    showLightBox(screenName: string): void {
        this.props.navigator.showLightBox({
            screen: screenName,
            style: {
                backgroundBlur: 'dark',
            },
        });
    }

    showFollowers(): void {
        this.showLightBox('followers');
    }

    addActivity(): void {
        this.showLightBox('addActivity');
    }

    doActivity(): void {
        this.showLightBox('doActivity');
    }

    render() {
        return (
            <Container>
                { this.getActivityKeys().map(id =>
                    (<ListItem key={id}>
                        <Body>
                            <Text>{this.getActivities()[id].name}</Text>
                            <Text note onPress={() => this.showFollowers()}>
                                {this.getActivities()[id].followers.length} Followers
                            </Text>
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
