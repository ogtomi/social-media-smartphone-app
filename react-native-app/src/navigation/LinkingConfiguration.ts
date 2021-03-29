import * as Linking from 'expo-linking';

export default {
  prefixes: [Linking.makeUrl('/')],
  config: {
    screens: {
      Root: {
        screens: {
          WallTab: {
            screens: {
              WallTabScreen: 'one',
            },
          },
          EventTab: {
            screens: {
              EventScreen: 'two',
            },
          },
          PeopleTab: {
            screens: {
              PeopleTabScreen: 'three',
            },
          },
        },
      },
      NotFound: '*',
    },
  },
};
