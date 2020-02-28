import app from './modules/app';

export const modules = {
  app
};

export const state = () => ({
  commonData: null
});

export const mutations = {
  setCommonData(state, payload) {
    state.commonData = payload;
  }
};

export const actions = {
  async nuxtServerInit({dispatch}) { // eslint-disable-line
    // await dispatch('fetchCommonData');
  },
  async fetchCommonData({commit}) { // eslint-disable-line
    const {data} = await this.$axios.get('settings');

    commit('setCommonData', data);
  }
};
