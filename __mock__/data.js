/**
 * Wudo
 * @flow
 */

export default {
    activities: {
        id23233223: {
            name: 'Climbing',
            followers: [
                { id: 'id878458', allow: true },
                { id: 'id8808872', allow: false },
            ],
        },
        id2999923: {
            name: 'Running',
            followers: [],
        },
    },
    friends: {
        id878458: {
            name: 'Nina Hueber',
            avatar: '',
            activities: [
                { id: '34435', name: 'Climbing', allow: true },
                { id: '37775', name: 'Smoking', allow: false },
                { id: '37995', name: 'Drinking', allow: false },
            ],
        },
        id8808872: {
            name: 'Cori Wakba',
            avatar: '',
            activities: [
                { id: '34905', name: 'Climbing', allow: true },
            ],
        },
        id88777972: {
            name: 'Alex my friend',
            avatar: '',
            activities: [
                { id: '23435', name: 'Party', allow: true },
            ],
        },
    },
    feeds: [
        {
            idFriend: 'id878458',
            idActivity: 'id34435',
            time: 'Sun May 21 2017 00:18:50 GMT+0200 (CEST)',
            description: 'Boulder walfishgasse at 4',
            // no need join, but there would be a button "me too", that would create the same activity, only if user has same activity
        },
    ],
};
