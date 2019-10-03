import Vue from 'vue';
import Vuex from 'vuex';

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
  locations: [
    { x: 842, y: 215 },
    { x: 702, y: 217 },
    { x: 779, y: 117 },
    { x: 588, y: 254 },
    { x: 728, y: 305 },
  ],
  users: [
    { name: 'Hayato Koriyama', location_uuid: '', nickname: 'nekobato' },
    { name: 'Kuro Neko', location_uuid: '', nickname: 'kuro' },
    { name: 'Shiro Neko', location_uuid: '', nickname: 'shiro' },
    { name: 'Sabi Neko', location_uuid: '', nickname: 'sabi' },
    { name: 'Saba Neko', location_uuid: '', nickname: 'saba' },
    { name: 'Buchi Neko', location_uuid: '', nickname: 'buchi' },
    { name: 'Mike Neko', location_uuid: '', nickname: 'mike' },
  ],
};

type State = typeof state;

export default new Vuex.Store<State>({
  state,
  mutations: {
    AddLocation(state, location) {
      state.locations.push(location);
    },
    UpdateLocation(state, { index, newProps }) {
      console.log(newProps);
      state.locations.splice(index, 1, { ...state.locations[index], ...newProps });
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
