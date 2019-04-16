export default {
  namespaced: true,
  state: {
    works: [],
    workForm: {
      show: false,
      editMode: false
    },
    editedWork: {},
    editedTags: []
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

    TURN_EDIT_MODE_ON: (state, work) => {
      state.workForm.editMode = true;
      state.editedWork = {...work};
      state.editedTags = state.editedWork.techs.split(',');
    },

    TURN_EDIT_MODE_OFF: (state) => {
      state.workForm.editMode = false;
      state.editedWork = {};
      state.editedTags = [];
    },

    REMOVE_TAG: (state, deletedTag) => {
      state.editedTags = state.editedTags.filter(tag =>
        tag !== deletedTag
      );
    },

    ADD_TAGS: (state, addingTags) => {
      let tagsForAdd = addingTags.split(',');
      tagsForAdd = tagsForAdd.filter(tag => tag !== "");
      state.editedTags = [...state.editedTags, ...tagsForAdd];
    },


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