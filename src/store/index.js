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
    chapterIndex: 0
  },
  getters: {
    author: (state) => state.author,
    book: (state) => state.book,
    chapterIndex: (state) => state.chapterIndex
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
    resetSelection (state) {
      state.author = ''
      state.book = ''
      state.chapterIndex = 0
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
    },
    selectBook ({ commit }, book) {
      commit('setChapterIndex', 0)
      commit('setBook', book)
    },
    selectChapterIndex ({ commit }, index) {
      commit('setChapterIndex', index)
    }
  },
  modules: {
  },
  strict: process.env.NODE_ENV !== 'production',
  plugins: [vuexPersist.plugin]
})
