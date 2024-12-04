import { createStore } from 'vuex'
import VuexPersistence from 'vuex-persist'
import { LOCAL_STORAGE_KEY } from '@/constants'

// create vuex-persist instance
const vuexPersist = new VuexPersistence({
  storage: window.localStorage,
  key: LOCAL_STORAGE_KEY
})

export default createStore({
  state: {
    libraryHandle: null, // default null
    currentAuthor: '',
    currentBook: ''
  },
  getters: {
    getLibraryHandle: (state) => state.libraryHandle,
    getLibraryDirectory: (state) => state.libraryHandle ? state.libraryHandle.name : '',
    getCurrentAuthor: (state) => state.currentAuthor,
    getCurrentBook: (state) => state.currentBook
  },
  mutations: {
    setLibraryHandle (state, libraryHandle) {
      state.libraryHandle = libraryHandle
    },
    setCurrentAuthor (state, author) {
      state.currentAuthor = author
    },
    setCurrentBook (state, book) {
      state.currentBook = book
    }
  },
  actions: {
    updateLibraryHandle ({ commit }, libraryHandle) {
      commit('setCurrentBook', '')
      commit('setCurrentAuthor', '')
      commit('setLibraryHandle', libraryHandle)
    },
    updateCurrentAuthor ({ commit }, author) {
      commit('setCurrentBook', '')
      commit('setCurrentAuthor', author)
    },
    updateCurrentBook ({ commit }, book) {
      commit('setCurrentBook', book)
    }
  },
  modules: {
  },
  strict: process.env.NODE_ENV !== 'production',
  plugins: [vuexPersist.plugin]
})
