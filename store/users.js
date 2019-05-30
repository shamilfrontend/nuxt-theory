export const state = () => ({
  users: []
});

export const getters = {
  users: state => state.users,
};

export const mutations = {
  setUsers: (state, payload) => {
    state.users = payload;
  },
};

export const actions = {
  async fetchUsers({commit}) {
    try {
      const users = await this.$axios.$get('http://dummy.restapiexample.com/api/v1/employees');
      commit('setUsers', users.map(item => ({
        ...item,
        profile_image: 'https://i.ya-webdesign.com/images/user-image-png-7.png'
      })));
    } catch (e) {
      throw e;
    }
  },

  async fetchUserById({}, id) {
    try {
      return await this.$axios.$get(`http://dummy.restapiexample.com/api/v1/employee/${id}`);
    } catch (e) {
      throw e;
    }
  }
};
