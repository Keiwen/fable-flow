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
    shelf: {},
    amplifySound: false,
    autoplayNextChapter: false,
    pageturnSoundPlay: false,
    displayChapterTitle: true,
    autoRewindOnPause: false,
    theme: 'dark'
  },
  getters: {
    author: (state) => state.author,
    book: (state) => state.book,
    amplifySound: (state) => state.amplifySound,
    autoplayNextChapter: (state) => state.autoplayNextChapter,
    pageturnSoundPlay: (state) => state.pageturnSoundPlay,
    displayChapterTitle: (state) => state.displayChapterTitle,
    autoRewindOnPause: (state) => state.autoRewindOnPause,
    theme: (state) => state.theme,
    shelf: (state) => state.shelf,
    getBookOnShelf: (state, getters) => (author, book) => {
      if (!author) author = getters.author
      if (!author) return null
      if (!book) book = getters.book
      if (!book) return null
      const authorOnShelf = state.shelf[author]
      if (!authorOnShelf) return null
      return authorOnShelf[book] ?? null
    },
    getChapterIndex: (state, getters) => (author, book) => {
      const bookOnShelf = getters.getBookOnShelf(author, book)
      if (!bookOnShelf) return 0
      return bookOnShelf.chapterIndex ?? 0
    },
    getTrackTime: (state, getters) => (author, book) => {
      const bookOnShelf = getters.getBookOnShelf(author, book)
      if (!bookOnShelf) return 0
      return bookOnShelf.trackTime ?? 0
    }
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
      const book = state.shelf[state.author][state.book]
      book.chapterIndex = index
    },
    setTrackTime (state, time) {
      const book = state.shelf[state.author][state.book]
      book.trackTime = time
    },
    setAmplifySound (state, amplifySound) {
      state.amplifySound = amplifySound
    },
    setAutoplayNextChapter (state, autoplayNextChapter) {
      state.autoplayNextChapter = autoplayNextChapter
    },
    setPageturnSoundPlay (state, pageturnSoundPlay) {
      state.pageturnSoundPlay = pageturnSoundPlay
    },
    setDisplayChapterTitle (state, displayChapterTitle) {
      state.displayChapterTitle = displayChapterTitle
    },
    setAutoRewindOnPause (state, autoRewindOnPause) {
      state.autoRewindOnPause = autoRewindOnPause
    },
    setTheme (state, theme) {
      state.theme = theme
    },
    addBookOnShelf (state, authorAndBook) {
      if (!state.shelf[authorAndBook.author]) state.shelf[authorAndBook.author] = {}
      state.shelf[authorAndBook.author][authorAndBook.book] = {
        chapterIndex: 0,
        trackTime: 0
      }
    },
    resetSelection (state) {
      state.author = ''
      state.book = ''
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
      commit('setAuthor', author)
    },
    selectBook ({ getters, dispatch, commit }, book) {
      commit('setBook', book)
      const bookOnShelf = getters.getBookOnShelf(getters.author, book)
      if (!bookOnShelf) dispatch('addBookOnShelf')
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
    setPageturnSoundPlay ({ commit }, pageturnSoundPlay) {
      commit('setPageturnSoundPlay', pageturnSoundPlay)
    },
    setDisplayChapterTitle ({ commit }, displayChapterTitle) {
      commit('setDisplayChapterTitle', displayChapterTitle)
    },
    setAutoRewindOnPause ({ commit }, autoRewindOnPause) {
      commit('setAutoRewindOnPause', autoRewindOnPause)
    },
    setTheme ({ commit }, theme) {
      commit('setTheme', theme)
    },
    addBookOnShelf ({ getters, commit }, author, book) {
      if (!author) author = getters.author
      if (!author) return null
      if (!book) book = getters.book
      if (!book) return null
      commit('addBookOnShelf', { author: author, book: book })
    }
  },
  modules: {
  },
  strict: process.env.NODE_ENV !== 'production',
  plugins: [vuexPersist.plugin]
})
