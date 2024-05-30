// index.js
import { createStore } from 'vuex'
import toolsModule from './modules/toolsModule'

// Create the Vuex store and add your module
const store = createStore({
    modules: {
      tools: toolsModule
    }
  })
  
  export default store