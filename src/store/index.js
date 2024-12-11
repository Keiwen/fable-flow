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
    library: '',
    author: '',
    book: '',
    chapterIndex: 0,
    trackTime: 0
  },
  getters: {
    author: (state) => state.author,
    book: (state) => state.book,
    chapterIndex: (state) => state.chapterIndex,
    trackTime: (state) => state.trackTime
  },
  mutations: {
    setLibrary (state, library) {
      state.library = library
    },
    setAuthor (state, author) {
      state.author = author
    },
    setBook (state, book) {
      state.book = book
    },
    setChapterIndex (state, index) {
      state.chapterIndex = index
    },
    setTrackTime (state, time) {
      state.trackTime = time
    },
    resetSelection (state) {
      state.author = ''
      state.book = ''
      state.chapterIndex = 0
      state.trackTime = 0
    }
  },
  actions: {
    selectLibrary ({ state, commit }, library) {
      if (!library) {
        commit('setLibrary', '')
        commit('resetSelection')
      } else if (library !== state.library) {
        commit('setLibrary', library)
        commit('resetSelection')
      }
    },
    selectAuthor ({ commit }, author) {
      commit('setBook', '')
      commit('setChapterIndex', 0)
      commit('setAuthor', author)
      commit('setTrackTime', 0)
    },
    selectBook ({ commit }, book) {
      commit('setChapterIndex', 0)
      commit('setBook', book)
      commit('setTrackTime', 0)
    },
    selectChapterIndex ({ commit }, index) {
      commit('setChapterIndex', index)
      commit('setTrackTime', 0)
    },
    updateTrackTime ({ commit }, time) {
      commit('setTrackTime', time)
    }
  },
  modules: {
  },
  strict: process.env.NODE_ENV !== 'production',
  plugins: [vuexPersist.plugin]
})
