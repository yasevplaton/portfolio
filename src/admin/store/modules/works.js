export default {
  namespaced: true,
  state: {
    works: [],
    workForm: {
      show: false,
      editMode: false
    },
    editedWork: {}
  },
  mutations: {
    SET_WORKS: (state, works) => {
      state.works = works;
    },

    ADD_WORK: (state, work) => {
      state.works.unshift(work);
    },

    REMOVE_WORK: (state, deletedWorkId) => {
      state.works = state.works.filter(work =>
        work.id !== deletedWorkId
      );
    },

    EDIT_WORK: (state, editedWork) => {
      state.works = state.works.map(work =>
        work.id === editedWork.id ? editedWork : work
      );
    },

    SHOW_FORM: (state) => {
      state.workForm.show = true;
    },

    CLOSE_FORM: (state) => {
      state.workForm.show = false;
    },

    TURN_EDIT_MODE_ON: (state) => {
      state.workForm.editMode = true;
    },

    TURN_EDIT_MODE_OFF: (state) => {
      state.workForm.editMode = false;
    },

    SET_EDITED_WORK: (state, work) => {
      state.editedWork = {...work};
    }
  },
  actions: {
    async addWork({ commit }, work) {
      try {
        const response = await this.$axios.post("/works", work)
        commit('ADD_WORK', response.data);
        return response;
      } catch (error) {
        throw new Error(
          error.response.data.error || error.response.data.message
        );
      }
    },

    async fetchWorks({ commit }) {
      let responseUserId, userId;
      try {
        responseUserId = await this.$axios.get("/user");
        userId = responseUserId.data.user.id;
      } catch(error) {
        console.log(error.message);
      }
      try {
        const response = await this.$axios.get(`/works/${userId}`);
        commit("SET_WORKS", response.data.reverse());
        return response;
      } catch (error) {
        console.log(error.message);
      }
    },

    async removeWork({ commit }, workId) {
      try {
        const response = await this.$axios.delete(`/works/${workId}`);
        commit("REMOVE_WORK", workId);
        return response;
      } catch (error) {
        throw new Error(
          error.response.data.error || error.response.data.message
        );
      }
    },

    async editWork({ commit }, workData) {
      try {
        const response = await this.$axios.post(`/works/${workData.id}`, workData.data);
        commit("EDIT_WORK", response.data.work);
        return response;
      } catch (error) {
        throw new Error(
          error.response.data.error || error.response.data.message
        );
      }
    }
  }
};