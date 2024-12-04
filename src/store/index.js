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
    libraryName: '',
    currentAuthor: '',
    currentBook: ''
  },
  getters: {
    getLibraryName: (state) => state.libraryName,
    getCurrentAuthor: (state) => state.currentAuthor,
    getCurrentBook: (state) => state.currentBook
  },
  mutations: {
    setLibraryName (state, libraryName) {
      state.libraryName = libraryName
    },
    setCurrentAuthor (state, author) {
      state.currentAuthor = author
    },
    setCurrentBook (state, book) {
      state.currentBook = book
    }
  },
  actions: {
    updateLibraryName ({ commit }, libraryName) {
      commit('setCurrentBook', '')
      commit('setCurrentAuthor', '')
      commit('setLibraryName', libraryName)
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
