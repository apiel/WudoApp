/**
 * Wudo
 * @flow
 */

import React, { Component, PropTypes } from 'react';
import { Text, ListItem, Right, Body, Button, Container,
            Left, Thumbnail } from 'native-base';
import moment from 'moment';

import data from '../__mock__/data';

export default class extends Component {
    static propTypes = {
        navigator: PropTypes.object.isRequired, // eslint-disable-line
    }

    getFeedKeys(): string[] {
        return Object.keys(data.feeds);
    }

    getFeed(id: string): {} {
        return data.feeds[id];
    }

    getFriend(id: string): {} {
        return data.friends[this.getFeed(id).idFriend];
    }

    getActivity(id: string): {} {
        return this.getFriend(id).activities[this.getFeed(id).idActivity];
    }

    getDateTime(id: string): string {
        return moment(new Date(this.getFeed(id).time)).format('DD.MM.YYYY HH:mm');
    }

    showLightBox(screenName: string): void {
        this.props.navigator.showLightBox({
            screen: screenName,
            style: {
                backgroundBlur: 'dark',
            },
        });
    }

    showDetails(): void {
        this.showLightBox('feedDetails');
    }

    joinActivity(): void {

    }

    render() {
        return (
            <Container>
                { this.getFeedKeys().map(id =>
                    (<ListItem key={id} avatar>
                        <Left>
                            <Thumbnail source={require('../img/avatars/0.png')} />
                        </Left>
                        <Body>
                            <Text>{this.getActivity(id).name}</Text>
                            <Text note>
                                {this.getFriend(id).name}
                            </Text>
                            <Text note>{this.getDateTime(id)}</Text>
                        </Body>
                        <Right>
                            <Button rounded info onPress={() => this.joinActivity()}>
                                <Text>Join</Text>
                            </Button>
                        </Right>
                    </ListItem>))
                }
            </Container>
        );
    }
}
