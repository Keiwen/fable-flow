import { createStore } from 'vuex'
import VuexPersistence from 'vuex-persist'
import { LOCAL_STORAGE_KEY } from '@/constants'

// create vuex-persist instance
const vuexPersist = new VuexPersistence({
  storage: window.localStorage,
  key: LOCAL_STORAGE_KEY,
  reducer: (state) => {
    // exclude handle
    const { library, ...rest } = state
    return rest
  }
})

export default createStore({
  state: {
    library: {
      handle: null,
      tracks: {}
    },
    currentLibrary: '',
    currentAuthor: '',
    currentBook: '',
    currentChapterIndex: 0
  },
  getters: {
    libraryHandle: (state) => state.library.handle,
    libraryName: (state) => state.library.handle ? state.library.handle.name : '',
    currentAuthor: (state) => state.currentAuthor,
    currentBook: (state) => state.currentBook,
    currentChapterIndex: (state) => state.currentChapterIndex,
    authorsList: (state) => Object.keys(state.library.tracks),
    getBooksFromAuthor: (state) => (author) => {
      if (!state.library.tracks[author]) return []
      return Object.keys(state.library.tracks[author])
    },
    getChaptersFromBook: (state) => (author, book) => {
      if (!state.library.tracks[author]) return []
      if (!state.library.tracks[author][book]) return []
      return state.library.tracks[author][book]
    },
    getChapterFromBook: (state, getters) => (author, book, index) => {
      const chapters = getters.getChaptersFromBook(author, book)
      if (!chapters[index]) return null
      return chapters[index]
    },
    getCurrentChapter: (state, getters) => () => {
      return getters.getChapterFromBook(state.currentAuthor, state.currentBook, state.currentChapterIndex)
    }
  },
  mutations: {
    setLibraryHandle (state, libraryHandle) {
      state.library.handle = libraryHandle
      state.library.tracks = {}
    },
    setCurrentLibrary (state, library) {
      state.currentLibrary = library
    },
    setCurrentAuthor (state, author) {
      state.currentAuthor = author
    },
    setCurrentBook (state, book) {
      state.currentBook = book
    },
    setCurrentChapterIndex (state, index) {
      state.currentChapterIndex = index
    },
    setAuthorBooks (state, payload) {
      state.library.tracks[payload.author] = payload.books
    },
    resetCurrentSelection (state) {
      state.currentAuthor = ''
      state.currentBook = ''
      state.currentChapterIndex = 0
    }
  },
  actions: {
    updateLibraryHandle ({ state, commit }, libraryHandle) {
      commit('setLibraryHandle', libraryHandle)
      if (!libraryHandle) {
        commit('setCurrentLibrary', '')
        commit('resetCurrentSelection')
      } else if (libraryHandle.name !== state.currentLibrary) {
        commit('setCurrentLibrary', libraryHandle.name)
        commit('resetCurrentSelection')
      }
    },
    updateCurrentAuthor ({ commit }, author) {
      commit('setCurrentBook', '')
      commit('setCurrentChapterIndex', 0)
      commit('setCurrentAuthor', author)
    },
    updateCurrentBook ({ commit }, book) {
      commit('setCurrentChapterIndex', 0)
      commit('setCurrentBook', book)
    },
    updateCurrentChapterIndex ({ commit }, index) {
      commit('setCurrentChapterIndex', index)
    },
    setAuthorBooks ({ commit }, payload) {
      commit('setAuthorBooks', payload)
    }
  },
  modules: {
  },
  strict: process.env.NODE_ENV !== 'production',
  plugins: [vuexPersist.plugin]
})
