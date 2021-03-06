/**
 * Wudo
 * @flow
 */

import { Navigation } from 'react-native-navigation';

import Activities from './activities';
import DoActivity from './doActivity';
import AddActivity from './addActivity';
import Followers from './followers';
import Friends from './friends';
import Feeds from './feeds';
import FeedDetails from './feedDetails';
import Profile from './profile';

Navigation.registerComponent('activities', () => Activities);
Navigation.registerComponent('doActivity', () => DoActivity);
Navigation.registerComponent('addActivity', () => AddActivity);
Navigation.registerComponent('followers', () => Followers);
Navigation.registerComponent('friends', () => Friends);
Navigation.registerComponent('feeds', () => Feeds);
Navigation.registerComponent('feedDetails', () => FeedDetails);
Navigation.registerComponent('profile', () => Profile);

// start the app
Navigation.startTabBasedApp({
    tabs: [
        {
            label: 'Activities',
            screen: 'activities',
            title: 'Activities',
            icon: require('../img/list.png'), // eslint-disable-line
        },
        {
            label: 'Feeds',
            screen: 'feeds',
            title: 'Feeds',
            icon: require('../img/one.png'), // eslint-disable-line
        },
        {
            label: 'Friends',
            screen: 'friends',
            title: 'Friends',
            icon: require('../img/list.png'), // eslint-disable-line
        },
        {
            label: 'Profile',
            screen: 'profile',
            title: 'Profile',
            icon: require('../img/list.png'), // eslint-disable-line
        },
    ],
});
