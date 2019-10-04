import Vue from 'vue';
import Vuex from 'vuex';

import { locations } from './locations';
import { users } from './users';

Vue.use(Vuex);

const state = {
  status: {
    activeMapIndex: 0,
  },
  project: {
    name: 'mercari',
    title: 'メルカリ',
    uuid: '',
  },
  maps: [
    {
      uuid: '',
      title: 'Tokyo 18F',
    },
  ],
  locations: locations,
  users: users,
};

type State = typeof state;

export default new Vuex.Store<State>({
  state,
  mutations: {
    AddLocation(state, location) {
      state.locations.push(location);
    },
    UpdateLocation(state, { index, newProps }) {
      console.log(state.locations[index], newProps);
      state.locations.splice(index, 1, Object.assign(state.locations[index], newProps));
    },
    AddUser(state, _) {
      state.users.push({
        name: '',
        location_uuid: '',
        nickname: '',
      });
    },
    UpdateUser(state, { user, index }) {
      state.users.splice(index, 1, user);
    },
  },
});
