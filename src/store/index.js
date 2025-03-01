import { createStore } from 'vuex'
import VuexPersistence from 'vuex-persist'
import { useStorageInstance } from '@/composables/storageInstance'

// create vuex-persist instance
const vuexPersist = new VuexPersistence({
  // option 1: use local storage
  // storage: window.localStorage,
  // key: PERSISTENCE_KEY
  // option 2: use indexedDB. In this case, you have to set async storage
  // Also in router, wait for restoration before each
  // storage: localForage,
  // option 3: use a specific instance for indexedDB
  storage: useStorageInstance().getStorageInstance(),
  asyncStorage: true,
  key: 'store'
})

export default createStore({
  state: {
    library: '',
    author: '',
    book: '',
    chapterIndex: 0,
    trackTime: 0,
    amplifySound: false,
    autoplayNextChapter: false,
    displayChapterTitle: true
  },
  getters: {
    author: (state) => state.author,
    book: (state) => state.book,
    chapterIndex: (state) => state.chapterIndex,
    trackTime: (state) => state.trackTime,
    amplifySound: (state) => state.amplifySound,
    autoplayNextChapter: (state) => state.autoplayNextChapter,
    displayChapterTitle: (state) => state.displayChapterTitle
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
    setAmplifySound (state, amplifySound) {
      state.amplifySound = amplifySound
    },
    setAutoplayNextChapter (state, autoplayNextChapter) {
      state.autoplayNextChapter = autoplayNextChapter
    },
    setDisplayChapterTitle (state, displayChapterTitle) {
      state.displayChapterTitle = displayChapterTitle
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
    },
    setAmplifySound ({ commit }, amplifySound) {
      commit('setAmplifySound', amplifySound)
    },
    setAutoplayNextChapter ({ commit }, autoplayNextChapter) {
      commit('setAutoplayNextChapter', autoplayNextChapter)
    },
    setDisplayChapterTitle ({ commit }, displayChapterTitle) {
      commit('setDisplayChapterTitle', displayChapterTitle)
    }
  },
  modules: {
  },
  strict: process.env.NODE_ENV !== 'production',
  plugins: [vuexPersist.plugin]
})
