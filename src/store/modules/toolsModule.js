// toolsModule.js
export default {
    namespaced: true,
    state: () => ({
      toolData: {
        displayName: '',
      },
    }),
    getters: {
      displayName: state => state.toolData.displayName,
    },
    mutations: {
      setDisplayName(state, value) {
        console.log('Committing setDisplayName with value: ', value);
        state.toolData.displayName = value;
      }
    }
  }