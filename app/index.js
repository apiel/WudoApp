/**
 * Wudo
 * @flow
 */

import { Navigation } from 'react-native-navigation';

import Activities from './activities';

Navigation.registerComponent('activities', () => Activities);

// start the app
Navigation.startTabBasedApp({
    tabs: [
        {
            label: 'Activities',
            screen: 'activities',
            title: 'Activities',
            icon: require('../img/list.png'), // eslint-disable-line
        },
    ],
});
