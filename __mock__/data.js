/**
 * Wudo
 * @flow
 */

export default {
    activities: {
        '23233223': {
            name: 'Climbing',
            joins: [
                { id: '878458', allow: true },
                { id: '8808872', allow: true },
            ],
        },
        '2999923': {
            name: 'Running',
            joins: [],
        },        
    },
    friends: {
        '878458': {
            name: 'Nina Hueber',
            avatar: '',
            activities: [
                { id: '34435', name: 'Climbing', join: true },
                { id: '37775', name: 'Smoking', join: false },
                { id: '37995', name: 'Drinking', join: false },
            ],
        },
        '8808872': {
            name: 'Cori Wakba',
            avatar: '',
            activities: [
                { id: '34905', name: 'Climbing', join: true },
            ],
        },
        '88777972': {
            name: 'Alex my friend',
            avatar: '',
            activities: [
                { id: '23435', name: 'Party', join: true },
            ],
        },        
    },
    feeds: [
        {
            idFriend: '878458',
            idActivity: '34435',
            time: 'Sun May 21 2017 00:18:50 GMT+0200 (CEST)',
            description: 'Boulder walfishgasse at 4',
            // no need join, but there would be a button "me too", that would create the same activity, only if user has same activity
        },
    ],
};
