/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/App.vue?vue&type=script&setup=true&lang=js":
/*!*************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/App.vue?vue&type=script&setup=true&lang=js ***!
  \*************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _composables_flashMessages__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/composables/flashMessages */ \"./src/composables/flashMessages.js\");\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.runtime.esm-bundler.js\");\n/* harmony import */ var _components_NavBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/NavBar */ \"./src/components/NavBar.vue\");\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  __name: 'App',\n  setup(__props, {\n    expose: __expose\n  }) {\n    __expose();\n    const {\n      flashMessages,\n      clearMessage\n    } = (0,_composables_flashMessages__WEBPACK_IMPORTED_MODULE_0__.useFlashMessages)();\n    const messages = (0,vue__WEBPACK_IMPORTED_MODULE_1__.computed)(() => flashMessages.value);\n    const computeAlertClass = type => {\n      switch (type) {\n        case 'error':\n          return 'alert-danger';\n        default:\n          return 'alert-' + type;\n      }\n    };\n    const __returned__ = {\n      flashMessages,\n      clearMessage,\n      messages,\n      computeAlertClass,\n      get useFlashMessages() {\n        return _composables_flashMessages__WEBPACK_IMPORTED_MODULE_0__.useFlashMessages;\n      },\n      computed: vue__WEBPACK_IMPORTED_MODULE_1__.computed,\n      get NavBar() {\n        return _components_NavBar__WEBPACK_IMPORTED_MODULE_2__[\"default\"];\n      }\n    };\n    Object.defineProperty(__returned__, '__isScriptSetup', {\n      enumerable: false,\n      value: true\n    });\n    return __returned__;\n  }\n});\n\n//# sourceURL=webpack://fable-flow/./src/App.vue?./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use%5B0%5D!./node_modules/vue-loader/dist/index.js??ruleSet%5B0%5D.use%5B0%5D");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/AudioPlayer.vue?vue&type=script&setup=true&lang=js":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/AudioPlayer.vue?vue&type=script&setup=true&lang=js ***!
  \********************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var core_js_modules_web_url_search_params_delete_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.url-search-params.delete.js */ \"./node_modules/core-js/modules/web.url-search-params.delete.js\");\n/* harmony import */ var core_js_modules_web_url_search_params_delete_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_url_search_params_delete_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var core_js_modules_web_url_search_params_has_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/web.url-search-params.has.js */ \"./node_modules/core-js/modules/web.url-search-params.has.js\");\n/* harmony import */ var core_js_modules_web_url_search_params_has_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_url_search_params_has_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var core_js_modules_web_url_search_params_size_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/web.url-search-params.size.js */ \"./node_modules/core-js/modules/web.url-search-params.size.js\");\n/* harmony import */ var core_js_modules_web_url_search_params_size_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_url_search_params_size_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.runtime.esm-bundler.js\");\n/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! vuex */ \"./node_modules/vuex/dist/vuex.esm-bundler.js\");\n/* harmony import */ var _composables_libraryLoader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/composables/libraryLoader */ \"./src/composables/libraryLoader.js\");\n/* harmony import */ var _composables_flashMessages__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/composables/flashMessages */ \"./src/composables/flashMessages.js\");\n/* harmony import */ var _components_AudioPlayerPlayButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/AudioPlayerPlayButton */ \"./src/components/AudioPlayerPlayButton.vue\");\n/* harmony import */ var _components_AudioPlayerRewindButton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/components/AudioPlayerRewindButton */ \"./src/components/AudioPlayerRewindButton.vue\");\n/* harmony import */ var _components_AudioPlayerTimeview__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/components/AudioPlayerTimeview */ \"./src/components/AudioPlayerTimeview.vue\");\n/* harmony import */ var _components_AudioPlayerTimeline__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/components/AudioPlayerTimeline */ \"./src/components/AudioPlayerTimeline.vue\");\n\n\n\n\n\n\n\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  __name: 'AudioPlayer',\n  setup(__props, {\n    expose: __expose\n  }) {\n    __expose();\n    const store = (0,vuex__WEBPACK_IMPORTED_MODULE_10__.useStore)();\n    const {\n      getChapterFromBook\n    } = (0,_composables_libraryLoader__WEBPACK_IMPORTED_MODULE_4__.useLibraryLoader)();\n    const {\n      addWarningMessage,\n      addErrorMessage\n    } = (0,_composables_flashMessages__WEBPACK_IMPORTED_MODULE_5__.useFlashMessages)();\n\n    // data\n    const audioPlayer = (0,vue__WEBPACK_IMPORTED_MODULE_3__.ref)(null);\n    const chapterSrc = (0,vue__WEBPACK_IMPORTED_MODULE_3__.ref)(null);\n    const currentTime = (0,vue__WEBPACK_IMPORTED_MODULE_3__.ref)(0);\n    const currentProgress = (0,vue__WEBPACK_IMPORTED_MODULE_3__.ref)(0);\n    const playing = (0,vue__WEBPACK_IMPORTED_MODULE_3__.ref)(false);\n    const duration = (0,vue__WEBPACK_IMPORTED_MODULE_3__.ref)(0);\n    const initTrackTime = (0,vue__WEBPACK_IMPORTED_MODULE_3__.ref)(0);\n\n    // computed\n    const currentAuthor = (0,vue__WEBPACK_IMPORTED_MODULE_3__.computed)(() => store.getters.author);\n    const currentBook = (0,vue__WEBPACK_IMPORTED_MODULE_3__.computed)(() => store.getters.book);\n    const currentChapterIndex = (0,vue__WEBPACK_IMPORTED_MODULE_3__.computed)(() => store.getters.chapterIndex);\n    const currentChapter = (0,vue__WEBPACK_IMPORTED_MODULE_3__.computed)(() => getChapterFromBook(currentAuthor.value, currentBook.value, currentChapterIndex.value));\n\n    // methods\n    const startBook = async () => {\n      initTrackTime.value = 0;\n      await stopAudio();\n      await store.dispatch('selectChapterIndex', 0);\n      playChapter(currentChapter.value);\n    };\n    const nextChapter = async () => {\n      initTrackTime.value = 0;\n      const nextIndex = currentChapterIndex.value + 1;\n      const nextChapter = getChapterFromBook(currentAuthor.value, currentBook.value, nextIndex);\n      if (nextChapter) {\n        await stopAudio();\n        await store.dispatch('selectChapterIndex', nextIndex);\n        await playChapter(nextChapter);\n      } else {\n        addWarningMessage('This is the last chapter');\n      }\n    };\n    const playChapter = async (chapterHandle, autoPlay = true) => {\n      if (!chapterHandle) {\n        addErrorMessage('No chapter found');\n        return;\n      }\n      try {\n        const audioFile = await chapterHandle.getFile();\n        // clean previous value\n        if (chapterSrc.value) {\n          URL.revokeObjectURL(chapterSrc.value);\n        }\n        chapterSrc.value = URL.createObjectURL(audioFile);\n        // reload\n        await audioPlayer.value.load();\n        if (autoPlay) {\n          await audioPlayer.value.play();\n          playing.value = true;\n        }\n      } catch (e) {\n        addErrorMessage('Cannot start audio file');\n        console.error(e);\n      }\n    };\n    const stopAudio = async () => {\n      await audioPlayer.value.pause();\n      currentTime.value = 0;\n      currentProgress.value = 0;\n      playing.value = false;\n    };\n    const audioPlayerTimeUpdate = e => {\n      // check that audio player is still there, we may have this event called on nav while audio player became null\n      if (audioPlayer.value) {\n        currentTime.value = Math.floor(audioPlayer.value.currentTime);\n        currentProgress.value = Math.round(audioPlayer.value.currentTime / audioPlayer.value.duration * 100);\n      }\n    };\n    const audioPlayerPause = e => {\n      playing.value = false;\n    };\n    const audioPlayerPlay = e => {\n      playing.value = true;\n    };\n    const audioPlayerEnded = e => {\n      playing.value = false;\n    };\n    const audioPlayerError = e => {\n      playing.value = false;\n      addErrorMessage('An error occurred on audio player');\n      console.error(e);\n    };\n    const audioPlayerLoaded = e => {\n      if (audioPlayer.value) {\n        duration.value = audioPlayer.value.duration;\n        audioPlayer.value.currentTime = initTrackTime.value;\n      }\n      console.log(e);\n    };\n    const trackTimeBack = backTime => {\n      if (audioPlayer.value) {\n        audioPlayer.value.currentTime -= backTime;\n        // if below 0, it is set to 0\n      }\n    };\n    const changeProgress = percentProgress => {\n      if (audioPlayer.value) {\n        audioPlayer.value.currentTime = parseInt(percentProgress) / 100 * audioPlayer.value.duration;\n      }\n    };\n    const togglePlay = () => {\n      if (audioPlayer.value) {\n        if (audioPlayer.value.paused) {\n          audioPlayer.value.play();\n        } else {\n          audioPlayer.value.pause();\n        }\n        playing.value = !playing.value;\n      }\n    };\n    (0,vue__WEBPACK_IMPORTED_MODULE_3__.watch)(currentTime, (newValue, oldValue) => {\n      if (newValue !== oldValue) {\n        store.dispatch('updateTrackTime', newValue);\n      }\n    });\n    (0,vue__WEBPACK_IMPORTED_MODULE_3__.onMounted)(async () => {\n      if (audioPlayer.value) {\n        audioPlayer.value.addEventListener('timeupdate', audioPlayerTimeUpdate);\n        audioPlayer.value.addEventListener('loadedmetadata', audioPlayerLoaded);\n        audioPlayer.value.addEventListener('pause', audioPlayerPause);\n        audioPlayer.value.addEventListener('play', audioPlayerPlay);\n        audioPlayer.value.addEventListener('ended', audioPlayerEnded);\n        audioPlayer.value.addEventListener('error', audioPlayerError);\n        if (currentChapter.value) {\n          await playChapter(currentChapter.value, false);\n          const storedTrackTime = store.getters.trackTime;\n          if (storedTrackTime) {\n            initTrackTime.value = storedTrackTime;\n          }\n        }\n        audioPlayer.value.volume = 1;\n      } else {\n        addErrorMessage('Cannot initialize audio player');\n      }\n    });\n    const __returned__ = {\n      store,\n      getChapterFromBook,\n      addWarningMessage,\n      addErrorMessage,\n      audioPlayer,\n      chapterSrc,\n      currentTime,\n      currentProgress,\n      playing,\n      duration,\n      initTrackTime,\n      currentAuthor,\n      currentBook,\n      currentChapterIndex,\n      currentChapter,\n      startBook,\n      nextChapter,\n      playChapter,\n      stopAudio,\n      audioPlayerTimeUpdate,\n      audioPlayerPause,\n      audioPlayerPlay,\n      audioPlayerEnded,\n      audioPlayerError,\n      audioPlayerLoaded,\n      trackTimeBack,\n      changeProgress,\n      togglePlay,\n      ref: vue__WEBPACK_IMPORTED_MODULE_3__.ref,\n      computed: vue__WEBPACK_IMPORTED_MODULE_3__.computed,\n      onMounted: vue__WEBPACK_IMPORTED_MODULE_3__.onMounted,\n      watch: vue__WEBPACK_IMPORTED_MODULE_3__.watch,\n      get useStore() {\n        return vuex__WEBPACK_IMPORTED_MODULE_10__.useStore;\n      },\n      get useLibraryLoader() {\n        return _composables_libraryLoader__WEBPACK_IMPORTED_MODULE_4__.useLibraryLoader;\n      },\n      get useFlashMessages() {\n        return _composables_flashMessages__WEBPACK_IMPORTED_MODULE_5__.useFlashMessages;\n      },\n      get AudioPlayerPlayButton() {\n        return _components_AudioPlayerPlayButton__WEBPACK_IMPORTED_MODULE_6__[\"default\"];\n      },\n      get AudioPlayerRewindButton() {\n        return _components_AudioPlayerRewindButton__WEBPACK_IMPORTED_MODULE_7__[\"default\"];\n      },\n      get AudioPlayerTimeview() {\n        return _components_AudioPlayerTimeview__WEBPACK_IMPORTED_MODULE_8__[\"default\"];\n      },\n      get AudioPlayerTimeline() {\n        return _components_AudioPlayerTimeline__WEBPACK_IMPORTED_MODULE_9__[\"default\"];\n      }\n    };\n    Object.defineProperty(__returned__, '__isScriptSetup', {\n      enumerable: false,\n      value: true\n    });\n    return __returned__;\n  }\n});\n\n//# sourceURL=webpack://fable-flow/./src/components/AudioPlayer.vue?./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use%5B0%5D!./node_modules/vue-loader/dist/index.js??ruleSet%5B0%5D.use%5B0%5D");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/AudioPlayerPlayButton.vue?vue&type=script&setup=true&lang=js":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/AudioPlayerPlayButton.vue?vue&type=script&setup=true&lang=js ***!
  \******************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.runtime.esm-bundler.js\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  __name: 'AudioPlayerPlayButton',\n  props: {\n    playing: {\n      type: Boolean,\n      default: false\n    },\n    color: {\n      type: String,\n      default: 'white'\n    }\n  },\n  emits: ['click-play'],\n  setup(__props, {\n    expose: __expose,\n    emit: __emit\n  }) {\n    __expose();\n    const props = __props;\n    const emit = __emit;\n\n    // computed\n    const divClass = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {\n      let divClass = 'play-button';\n      if (props.playing) {\n        divClass += ' play-button-playing';\n      }\n      return divClass;\n    });\n\n    // methods\n    const clickOnPlay = () => {\n      emit('click-play');\n    };\n    const __returned__ = {\n      props,\n      emit,\n      divClass,\n      clickOnPlay,\n      computed: vue__WEBPACK_IMPORTED_MODULE_0__.computed\n    };\n    Object.defineProperty(__returned__, '__isScriptSetup', {\n      enumerable: false,\n      value: true\n    });\n    return __returned__;\n  }\n});\n\n//# sourceURL=webpack://fable-flow/./src/components/AudioPlayerPlayButton.vue?./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use%5B0%5D!./node_modules/vue-loader/dist/index.js??ruleSet%5B0%5D.use%5B0%5D");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/AudioPlayerRewindButton.vue?vue&type=script&setup=true&lang=js":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/AudioPlayerRewindButton.vue?vue&type=script&setup=true&lang=js ***!
  \********************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  __name: 'AudioPlayerRewindButton',\n  props: {\n    color: {\n      type: String,\n      default: 'white'\n    }\n  },\n  emits: ['click-rewind'],\n  setup(__props, {\n    expose: __expose,\n    emit: __emit\n  }) {\n    __expose();\n    const emit = __emit;\n\n    // methods\n    const clickOnRewind = () => {\n      emit('click-rewind');\n    };\n    const __returned__ = {\n      emit,\n      clickOnRewind\n    };\n    Object.defineProperty(__returned__, '__isScriptSetup', {\n      enumerable: false,\n      value: true\n    });\n    return __returned__;\n  }\n});\n\n//# sourceURL=webpack://fable-flow/./src/components/AudioPlayerRewindButton.vue?./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use%5B0%5D!./node_modules/vue-loader/dist/index.js??ruleSet%5B0%5D.use%5B0%5D");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/AudioPlayerTimeline.vue?vue&type=script&setup=true&lang=js":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/AudioPlayerTimeline.vue?vue&type=script&setup=true&lang=js ***!
  \****************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.runtime.esm-bundler.js\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  __name: 'AudioPlayerTimeline',\n  props: {\n    percentProgress: {\n      type: Number,\n      required: true\n    }\n  },\n  emits: ['changeProgress'],\n  setup(__props, {\n    expose: __expose,\n    emit: __emit\n  }) {\n    __expose();\n    const props = __props;\n    const emit = __emit;\n\n    // computed\n    const cssVars = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {\n      return {\n        '--custom-player-percent-progress': props.percentProgress + '%'\n      };\n    });\n\n    // methods\n    const changeTime = e => {\n      emit('changeProgress', e.srcElement.value);\n    };\n    const __returned__ = {\n      props,\n      emit,\n      cssVars,\n      changeTime,\n      computed: vue__WEBPACK_IMPORTED_MODULE_0__.computed\n    };\n    Object.defineProperty(__returned__, '__isScriptSetup', {\n      enumerable: false,\n      value: true\n    });\n    return __returned__;\n  }\n});\n\n//# sourceURL=webpack://fable-flow/./src/components/AudioPlayerTimeline.vue?./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use%5B0%5D!./node_modules/vue-loader/dist/index.js??ruleSet%5B0%5D.use%5B0%5D");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/AudioPlayerTimeview.vue?vue&type=script&setup=true&lang=js":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/AudioPlayerTimeview.vue?vue&type=script&setup=true&lang=js ***!
  \****************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _composables_displayFilters__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/composables/displayFilters */ \"./src/composables/displayFilters.js\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  __name: 'AudioPlayerTimeview',\n  props: {\n    duration: {\n      type: Number,\n      default: 0\n    },\n    currentTime: {\n      type: Number,\n      default: 0\n    }\n  },\n  setup(__props, {\n    expose: __expose\n  }) {\n    __expose();\n    const {\n      time\n    } = (0,_composables_displayFilters__WEBPACK_IMPORTED_MODULE_0__.useDisplayFilters)();\n    const getDisplayTime = timeInSecond => {\n      return time(timeInSecond);\n    };\n    const __returned__ = {\n      time,\n      getDisplayTime,\n      get useDisplayFilters() {\n        return _composables_displayFilters__WEBPACK_IMPORTED_MODULE_0__.useDisplayFilters;\n      }\n    };\n    Object.defineProperty(__returned__, '__isScriptSetup', {\n      enumerable: false,\n      value: true\n    });\n    return __returned__;\n  }\n});\n\n//# sourceURL=webpack://fable-flow/./src/components/AudioPlayerTimeview.vue?./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use%5B0%5D!./node_modules/vue-loader/dist/index.js??ruleSet%5B0%5D.use%5B0%5D");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/AuthorSelect.vue?vue&type=script&setup=true&lang=js":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/AuthorSelect.vue?vue&type=script&setup=true&lang=js ***!
  \*********************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.runtime.esm-bundler.js\");\n/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuex */ \"./node_modules/vuex/dist/vuex.esm-bundler.js\");\n/* harmony import */ var _composables_libraryLoader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/composables/libraryLoader */ \"./src/composables/libraryLoader.js\");\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  __name: 'AuthorSelect',\n  setup(__props, {\n    expose: __expose\n  }) {\n    __expose();\n    const store = (0,vuex__WEBPACK_IMPORTED_MODULE_2__.useStore)();\n    const {\n      getAuthorsList\n    } = (0,_composables_libraryLoader__WEBPACK_IMPORTED_MODULE_1__.useLibraryLoader)();\n\n    // data\n    const selectedAuthor = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)('');\n\n    // computed\n    const authors = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => getAuthorsList());\n\n    // watch\n    (0,vue__WEBPACK_IMPORTED_MODULE_0__.watch)(selectedAuthor, async newValue => {\n      if (!newValue || newValue === store.getters.author) return;\n      store.dispatch('selectAuthor', newValue);\n    });\n    (0,vue__WEBPACK_IMPORTED_MODULE_0__.onMounted)(async () => {\n      selectedAuthor.value = store.getters.author;\n    });\n    const __returned__ = {\n      store,\n      getAuthorsList,\n      selectedAuthor,\n      authors,\n      ref: vue__WEBPACK_IMPORTED_MODULE_0__.ref,\n      onMounted: vue__WEBPACK_IMPORTED_MODULE_0__.onMounted,\n      watch: vue__WEBPACK_IMPORTED_MODULE_0__.watch,\n      computed: vue__WEBPACK_IMPORTED_MODULE_0__.computed,\n      get useStore() {\n        return vuex__WEBPACK_IMPORTED_MODULE_2__.useStore;\n      },\n      get useLibraryLoader() {\n        return _composables_libraryLoader__WEBPACK_IMPORTED_MODULE_1__.useLibraryLoader;\n      }\n    };\n    Object.defineProperty(__returned__, '__isScriptSetup', {\n      enumerable: false,\n      value: true\n    });\n    return __returned__;\n  }\n});\n\n//# sourceURL=webpack://fable-flow/./src/components/AuthorSelect.vue?./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use%5B0%5D!./node_modules/vue-loader/dist/index.js??ruleSet%5B0%5D.use%5B0%5D");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/BookInfo.vue?vue&type=script&setup=true&lang=js":
/*!*****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/BookInfo.vue?vue&type=script&setup=true&lang=js ***!
  \*****************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.runtime.esm-bundler.js\");\n/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuex */ \"./node_modules/vuex/dist/vuex.esm-bundler.js\");\n/* harmony import */ var _composables_libraryLoader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/composables/libraryLoader */ \"./src/composables/libraryLoader.js\");\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  __name: 'BookInfo',\n  setup(__props, {\n    expose: __expose\n  }) {\n    __expose();\n    const store = (0,vuex__WEBPACK_IMPORTED_MODULE_2__.useStore)();\n    const {\n      getChaptersFromBook\n    } = (0,_composables_libraryLoader__WEBPACK_IMPORTED_MODULE_1__.useLibraryLoader)();\n\n    // computed\n    const currentAuthor = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => store.getters.author);\n    const currentBook = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => store.getters.book);\n    const chapters = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => getChaptersFromBook(currentAuthor.value, currentBook.value));\n    const chapterCount = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => chapters.value.length);\n    const __returned__ = {\n      store,\n      getChaptersFromBook,\n      currentAuthor,\n      currentBook,\n      chapters,\n      chapterCount,\n      computed: vue__WEBPACK_IMPORTED_MODULE_0__.computed,\n      get useStore() {\n        return vuex__WEBPACK_IMPORTED_MODULE_2__.useStore;\n      },\n      get useLibraryLoader() {\n        return _composables_libraryLoader__WEBPACK_IMPORTED_MODULE_1__.useLibraryLoader;\n      }\n    };\n    Object.defineProperty(__returned__, '__isScriptSetup', {\n      enumerable: false,\n      value: true\n    });\n    return __returned__;\n  }\n});\n\n//# sourceURL=webpack://fable-flow/./src/components/BookInfo.vue?./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use%5B0%5D!./node_modules/vue-loader/dist/index.js??ruleSet%5B0%5D.use%5B0%5D");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/BookSelect.vue?vue&type=script&setup=true&lang=js":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/BookSelect.vue?vue&type=script&setup=true&lang=js ***!
  \*******************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.push.js */ \"./node_modules/core-js/modules/es.array.push.js\");\n/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.runtime.esm-bundler.js\");\n/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vuex */ \"./node_modules/vuex/dist/vuex.esm-bundler.js\");\n/* harmony import */ var _composables_libraryLoader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/composables/libraryLoader */ \"./src/composables/libraryLoader.js\");\n/* harmony import */ var vue_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vue-router */ \"./node_modules/vue-router/dist/vue-router.mjs\");\n\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  __name: 'BookSelect',\n  setup(__props, {\n    expose: __expose\n  }) {\n    __expose();\n    const store = (0,vuex__WEBPACK_IMPORTED_MODULE_3__.useStore)();\n    const {\n      getBooksFromAuthor\n    } = (0,_composables_libraryLoader__WEBPACK_IMPORTED_MODULE_2__.useLibraryLoader)();\n    const router = (0,vue_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n\n    // data\n    const selectedBook = (0,vue__WEBPACK_IMPORTED_MODULE_1__.ref)('');\n\n    // computed\n    const currentAuthor = (0,vue__WEBPACK_IMPORTED_MODULE_1__.computed)(() => store.getters.author);\n    const books = (0,vue__WEBPACK_IMPORTED_MODULE_1__.computed)(() => getBooksFromAuthor(currentAuthor.value));\n\n    // watch\n    (0,vue__WEBPACK_IMPORTED_MODULE_1__.watch)(currentAuthor, async newValue => {\n      if (!newValue) return;\n      selectedBook.value = store.getters.book;\n    });\n    (0,vue__WEBPACK_IMPORTED_MODULE_1__.watch)(selectedBook, async newValue => {\n      if (!newValue || newValue === store.getters.book) return;\n      await store.dispatch('selectBook', newValue);\n      router.push({\n        name: 'chapter'\n      });\n    });\n    (0,vue__WEBPACK_IMPORTED_MODULE_1__.onMounted)(async () => {\n      selectedBook.value = store.getters.book;\n    });\n    const __returned__ = {\n      store,\n      getBooksFromAuthor,\n      router,\n      selectedBook,\n      currentAuthor,\n      books,\n      ref: vue__WEBPACK_IMPORTED_MODULE_1__.ref,\n      computed: vue__WEBPACK_IMPORTED_MODULE_1__.computed,\n      watch: vue__WEBPACK_IMPORTED_MODULE_1__.watch,\n      onMounted: vue__WEBPACK_IMPORTED_MODULE_1__.onMounted,\n      get useStore() {\n        return vuex__WEBPACK_IMPORTED_MODULE_3__.useStore;\n      },\n      get useLibraryLoader() {\n        return _composables_libraryLoader__WEBPACK_IMPORTED_MODULE_2__.useLibraryLoader;\n      },\n      get useRouter() {\n        return vue_router__WEBPACK_IMPORTED_MODULE_4__.useRouter;\n      }\n    };\n    Object.defineProperty(__returned__, '__isScriptSetup', {\n      enumerable: false,\n      value: true\n    });\n    return __returned__;\n  }\n});\n\n//# sourceURL=webpack://fable-flow/./src/components/BookSelect.vue?./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use%5B0%5D!./node_modules/vue-loader/dist/index.js??ruleSet%5B0%5D.use%5B0%5D");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/ChapterInfo.vue?vue&type=script&setup=true&lang=js":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/ChapterInfo.vue?vue&type=script&setup=true&lang=js ***!
  \********************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.runtime.esm-bundler.js\");\n/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuex */ \"./node_modules/vuex/dist/vuex.esm-bundler.js\");\n/* harmony import */ var _composables_libraryLoader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/composables/libraryLoader */ \"./src/composables/libraryLoader.js\");\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  __name: 'ChapterInfo',\n  setup(__props, {\n    expose: __expose\n  }) {\n    __expose();\n    const store = (0,vuex__WEBPACK_IMPORTED_MODULE_2__.useStore)();\n    const {\n      getChapterFromBook\n    } = (0,_composables_libraryLoader__WEBPACK_IMPORTED_MODULE_1__.useLibraryLoader)();\n\n    // computed\n    const currentAuthor = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => store.getters.author);\n    const currentBook = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => store.getters.book);\n    const currentChapterIndex = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => store.getters.chapterIndex);\n    const currentChapter = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => getChapterFromBook(currentAuthor.value, currentBook.value, currentChapterIndex.value));\n    const __returned__ = {\n      store,\n      getChapterFromBook,\n      currentAuthor,\n      currentBook,\n      currentChapterIndex,\n      currentChapter,\n      computed: vue__WEBPACK_IMPORTED_MODULE_0__.computed,\n      get useStore() {\n        return vuex__WEBPACK_IMPORTED_MODULE_2__.useStore;\n      },\n      get useLibraryLoader() {\n        return _composables_libraryLoader__WEBPACK_IMPORTED_MODULE_1__.useLibraryLoader;\n      }\n    };\n    Object.defineProperty(__returned__, '__isScriptSetup', {\n      enumerable: false,\n      value: true\n    });\n    return __returned__;\n  }\n});\n\n//# sourceURL=webpack://fable-flow/./src/components/ChapterInfo.vue?./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use%5B0%5D!./node_modules/vue-loader/dist/index.js??ruleSet%5B0%5D.use%5B0%5D");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/BookSelectionView.vue?vue&type=script&setup=true&lang=js":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/BookSelectionView.vue?vue&type=script&setup=true&lang=js ***!
  \*********************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_AuthorSelect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/components/AuthorSelect */ \"./src/components/AuthorSelect.vue\");\n/* harmony import */ var _components_BookSelect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/BookSelect */ \"./src/components/BookSelect.vue\");\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  __name: 'BookSelectionView',\n  setup(__props, {\n    expose: __expose\n  }) {\n    __expose();\n    const __returned__ = {\n      get AuthorSelect() {\n        return _components_AuthorSelect__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\n      },\n      get BookSelect() {\n        return _components_BookSelect__WEBPACK_IMPORTED_MODULE_1__[\"default\"];\n      }\n    };\n    Object.defineProperty(__returned__, '__isScriptSetup', {\n      enumerable: false,\n      value: true\n    });\n    return __returned__;\n  }\n});\n\n//# sourceURL=webpack://fable-flow/./src/views/BookSelectionView.vue?./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use%5B0%5D!./node_modules/vue-loader/dist/index.js??ruleSet%5B0%5D.use%5B0%5D");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/ChapterPlayView.vue?vue&type=script&setup=true&lang=js":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/ChapterPlayView.vue?vue&type=script&setup=true&lang=js ***!
  \*******************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_ChapterInfo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/components/ChapterInfo */ \"./src/components/ChapterInfo.vue\");\n/* harmony import */ var _components_AudioPlayer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/AudioPlayer */ \"./src/components/AudioPlayer.vue\");\n/* harmony import */ var _components_BookInfo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/BookInfo */ \"./src/components/BookInfo.vue\");\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  __name: 'ChapterPlayView',\n  setup(__props, {\n    expose: __expose\n  }) {\n    __expose();\n\n    // @ is an alias to /src\n\n    const __returned__ = {\n      get ChapterInfo() {\n        return _components_ChapterInfo__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\n      },\n      get AudioPlayer() {\n        return _components_AudioPlayer__WEBPACK_IMPORTED_MODULE_1__[\"default\"];\n      },\n      get BookInfo() {\n        return _components_BookInfo__WEBPACK_IMPORTED_MODULE_2__[\"default\"];\n      }\n    };\n    Object.defineProperty(__returned__, '__isScriptSetup', {\n      enumerable: false,\n      value: true\n    });\n    return __returned__;\n  }\n});\n\n//# sourceURL=webpack://fable-flow/./src/views/ChapterPlayView.vue?./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use%5B0%5D!./node_modules/vue-loader/dist/index.js??ruleSet%5B0%5D.use%5B0%5D");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/App.vue?vue&type=template&id=7ba5bd90":
/*!******************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/App.vue?vue&type=template&id=7ba5bd90 ***!
  \******************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   render: function() { return /* binding */ render; }\n/* harmony export */ });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.runtime.esm-bundler.js\");\n\nconst _hoisted_1 = {\n  class: \"message-container\"\n};\nconst _hoisted_2 = [\"onClick\"];\nfunction render(_ctx, _cache, $props, $setup, $data, $options) {\n  const _component_router_view = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(\"router-view\");\n  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup[\"NavBar\"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_1, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($setup.messages, (message, msgIndex) => {\n    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(\"div\", {\n      key: msgIndex,\n      class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)([\"alert\", $setup.computeAlertClass(message.type)]),\n      onClick: $event => $setup.clearMessage(msgIndex)\n    }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(message.message), 11 /* TEXT, CLASS, PROPS */, _hoisted_2);\n  }), 128 /* KEYED_FRAGMENT */))]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_view, {\n    class: \"content\"\n  })], 64 /* STABLE_FRAGMENT */);\n}\n\n//# sourceURL=webpack://fable-flow/./src/App.vue?./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use%5B0%5D!./node_modules/vue-loader/dist/templateLoader.js??ruleSet%5B1%5D.rules%5B3%5D!./node_modules/vue-loader/dist/index.js??ruleSet%5B0%5D.use%5B0%5D");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/AudioPlayer.vue?vue&type=template&id=0eb2a4d7&scoped=true":
/*!*************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/AudioPlayer.vue?vue&type=template&id=0eb2a4d7&scoped=true ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   render: function() { return /* binding */ render; }\n/* harmony export */ });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.runtime.esm-bundler.js\");\n\nconst _hoisted_1 = {\n  class: \"audio-player\"\n};\nconst _hoisted_2 = {\n  controls: \"\",\n  ref: \"audioPlayer\"\n};\nconst _hoisted_3 = [\"src\"];\nconst _hoisted_4 = {\n  class: \"chapter-control-container\"\n};\nconst _hoisted_5 = {\n  class: \"custom-player-container\"\n};\nfunction render(_ctx, _cache, $props, $setup, $data, $options) {\n  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(\"div\", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"audio\", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"source\", {\n    src: $setup.chapterSrc\n  }, null, 8 /* PROPS */, _hoisted_3)], 512 /* NEED_PATCH */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"button\", {\n    class: \"btn-warning\",\n    onClick: $setup.startBook\n  }, \"Start book over\")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup[\"AudioPlayerPlayButton\"], {\n    playing: $setup.playing,\n    color: \"var(--primary)\",\n    onClickPlay: $setup.togglePlay\n  }, null, 8 /* PROPS */, [\"playing\"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup[\"AudioPlayerTimeline\"], {\n    \"percent-progress\": $setup.currentProgress,\n    onChangeProgress: $setup.changeProgress\n  }, null, 8 /* PROPS */, [\"percent-progress\"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup[\"AudioPlayerTimeview\"], {\n    duration: $setup.duration,\n    \"current-time\": $setup.currentTime\n  }, null, 8 /* PROPS */, [\"duration\", \"current-time\"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup[\"AudioPlayerRewindButton\"], {\n    color: \"var(--primary)\",\n    onClickRewind: _cache[0] || (_cache[0] = $event => $setup.trackTimeBack(10))\n  })]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"button\", {\n    class: \"btn-secondary\",\n    onClick: $setup.nextChapter\n  }, \"Next chapter\")])])]);\n}\n\n//# sourceURL=webpack://fable-flow/./src/components/AudioPlayer.vue?./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use%5B0%5D!./node_modules/vue-loader/dist/templateLoader.js??ruleSet%5B1%5D.rules%5B3%5D!./node_modules/vue-loader/dist/index.js??ruleSet%5B0%5D.use%5B0%5D");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/AudioPlayerPlayButton.vue?vue&type=template&id=ad89ba86":
/*!***********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/AudioPlayerPlayButton.vue?vue&type=template&id=ad89ba86 ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   render: function() { return /* binding */ render; }\n/* harmony export */ });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.runtime.esm-bundler.js\");\n\nconst _hoisted_1 = [\"aria-label\"];\nconst _hoisted_2 = {\n  id: \"play\",\n  xmlns: \"http://www.w3.org/2000/svg\",\n  x: \"0px\",\n  y: \"0px\",\n  viewBox: \"0 0 100 100\",\n  \"xml:space\": \"preserve\"\n};\nconst _hoisted_3 = [\"stroke\"];\nconst _hoisted_4 = [\"stroke\"];\nconst _hoisted_5 = [\"fill\"];\nconst _hoisted_6 = [\"fill\"];\nfunction render(_ctx, _cache, $props, $setup, $data, $options) {\n  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(\"div\", {\n    class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)($setup.divClass),\n    onClick: _cache[0] || (_cache[0] = $event => $setup.clickOnPlay()),\n    role: \"button\",\n    \"aria-label\": $props.playing ? 'Pause track' : 'Play track'\n  }, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(\"svg\", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"path\", {\n    class: \"play-border play-border-solid\",\n    fill: \"none\",\n    stroke: $props.color,\n    d: \"M49.9,2.5C23.6,2.8,2.1,24.4,2.5,50.4C2.9,76.5,24.7,98,50.3,97.5c26.4-0.6,47.4-21.8,47.2-47.7 C97.3,23.7,75.7,2.3,49.9,2.5\"\n  }, null, 8 /* PROPS */, _hoisted_3), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"path\", {\n    class: \"play-border play-border-dotted\",\n    fill: \"none\",\n    stroke: $props.color,\n    d: \"M49.9,2.5C23.6,2.8,2.1,24.4,2.5,50.4C2.9,76.5,24.7,98,50.3,97.5c26.4-0.6,47.4-21.8,47.2-47.7 C97.3,23.7,75.7,2.3,49.9,2.5\"\n  }, null, 8 /* PROPS */, _hoisted_4), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"path\", {\n    class: \"play-icon\",\n    fill: $props.color,\n    d: \"M38,69c-1,0.5-1.8,0-1.8-1.1V32.1c0-1.1,0.8-1.6,1.8-1.1l34,18c1,0.5,1,1.4,0,1.9L38,69z\"\n  }, null, 8 /* PROPS */, _hoisted_5), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"path\", {\n    class: \"pause-icon\",\n    fill: $props.color,\n    d: \"M37.5 21.875a3.125 3.125 0 0 1 3.125 3.125v50a3.125 3.125 0 0 1 -6.25 0V25a3.125 3.125 0 0 1 3.125 -3.125zm25 0a3.125 3.125 0 0 1 3.125 3.125v50a3.125 3.125 0 0 1 -6.25 0V25a3.125 3.125 0 0 1 3.125 -3.125z\"\n  }, null, 8 /* PROPS */, _hoisted_6)]))], 10 /* CLASS, PROPS */, _hoisted_1);\n}\n\n//# sourceURL=webpack://fable-flow/./src/components/AudioPlayerPlayButton.vue?./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use%5B0%5D!./node_modules/vue-loader/dist/templateLoader.js??ruleSet%5B1%5D.rules%5B3%5D!./node_modules/vue-loader/dist/index.js??ruleSet%5B0%5D.use%5B0%5D");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/AudioPlayerRewindButton.vue?vue&type=template&id=166a9bc4":
/*!*************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/AudioPlayerRewindButton.vue?vue&type=template&id=166a9bc4 ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   render: function() { return /* binding */ render; }\n/* harmony export */ });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.runtime.esm-bundler.js\");\n\nconst _hoisted_1 = {\n  id: \"rewind\",\n  xmlns: \"http://www.w3.org/2000/svg\",\n  x: \"0px\",\n  y: \"0px\",\n  viewBox: \"0 0 512 512\",\n  \"xml:space\": \"preserve\"\n};\nconst _hoisted_2 = [\"fill\"];\nconst _hoisted_3 = [\"fill\"];\nconst _hoisted_4 = [\"fill\"];\nfunction render(_ctx, _cache, $props, $setup, $data, $options) {\n  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(\"div\", {\n    class: \"rewind-button\",\n    onClick: _cache[0] || (_cache[0] = $event => $setup.clickOnRewind()),\n    role: \"button\",\n    \"aria-label\": \"Rewind track\"\n  }, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(\"svg\", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"path\", {\n    class: \"rewind-border\",\n    fill: $props.color,\n    transform: \"translate(294.3125,42.1875)\",\n    d: \"M0 0 C3.9323173 2.65202795 6.18648186 5.30944559 7.6875 9.8125 C8.18891155 14.58823948 8.28755298 18.56238963 6.1875 22.9375 C3.39784526 26.14560295 0.46485501 29.13881691 -2.60546875 32.078125 C-4.3925373 33.71534106 -4.3925373 33.71534106 -5.3125 35.8125 C-4.30304321 35.87618774 -4.30304321 35.87618774 -3.27319336 35.94116211 C3.43348713 36.44548956 9.65624623 37.55734835 16.125 39.375 C17.54171997 39.76981567 17.54171997 39.76981567 18.98706055 40.17260742 C48.20303374 48.5872171 78.13691957 64.01276119 99.25 86.33984375 C100.87130756 88.05722558 100.87130756 88.05722558 103.6875 90.25 C107.46037575 93.4726647 110.52259626 97.00049698 113.6875 100.8125 C114.11836914 101.32039063 114.54923828 101.82828125 114.99316406 102.3515625 C148.66178099 142.1522643 164.98801867 194.12431188 161.46923828 246.03222656 C157.70522811 289.30842083 141.20369088 329.02983141 112.6875 361.8125 C112.18750488 362.39225586 111.68750977 362.97201172 111.17236328 363.56933594 C81.74366789 397.43222645 39.73416298 419.4597025 -4.3125 426.8125 C-5.58738281 427.03679687 -6.86226562 427.26109375 -8.17578125 427.4921875 C-59.41046454 435.01004053 -112.70647676 421.36373081 -154.3125 390.8125 C-158.1083124 387.95982909 -161.74232538 384.94282911 -165.3125 381.8125 C-166.14910156 381.08546875 -166.98570312 380.3584375 -167.84765625 379.609375 C-183.18213614 366.05246233 -195.47535333 351.11625683 -206.3125 333.8125 C-206.69116211 333.21308594 -207.06982422 332.61367188 -207.45996094 331.99609375 C-219.26305646 313.03743555 -226.70376017 291.57665187 -231.3125 269.8125 C-231.48894043 269.00055176 -231.66538086 268.18860352 -231.84716797 267.35205078 C-236.78687192 243.49558165 -236.51703374 215.58594972 -231.3125 191.8125 C-231.11382324 190.89791016 -230.91514648 189.98332031 -230.71044922 189.04101562 C-222.60061042 152.95678904 -205.33905654 120.93120693 -180.3125 93.8125 C-179.61108887 93.05114746 -179.61108887 93.05114746 -178.89550781 92.27441406 C-173.6426276 86.64335672 -168.02166641 81.59429491 -162 76.8125 C-161.42515869 76.35520508 -160.85031738 75.89791016 -160.25805664 75.42675781 C-154.84304777 71.24046997 -150.18039961 68.21496745 -143.26171875 68.53125 C-138.18904793 69.26317845 -134.38988307 71.90219846 -131.296875 75.94921875 C-128.97189998 80.35006431 -128.69937541 85.14589465 -129.8046875 89.953125 C-132.03053029 95.33754469 -136.03105669 98.31736393 -140.59375 101.74609375 C-145.08345729 105.15852932 -149.18338571 108.97783333 -153.3125 112.8125 C-153.95574219 113.39 -154.59898437 113.9675 -155.26171875 114.5625 C-181.04797457 138.78103796 -196.91853739 175.06953985 -201.3125 209.8125 C-201.42335937 210.6271875 -201.53421875 211.441875 -201.6484375 212.28125 C-205.62276126 247.08343643 -197.88141364 281.22197107 -181.3125 311.8125 C-180.97379883 312.4401123 -180.63509766 313.06772461 -180.28613281 313.71435547 C-160.38871664 350.00399247 -124.95716992 378.03781091 -85.31005859 389.6953125 C-38.72347002 402.55277657 6.9928526 397.11445072 49.15087891 373.29833984 C54.99318441 369.87617707 60.4172388 366.05581772 65.6875 361.8125 C66.55012451 361.12486572 66.55012451 361.12486572 67.43017578 360.42333984 C101.85357454 332.7139573 123.22413658 292.60008993 128.6875 248.8125 C130.88471415 198.27657464 118.0675561 153.78827952 83.5625 115.8125 C78.36615118 110.25585746 72.77284726 105.38677588 66.6875 100.8125 C65.90318604 100.21574463 65.90318604 100.21574463 65.10302734 99.60693359 C44.0336965 83.66341575 21.25752183 74.12052301 -4.3125 67.8125 C-1.27623145 71.65978068 1.90487383 75.3194168 5.19921875 78.9453125 C8.61099507 83.22570378 8.25601046 88.6090501 7.6875 93.8125 C6.42402588 97.51365518 4.48780847 100.12652131 1.5 102.6875 C-3.60141859 104.72806744 -8.05692203 105.50717549 -13.3684082 103.87133789 C-18.864441 101.42841875 -22.73900005 96.91683182 -26.89453125 92.69140625 C-28.23761604 91.34694679 -28.23761604 91.34694679 -29.60783386 89.97532654 C-31.49276313 88.08437023 -33.37343837 86.19015109 -35.24780273 84.28881836 C-37.64613905 81.85640666 -40.05752916 79.43746704 -42.47371387 77.02279758 C-44.78626496 74.70957127 -47.09027223 72.38788835 -49.39453125 70.06640625 C-50.25907425 69.1996376 -51.12361725 68.33286896 -52.01435852 67.43983459 C-52.81246445 66.62896896 -53.61057037 65.81810333 -54.43286133 64.98266602 C-55.48707024 63.91702171 -55.48707024 63.91702171 -56.56257629 62.82984924 C-59.57001149 59.36281403 -60.61557621 56.56716037 -60.6875 52 C-60.71585938 51.18917969 -60.74421875 50.37835938 -60.7734375 49.54296875 C-59.44114049 41.65080254 -53.24965982 36.3095787 -47.8203125 30.921875 C-46.99675262 30.09544495 -46.17319275 29.26901489 -45.32467651 28.4175415 C-43.5884635 26.67929422 -41.84848506 24.94480075 -40.10498047 23.21386719 C-37.44275658 20.56772483 -34.79693515 17.90593905 -32.15234375 15.2421875 C-30.45929455 13.55112044 -28.76531512 11.86098408 -27.0703125 10.171875 C-25.88878098 8.98123444 -25.88878098 8.98123444 -24.68338013 7.76654053 C-17.2205209 0.39810206 -10.43755754 -3.74176591 0 0 Z \"\n  }, null, 8 /* PROPS */, _hoisted_2), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"path\", {\n    class: \"rewind-icon rewind-icon-1\",\n    fill: $props.color,\n    transform: \"translate(200.375,171)\",\n    d: \"M0 0 C4.52460109 3.44731512 8.80303354 7.53410061 10.625 13 C10.72381789 15.32196798 10.76004615 17.64673118 10.76544189 19.97079468 C10.76841302 20.68445179 10.77138414 21.39810889 10.7744453 22.13339198 C10.78313458 24.53083432 10.78464073 26.92822674 10.78613281 29.32568359 C10.79076078 31.0421306 10.79578541 32.75857658 10.80117798 34.47502136 C10.814305 39.14238556 10.82074739 43.80973538 10.82518864 48.47711515 C10.82811854 51.39200885 10.83222316 54.3068986 10.83669281 57.22179031 C10.85036779 66.33874696 10.86003476 75.45569461 10.8638947 84.5726608 C10.86837728 95.10281164 10.88593444 105.6328328 10.9148953 116.1629442 C10.93649624 124.29889931 10.94659811 132.43481789 10.94793582 140.57080138 C10.94898488 145.43183794 10.95491421 150.29275259 10.97275543 155.153759 C10.98920895 159.72560068 10.99140489 164.29722844 10.98261642 168.86908913 C10.98184462 170.547282 10.98620761 172.22548624 10.99607468 173.90365028 C11.00875418 176.19443546 11.00293971 178.4844584 10.99249268 180.77523804 C10.99469252 182.69824517 10.99469252 182.69824517 10.9969368 184.66010094 C10.43808144 189.67848171 8.4254312 192.16145303 5 195.75 C1.21320277 198.70257705 -2.635521 199.40899057 -7.375 199 C-12.71234929 197.39032323 -16.34161327 194.7320833 -19.375 190 C-20.43414546 186.82256362 -20.49820043 184.58608213 -20.49525452 181.24836731 C-20.49662918 180.04943344 -20.49800385 178.85049957 -20.49942017 177.61523438 C-20.49402725 175.63970581 -20.49402725 175.63970581 -20.48852539 173.62426758 C-20.48824335 172.2248281 -20.48840159 170.82538848 -20.4889679 169.4259491 C-20.48925521 165.62458216 -20.48336915 161.82324668 -20.47639394 158.02188706 C-20.4701494 154.05004933 -20.46955573 150.0782109 -20.46836853 146.10636902 C-20.46525847 138.58411051 -20.45704944 131.0618665 -20.44701904 123.53961438 C-20.43584783 114.97622727 -20.43034491 106.41283947 -20.42532361 97.84944689 C-20.41486657 80.23295637 -20.3972734 62.61647935 -20.375 45 C-20.92567139 45.48283447 -21.47634277 45.96566895 -22.04370117 46.46313477 C-22.76533447 47.09533936 -23.48696777 47.72754395 -24.23046875 48.37890625 C-24.94614014 49.00611572 -25.66181152 49.6333252 -26.39916992 50.27954102 C-31.48408288 54.7072417 -35.01179988 55.55499476 -41.71875 55.34765625 C-46.85748313 54.67508677 -49.39295599 52.08541707 -52.75 48.375 C-54.91261618 43.88341255 -55.35324978 39.89844192 -54.375 35 C-51.66685939 29.23940751 -48.15378256 25.51204518 -43.4375 21.3125 C-42.09624026 20.09387536 -40.75509665 18.87512289 -39.4140625 17.65625 C-38.74020508 17.04910156 -38.06634766 16.44195312 -37.37207031 15.81640625 C-35.46107402 14.07828737 -33.58129248 12.31292875 -31.7109375 10.53125 C-31.13722412 9.98815186 -30.56351074 9.44505371 -29.97241211 8.88549805 C-28.89867345 7.86798103 -27.82888678 6.84627032 -26.76391602 5.81958008 C-18.93681227 -1.51905274 -10.27029952 -3.04305171 0 0 Z \"\n  }, null, 8 /* PROPS */, _hoisted_3), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"path\", {\n    class: \"rewind-icon rewind-icon-2\",\n    fill: $props.color,\n    transform: \"translate(335.84375,188.00390625)\",\n    d: \"M0 0 C11.45628394 10.6053643 18.43321768 22.39796314 19.2750721 38.23079109 C19.47992811 44.82406988 19.46202699 51.41982909 19.45703125 58.015625 C19.46092559 60.16354962 19.46526176 62.31147348 19.47001648 64.45939636 C19.4774509 68.94862368 19.47720782 73.43777232 19.47192383 77.92700195 C19.46613577 83.64591011 19.483058 89.3644937 19.5062685 95.08334827 C19.5210864 99.51635076 19.52186658 103.94927655 19.51875877 108.38229942 C19.51926803 110.48916961 19.52443048 112.59604455 19.53457069 114.7028904 C19.61828644 134.52808728 18.24431896 151.49646884 4.21875 166.80859375 C-6.27183616 176.66513349 -19.15075121 181.9394571 -33.53125 182.015625 C-48.38029808 181.46177946 -62.45559772 175.92452818 -72.84375 164.99609375 C-82.49980626 153.54647196 -85.98691521 140.82259631 -86.00488281 126.14208984 C-86.01233017 124.67739258 -86.01233017 124.67739258 -86.01992798 123.18310547 C-86.03449725 119.9619068 -86.0413437 116.74075742 -86.046875 113.51953125 C-86.05263176 111.26998901 -86.05838942 109.02044678 -86.06414795 106.77090454 C-86.07464376 102.05511243 -86.08049539 97.3393373 -86.08398438 92.62353516 C-86.08945908 86.60500495 -86.11347144 80.58670211 -86.14195633 74.56824303 C-86.16065813 69.92000695 -86.16579237 65.27182474 -86.16732025 60.62355423 C-86.17033145 58.40617254 -86.17830764 56.18879145 -86.19150543 53.97144699 C-86.29774877 34.74584666 -84.79415229 17.60577781 -70.84375 2.99609375 C-50.90084568 -14.4578857 -21.01968341 -17.70679852 0 0 Z M-50.84375 28.24609375 C-54.75923274 34.88513239 -55.14185055 42.41441332 -55.10253906 49.953125 C-55.1060437 50.79829681 -55.10954834 51.64346863 -55.11315918 52.51425171 C-55.1218868 55.27911854 -55.11615929 58.04372479 -55.109375 60.80859375 C-55.11072423 62.74715219 -55.11266691 64.68571029 -55.11517334 66.62426758 C-55.11811246 70.67565145 -55.11386606 74.72694678 -55.10449219 78.77832031 C-55.09309843 83.95291697 -55.0996644 89.12730609 -55.11163712 94.30189514 C-55.1188885 98.30148868 -55.11655276 102.3010336 -55.11138153 106.30062866 C-55.1100541 108.20787582 -55.11166075 110.1151275 -55.11634064 112.02236938 C-55.12145999 114.6947182 -55.11362028 117.36673798 -55.10253906 120.0390625 C-55.10658752 120.8154306 -55.11063599 121.59179871 -55.11480713 122.39169312 C-55.04473322 131.58401374 -53.55965557 139.36993302 -46.84375 145.99609375 C-41.94956032 149.797926 -36.77869969 150.76360547 -30.65625 150.5 C-24.95686937 149.47886097 -19.94137217 146.95903007 -16.54920387 142.16751957 C-13.01462264 136.28035009 -12.11942315 131.7248748 -12.19677734 124.92163086 C-12.18801575 123.95780991 -12.17925415 122.99398895 -12.17022705 122.0009613 C-12.14836895 118.84131751 -12.16273671 115.68309345 -12.1796875 112.5234375 C-12.17631575 110.31343825 -12.17146015 108.10344081 -12.16519165 105.89344788 C-12.15783893 101.27277893 -12.16847563 96.65259481 -12.19189453 92.03198242 C-12.22039749 86.12158898 -12.20395764 80.2123301 -12.17403221 74.30197811 C-12.15593053 69.74218761 -12.16173027 65.1826644 -12.17467117 60.62286568 C-12.17799635 58.44405545 -12.17394952 56.26522061 -12.16227341 54.08643913 C-12.14951593 51.03736306 -12.16901052 47.99010352 -12.19677734 44.94116211 C-12.18665619 44.04898987 -12.17653503 43.15681763 -12.16610718 42.23760986 C-12.28302921 35.27653165 -14.47260122 30.47930352 -19.32169151 25.4690237 C-24.29280579 21.06662137 -28.82401901 19.44621362 -35.37109375 19.62109375 C-41.41505234 20.53771306 -47.02325729 23.42553089 -50.84375 28.24609375 Z \"\n  }, null, 8 /* PROPS */, _hoisted_4)]))]);\n}\n\n//# sourceURL=webpack://fable-flow/./src/components/AudioPlayerRewindButton.vue?./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use%5B0%5D!./node_modules/vue-loader/dist/templateLoader.js??ruleSet%5B1%5D.rules%5B3%5D!./node_modules/vue-loader/dist/index.js??ruleSet%5B0%5D.use%5B0%5D");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/AudioPlayerTimeline.vue?vue&type=template&id=5af3d490":
/*!*********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/AudioPlayerTimeline.vue?vue&type=template&id=5af3d490 ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   render: function() { return /* binding */ render; }\n/* harmony export */ });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.runtime.esm-bundler.js\");\n\nconst _hoisted_1 = [\"value\"];\nfunction render(_ctx, _cache, $props, $setup, $data, $options) {\n  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(\"div\", {\n    class: \"custom-player-timeline\",\n    style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)($setup.cssVars)\n  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"input\", {\n    type: \"range\",\n    max: \"100\",\n    value: $props.percentProgress,\n    onChange: $setup.changeTime,\n    \"aria-label\": \"Player timeline\"\n  }, null, 40 /* PROPS, NEED_HYDRATION */, _hoisted_1)], 4 /* STYLE */);\n}\n\n//# sourceURL=webpack://fable-flow/./src/components/AudioPlayerTimeline.vue?./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use%5B0%5D!./node_modules/vue-loader/dist/templateLoader.js??ruleSet%5B1%5D.rules%5B3%5D!./node_modules/vue-loader/dist/index.js??ruleSet%5B0%5D.use%5B0%5D");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/AudioPlayerTimeview.vue?vue&type=template&id=5a18402e":
/*!*********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/AudioPlayerTimeview.vue?vue&type=template&id=5a18402e ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   render: function() { return /* binding */ render; }\n/* harmony export */ });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.runtime.esm-bundler.js\");\n\nconst _hoisted_1 = {\n  class: \"custom-player-time\"\n};\nconst _hoisted_2 = {\n  class: \"custom-player-current-time\"\n};\nconst _hoisted_3 = {\n  class: \"custom-player-duration\"\n};\nfunction render(_ctx, _cache, $props, $setup, $data, $options) {\n  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(\"div\", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"span\", _hoisted_2, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.getDisplayTime($props.currentTime)), 1 /* TEXT */), _cache[0] || (_cache[0] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(\" / \")), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"span\", _hoisted_3, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.getDisplayTime($props.duration)), 1 /* TEXT */)]);\n}\n\n//# sourceURL=webpack://fable-flow/./src/components/AudioPlayerTimeview.vue?./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use%5B0%5D!./node_modules/vue-loader/dist/templateLoader.js??ruleSet%5B1%5D.rules%5B3%5D!./node_modules/vue-loader/dist/index.js??ruleSet%5B0%5D.use%5B0%5D");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/AuthorSelect.vue?vue&type=template&id=521a91d2":
/*!**************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/AuthorSelect.vue?vue&type=template&id=521a91d2 ***!
  \**************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   render: function() { return /* binding */ render; }\n/* harmony export */ });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.runtime.esm-bundler.js\");\n\nconst _hoisted_1 = [\"value\"];\nfunction render(_ctx, _cache, $props, $setup, $data, $options) {\n  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(\"div\", null, [_cache[2] || (_cache[2] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"label\", {\n    for: \"authorSelect\"\n  }, \"Author:\", -1 /* HOISTED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"select\", {\n    id: \"authorSelect\",\n    \"onUpdate:modelValue\": _cache[0] || (_cache[0] = $event => $setup.selectedAuthor = $event),\n    class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)($setup.selectedAuthor ? '' : 'empty-select')\n  }, [_cache[1] || (_cache[1] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"option\", {\n    value: \"\",\n    class: \"placeholder\",\n    disabled: \"\",\n    selected: \"\",\n    hidden: \"\"\n  }, \"Select author...\", -1 /* HOISTED */)), ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($setup.authors, author => {\n    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(\"option\", {\n      key: author,\n      value: author\n    }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(author), 9 /* TEXT, PROPS */, _hoisted_1);\n  }), 128 /* KEYED_FRAGMENT */))], 2 /* CLASS */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelSelect, $setup.selectedAuthor]])]);\n}\n\n//# sourceURL=webpack://fable-flow/./src/components/AuthorSelect.vue?./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use%5B0%5D!./node_modules/vue-loader/dist/templateLoader.js??ruleSet%5B1%5D.rules%5B3%5D!./node_modules/vue-loader/dist/index.js??ruleSet%5B0%5D.use%5B0%5D");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/BookInfo.vue?vue&type=template&id=c839b832":
/*!**********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/BookInfo.vue?vue&type=template&id=c839b832 ***!
  \**********************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   render: function() { return /* binding */ render; }\n/* harmony export */ });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.runtime.esm-bundler.js\");\n\nfunction render(_ctx, _cache, $props, $setup, $data, $options) {\n  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(\"div\", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"p\", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.currentAuthor) + \": \" + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.currentBook) + \" (\" + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.chapterCount) + \" chapters) \", 1 /* TEXT */)]);\n}\n\n//# sourceURL=webpack://fable-flow/./src/components/BookInfo.vue?./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use%5B0%5D!./node_modules/vue-loader/dist/templateLoader.js??ruleSet%5B1%5D.rules%5B3%5D!./node_modules/vue-loader/dist/index.js??ruleSet%5B0%5D.use%5B0%5D");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/BookSelect.vue?vue&type=template&id=3c9db8f5":
/*!************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/BookSelect.vue?vue&type=template&id=3c9db8f5 ***!
  \************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   render: function() { return /* binding */ render; }\n/* harmony export */ });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.runtime.esm-bundler.js\");\n\nconst _hoisted_1 = [\"value\"];\nfunction render(_ctx, _cache, $props, $setup, $data, $options) {\n  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(\"div\", null, [_cache[2] || (_cache[2] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"label\", {\n    for: \"bookSelect\"\n  }, \"Book:\", -1 /* HOISTED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"select\", {\n    id: \"bookSelect\",\n    \"onUpdate:modelValue\": _cache[0] || (_cache[0] = $event => $setup.selectedBook = $event),\n    class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)($setup.selectedBook ? '' : 'empty-select')\n  }, [_cache[1] || (_cache[1] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"option\", {\n    value: \"\",\n    class: \"placeholder\",\n    disabled: \"\",\n    selected: \"\",\n    hidden: \"\"\n  }, \"Select book...\", -1 /* HOISTED */)), ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($setup.books, book => {\n    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(\"option\", {\n      key: book,\n      value: book\n    }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(book), 9 /* TEXT, PROPS */, _hoisted_1);\n  }), 128 /* KEYED_FRAGMENT */))], 2 /* CLASS */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelSelect, $setup.selectedBook]])]);\n}\n\n//# sourceURL=webpack://fable-flow/./src/components/BookSelect.vue?./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use%5B0%5D!./node_modules/vue-loader/dist/templateLoader.js??ruleSet%5B1%5D.rules%5B3%5D!./node_modules/vue-loader/dist/index.js??ruleSet%5B0%5D.use%5B0%5D");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/ChapterInfo.vue?vue&type=template&id=1f1adf1b":
/*!*************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/ChapterInfo.vue?vue&type=template&id=1f1adf1b ***!
  \*************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   render: function() { return /* binding */ render; }\n/* harmony export */ });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.runtime.esm-bundler.js\");\n\nfunction render(_ctx, _cache, $props, $setup, $data, $options) {\n  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(\"div\", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"p\", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.currentChapter ? $setup.currentChapter.name : ''), 1 /* TEXT */)]);\n}\n\n//# sourceURL=webpack://fable-flow/./src/components/ChapterInfo.vue?./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use%5B0%5D!./node_modules/vue-loader/dist/templateLoader.js??ruleSet%5B1%5D.rules%5B3%5D!./node_modules/vue-loader/dist/index.js??ruleSet%5B0%5D.use%5B0%5D");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/NavBar.vue?vue&type=template&id=4295d220":
/*!********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/NavBar.vue?vue&type=template&id=4295d220 ***!
  \********************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   render: function() { return /* binding */ render; }\n/* harmony export */ });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.runtime.esm-bundler.js\");\n\nconst _hoisted_1 = {\n  class: \"nav-item\"\n};\nconst _hoisted_2 = {\n  class: \"nav-item\",\n  \"aria-label\": \"Navigate to chapter page\"\n};\nconst _hoisted_3 = {\n  class: \"nav-item\",\n  \"aria-label\": \"Navigate to settings\"\n};\nfunction render(_ctx, _cache) {\n  const _component_router_link = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(\"router-link\");\n  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(\"nav\", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_link, {\n    to: \"/book\",\n    \"aria-label\": \"Navigate to book selection\"\n  }, {\n    default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => _cache[0] || (_cache[0] = [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(\"Book\")])),\n    _: 1 /* STABLE */\n  })]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_link, {\n    to: \"/\"\n  }, {\n    default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => _cache[1] || (_cache[1] = [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(\"Chapter\")])),\n    _: 1 /* STABLE */\n  })]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_link, {\n    to: \"/settings\"\n  }, {\n    default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => _cache[2] || (_cache[2] = [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(\"Settings\")])),\n    _: 1 /* STABLE */\n  })])]);\n}\n\n//# sourceURL=webpack://fable-flow/./src/components/NavBar.vue?./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use%5B0%5D!./node_modules/vue-loader/dist/templateLoader.js??ruleSet%5B1%5D.rules%5B3%5D!./node_modules/vue-loader/dist/index.js??ruleSet%5B0%5D.use%5B0%5D");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/BookSelectionView.vue?vue&type=template&id=ae2571c4":
/*!**************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/BookSelectionView.vue?vue&type=template&id=ae2571c4 ***!
  \**************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   render: function() { return /* binding */ render; }\n/* harmony export */ });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.runtime.esm-bundler.js\");\n\nfunction render(_ctx, _cache, $props, $setup, $data, $options) {\n  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(\"div\", null, [_cache[0] || (_cache[0] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"h1\", null, \"Book selection\", -1 /* HOISTED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup[\"AuthorSelect\"], {\n    class: \"selection selection-author\"\n  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup[\"BookSelect\"], {\n    class: \"selection selection-book\"\n  })]);\n}\n\n//# sourceURL=webpack://fable-flow/./src/views/BookSelectionView.vue?./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use%5B0%5D!./node_modules/vue-loader/dist/templateLoader.js??ruleSet%5B1%5D.rules%5B3%5D!./node_modules/vue-loader/dist/index.js??ruleSet%5B0%5D.use%5B0%5D");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/ChapterPlayView.vue?vue&type=template&id=e9ee0dc8":
/*!************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/ChapterPlayView.vue?vue&type=template&id=e9ee0dc8 ***!
  \************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   render: function() { return /* binding */ render; }\n/* harmony export */ });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.runtime.esm-bundler.js\");\n\nfunction render(_ctx, _cache, $props, $setup, $data, $options) {\n  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(\"div\", null, [_cache[0] || (_cache[0] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"h1\", null, \"Chapter play\", -1 /* HOISTED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup[\"BookInfo\"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup[\"AudioPlayer\"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup[\"ChapterInfo\"])]);\n}\n\n//# sourceURL=webpack://fable-flow/./src/views/ChapterPlayView.vue?./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use%5B0%5D!./node_modules/vue-loader/dist/templateLoader.js??ruleSet%5B1%5D.rules%5B3%5D!./node_modules/vue-loader/dist/index.js??ruleSet%5B0%5D.use%5B0%5D");

/***/ }),

/***/ "./src/composables/displayFilters.js":
/*!*******************************************!*\
  !*** ./src/composables/displayFilters.js ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   useDisplayFilters: function() { return /* binding */ useDisplayFilters; }\n/* harmony export */ });\nfunction useDisplayFilters() {\n  const capitalize = value => {\n    if (!value) return '';\n    value = value.toString();\n    return value.charAt(0).toUpperCase() + value.slice(1);\n  };\n  const time = timeInSecond => {\n    let partHours = 0;\n    let partMinutes = 0;\n    let timeToWork = 0;\n    let partSeconds = Math.floor(timeInSecond);\n    if (partSeconds >= 60) {\n      timeToWork = partSeconds / 60;\n      partMinutes = Math.floor(timeToWork);\n      partSeconds = Math.round((timeToWork - partMinutes) * 60);\n    }\n    if (partMinutes >= 60) {\n      timeToWork = partMinutes / 60;\n      partHours = Math.floor(timeToWork);\n      partMinutes = Math.round((timeToWork - partHours) * 60);\n    }\n    if (partSeconds < 10) partSeconds = '0' + partSeconds;\n    if (partMinutes < 10) partMinutes = '0' + partMinutes;\n    let displayTime = partMinutes + ':' + partSeconds;\n    if (partHours > 0) {\n      displayTime = partHours + ':' + displayTime;\n    }\n    return displayTime;\n  };\n  return {\n    capitalize,\n    time\n  };\n}\n\n//# sourceURL=webpack://fable-flow/./src/composables/displayFilters.js?");

/***/ }),

/***/ "./src/composables/flashMessages.js":
/*!******************************************!*\
  !*** ./src/composables/flashMessages.js ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   useFlashMessages: function() { return /* binding */ useFlashMessages; }\n/* harmony export */ });\n/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.push.js */ \"./node_modules/core-js/modules/es.array.push.js\");\n/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.runtime.esm-bundler.js\");\n\n\nconst flashMessages = (0,vue__WEBPACK_IMPORTED_MODULE_1__.ref)([]);\nfunction useFlashMessages() {\n  const addMessage = messageObject => {\n    flashMessages.value.push(messageObject);\n  };\n  const addSuccessMessage = (content, messageTitle = '', toPersistOnce = false) => {\n    addMessage({\n      type: 'success',\n      message: content,\n      title: messageTitle,\n      persistOnce: toPersistOnce\n    });\n  };\n  const addInfoMessage = (content, messageTitle = '', toPersistOnce = false) => {\n    addMessage({\n      type: 'info',\n      message: content,\n      title: messageTitle,\n      persistOnce: toPersistOnce\n    });\n  };\n  const addWarningMessage = (content, messageTitle = '', toPersistOnce = false) => {\n    addMessage({\n      type: 'warning',\n      message: content,\n      title: messageTitle,\n      persistOnce: toPersistOnce\n    });\n  };\n  const addErrorMessage = (content, messageTitle = '', toPersistOnce = false) => {\n    addMessage({\n      type: 'error',\n      message: content,\n      title: messageTitle,\n      persistOnce: toPersistOnce\n    });\n  };\n  const clearMessage = index => {\n    flashMessages.value.splice(index, 1);\n  };\n  const clearAllMessages = () => {\n    const persisted = [];\n    for (const message of flashMessages.value) {\n      if (message.persistOnce) {\n        message.persistOnce = false;\n        persisted.push(message);\n      }\n    }\n    flashMessages.value = persisted;\n  };\n  return {\n    flashMessages,\n    addSuccessMessage,\n    addInfoMessage,\n    addWarningMessage,\n    addErrorMessage,\n    clearMessage,\n    clearAllMessages\n  };\n}\n\n//# sourceURL=webpack://fable-flow/./src/composables/flashMessages.js?");

/***/ }),

/***/ "./src/composables/libraryLoader.js":
/*!******************************************!*\
  !*** ./src/composables/libraryLoader.js ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   useLibraryLoader: function() { return /* binding */ useLibraryLoader; }\n/* harmony export */ });\n/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.push.js */ \"./node_modules/core-js/modules/es.array.push.js\");\n/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.runtime.esm-bundler.js\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/constants */ \"./src/constants.js\");\n/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuex */ \"./node_modules/vuex/dist/vuex.esm-bundler.js\");\n/* harmony import */ var _composables_flashMessages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/composables/flashMessages */ \"./src/composables/flashMessages.js\");\n/* harmony import */ var _composables_storageInstance__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/composables/storageInstance */ \"./src/composables/storageInstance.js\");\n\n\n\n\n\n\nconst libraryHandle = (0,vue__WEBPACK_IMPORTED_MODULE_1__.ref)(null);\nconst tracks = (0,vue__WEBPACK_IMPORTED_MODULE_1__.ref)({});\nfunction useLibraryLoader(store) {\n  let isLoading = false;\n  if (!store) store = (0,vuex__WEBPACK_IMPORTED_MODULE_5__.useStore)();\n  const {\n    addErrorMessage\n  } = (0,_composables_flashMessages__WEBPACK_IMPORTED_MODULE_3__.useFlashMessages)();\n  const getLibraryHandle = async () => {\n    if (libraryHandle.value) {\n      return libraryHandle;\n    }\n    // try to retrieve what was stored\n    libraryHandle.value = await (0,_composables_storageInstance__WEBPACK_IMPORTED_MODULE_4__.useStorageInstance)().getLibraryHandle();\n    if (libraryHandle.value) {\n      // if something was stored, reload library\n      await loadLibrary(libraryHandle.value);\n    }\n    return libraryHandle.value;\n  };\n  const listAuthors = async () => {\n    const list = [];\n    if (!libraryHandle.value) return list;\n    try {\n      for await (const [, entry] of libraryHandle.value.entries()) {\n        if (entry.kind === 'directory') {\n          list.push(entry);\n        }\n      }\n    } catch (e) {\n      addErrorMessage('An error occurred on authors listing');\n      console.error(e);\n    }\n    return list;\n  };\n  const listBooksFromAuthor = async authorHandle => {\n    const list = [];\n    if (!authorHandle) return list;\n    try {\n      for await (const [, entry] of authorHandle.entries()) {\n        if (entry.kind === 'directory') {\n          list.push(entry);\n        }\n      }\n    } catch (e) {\n      addErrorMessage('An error occurred on books listing for author ' + authorHandle.name);\n      console.error(e);\n    }\n    return list;\n  };\n  const listChaptersFromBook = async bookHandle => {\n    const list = [];\n    if (!bookHandle) return list;\n    try {\n      for await (const [name, entry] of bookHandle.entries()) {\n        if (entry.kind === 'file') {\n          // get file extension\n          const extension = name.slice(name.lastIndexOf('.'));\n          if (_constants__WEBPACK_IMPORTED_MODULE_2__.FILE_EXTENSIONS_SUPPORTED.includes(extension)) {\n            list.push(entry);\n          } else {\n            console.log('File extension not supported for file ' + bookHandle.name + '/' + name);\n          }\n        }\n      }\n    } catch (e) {\n      addErrorMessage('An error occurred on chapters listing for book ' + bookHandle.name);\n      console.error(e);\n    }\n    return list;\n  };\n  const loadLibrary = async mainHandle => {\n    isLoading = true;\n    libraryHandle.value = mainHandle;\n    tracks.value = {};\n    const authors = await listAuthors();\n    for (const authorHandle of authors) {\n      const authorBooks = {};\n      const books = await listBooksFromAuthor(authorHandle);\n      for (const bookHandle of books) {\n        authorBooks[bookHandle.name] = await listChaptersFromBook(bookHandle);\n      }\n      tracks.value[authorHandle.name] = authorBooks;\n    }\n    await store.dispatch('selectLibrary', mainHandle.name);\n    await (0,_composables_storageInstance__WEBPACK_IMPORTED_MODULE_4__.useStorageInstance)().setLibraryHandle(mainHandle);\n    isLoading = false;\n  };\n  const getAuthorsList = () => {\n    return Object.keys(tracks.value);\n  };\n  const getBooksFromAuthor = author => {\n    if (!tracks.value[author]) return [];\n    return Object.keys(tracks.value[author]);\n  };\n  const getChaptersFromBook = (author, book) => {\n    if (!tracks.value[author]) return [];\n    if (!tracks.value[author][book]) return [];\n    return tracks.value[author][book];\n  };\n  const getChapterFromBook = (author, book, index) => {\n    const chapters = getChaptersFromBook(author, book);\n    if (!chapters[index]) return null;\n    return chapters[index];\n  };\n  return {\n    libraryHandle,\n    getLibraryHandle,\n    tracks,\n    loadLibrary,\n    getAuthorsList,\n    getBooksFromAuthor,\n    getChaptersFromBook,\n    getChapterFromBook,\n    isLoading\n  };\n}\n\n//# sourceURL=webpack://fable-flow/./src/composables/libraryLoader.js?");

/***/ }),

/***/ "./src/composables/storageInstance.js":
/*!********************************************!*\
  !*** ./src/composables/storageInstance.js ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   useStorageInstance: function() { return /* binding */ useStorageInstance; }\n/* harmony export */ });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.runtime.esm-bundler.js\");\n/* harmony import */ var localforage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! localforage */ \"./node_modules/localforage/dist/localforage.js\");\n/* harmony import */ var localforage__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(localforage__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/constants */ \"./src/constants.js\");\n\n\n\nfunction useStorageInstance() {\n  const storageInstance = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(null);\n  const getStorageInstance = () => {\n    if (!storageInstance.value) {\n      storageInstance.value = localforage__WEBPACK_IMPORTED_MODULE_1___default().createInstance({\n        name: _constants__WEBPACK_IMPORTED_MODULE_2__.PERSISTENCE_KEY,\n        storeName: 'application-data'\n      });\n    }\n    return storageInstance.value;\n  };\n  const getLibraryHandle = async () => {\n    const instance = getStorageInstance();\n    return await instance.getItem('libraryHandle');\n  };\n  const setLibraryHandle = async value => {\n    const instance = getStorageInstance();\n    return await instance.setItem('libraryHandle', value);\n  };\n  return {\n    getStorageInstance,\n    getLibraryHandle,\n    setLibraryHandle\n  };\n}\n\n//# sourceURL=webpack://fable-flow/./src/composables/storageInstance.js?");

/***/ }),

/***/ "./src/constants.js":
/*!**************************!*\
  !*** ./src/constants.js ***!
  \**************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   DIRECTORY_PERMISSION_MODE: function() { return /* binding */ DIRECTORY_PERMISSION_MODE; },\n/* harmony export */   FILE_EXTENSIONS_SUPPORTED: function() { return /* binding */ FILE_EXTENSIONS_SUPPORTED; },\n/* harmony export */   PERSISTENCE_KEY: function() { return /* binding */ PERSISTENCE_KEY; }\n/* harmony export */ });\n// mode used to browse user's directories\nconst DIRECTORY_PERMISSION_MODE = 'read';\n\n// list of extension supported by the application\nconst FILE_EXTENSIONS_SUPPORTED = ['.mp3'];\n\n// key used for persistence\nconst PERSISTENCE_KEY = 'keiwen-fable-flow';\n\n//# sourceURL=webpack://fable-flow/./src/constants.js?");

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.runtime.esm-bundler.js\");\n/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue */ \"./src/App.vue\");\n/* harmony import */ var _registerServiceWorker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./registerServiceWorker */ \"./src/registerServiceWorker.js\");\n/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./router */ \"./src/router/index.js\");\n/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./store */ \"./src/store/index.js\");\n/* harmony import */ var _router_guards__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/router/guards */ \"./src/router/guards.js\");\n/* harmony import */ var _assets_scss_theme_main_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/assets/scss/theme_main.scss */ \"./src/assets/scss/theme_main.scss\");\n/* harmony import */ var _assets_scss_theme_main_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_assets_scss_theme_main_scss__WEBPACK_IMPORTED_MODULE_6__);\n\n\n\n\n\n\n\n(0,_router_guards__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(_router__WEBPACK_IMPORTED_MODULE_3__[\"default\"], _store__WEBPACK_IMPORTED_MODULE_4__[\"default\"]);\nconst app = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createApp)(_App_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"]).use(_store__WEBPACK_IMPORTED_MODULE_4__[\"default\"]).use(_router__WEBPACK_IMPORTED_MODULE_3__[\"default\"]);\nif (true) {\n  app.config.devtools = true;\n}\napp.mount('#app');\n\n//# sourceURL=webpack://fable-flow/./src/main.js?");

/***/ }),

/***/ "./src/registerServiceWorker.js":
/*!**************************************!*\
  !*** ./src/registerServiceWorker.js ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* eslint-disable no-console */\n\n\nif (false) {}\n\n//# sourceURL=webpack://fable-flow/./src/registerServiceWorker.js?");

/***/ }),

/***/ "./src/router/guards.js":
/*!******************************!*\
  !*** ./src/router/guards.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ addNavigationGuards; }\n/* harmony export */ });\n/* harmony import */ var _composables_flashMessages__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/composables/flashMessages */ \"./src/composables/flashMessages.js\");\n/* harmony import */ var _composables_libraryLoader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/composables/libraryLoader */ \"./src/composables/libraryLoader.js\");\n\n\nfunction addNavigationGuards(router, store) {\n  const {\n    addWarningMessage,\n    clearAllMessages\n  } = (0,_composables_flashMessages__WEBPACK_IMPORTED_MODULE_0__.useFlashMessages)();\n  const {\n    getLibraryHandle\n  } = (0,_composables_libraryLoader__WEBPACK_IMPORTED_MODULE_1__.useLibraryLoader)(store);\n  router.beforeEach(async (to, from) => {\n    // first of all, as we are using async storage for store, wait for reload\n    await store.restored;\n\n    // first check if we have a library handle\n    // beware that we are not currently heading to it\n    const libraryHandle = await getLibraryHandle();\n    if (!libraryHandle && to.name !== 'setup') {\n      // persist message as we will redirect\n      addWarningMessage('Library is not found, please define main directory', '', true);\n      return {\n        name: 'setup'\n      };\n    }\n\n    // check if we have a current author/book when we try to go on chapter\n    if ((!store.getters.author || !store.getters.book) && to.name === 'chapter') {\n      addWarningMessage('Your current book is not found, please choose one', '', true);\n      return {\n        name: 'book'\n      };\n    }\n  });\n  router.afterEach(() => {\n    // after each route decided, clear previous messages\n    clearAllMessages();\n  });\n}\n\n//# sourceURL=webpack://fable-flow/./src/router/guards.js?");

/***/ }),

/***/ "./src/router/index.js":
/*!*****************************!*\
  !*** ./src/router/index.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-router */ \"./node_modules/vue-router/dist/vue-router.mjs\");\n/* harmony import */ var _views_ChapterPlayView_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../views/ChapterPlayView.vue */ \"./src/views/ChapterPlayView.vue\");\n/* harmony import */ var _views_BookSelectionView__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../views/BookSelectionView */ \"./src/views/BookSelectionView.vue\");\n\n\n\nconst routes = [{\n  path: '/',\n  name: 'chapter',\n  component: _views_ChapterPlayView_vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\n}, {\n  path: '/book',\n  name: 'book',\n  component: _views_BookSelectionView__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n}, {\n  path: '/settings',\n  name: 'settings',\n  // route level code-splitting\n  // this generates a separate chunk (about.[hash].js) for this route\n  // which is lazy-loaded when the route is visited.\n  component: () => __webpack_require__.e(/*! import() | about */ \"about\").then(__webpack_require__.bind(__webpack_require__, /*! ../views/SettingsView */ \"./src/views/SettingsView.vue\"))\n}, {\n  path: '/setup',\n  name: 'setup',\n  component: () => __webpack_require__.e(/*! import() | about */ \"about\").then(__webpack_require__.bind(__webpack_require__, /*! ../views/SetupView.vue */ \"./src/views/SetupView.vue\"))\n}];\nconst router = (0,vue_router__WEBPACK_IMPORTED_MODULE_2__.createRouter)({\n  history: (0,vue_router__WEBPACK_IMPORTED_MODULE_2__.createWebHashHistory)(),\n  routes\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (router);\n\n//# sourceURL=webpack://fable-flow/./src/router/index.js?");

/***/ }),

/***/ "./src/store/index.js":
/*!****************************!*\
  !*** ./src/store/index.js ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuex */ \"./node_modules/vuex/dist/vuex.esm-bundler.js\");\n/* harmony import */ var vuex_persist__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex-persist */ \"./node_modules/vuex-persist/dist/esm/index.js\");\n/* harmony import */ var _composables_storageInstance__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/composables/storageInstance */ \"./src/composables/storageInstance.js\");\n\n\n\n\n// create vuex-persist instance\nconst vuexPersist = new vuex_persist__WEBPACK_IMPORTED_MODULE_1__[\"default\"]({\n  // option 1: use local storage\n  // storage: window.localStorage,\n  // key: PERSISTENCE_KEY\n  // option 2: use indexedDB. In this case, you have to set async storage\n  // Also in router, wait for restoration before each\n  // storage: localForage,\n  // option 3: use a specific instance for indexedDB\n  storage: (0,_composables_storageInstance__WEBPACK_IMPORTED_MODULE_0__.useStorageInstance)().getStorageInstance(),\n  asyncStorage: true,\n  key: 'store'\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = ((0,vuex__WEBPACK_IMPORTED_MODULE_2__.createStore)({\n  state: {\n    library: '',\n    author: '',\n    book: '',\n    chapterIndex: 0,\n    trackTime: 0\n  },\n  getters: {\n    author: state => state.author,\n    book: state => state.book,\n    chapterIndex: state => state.chapterIndex,\n    trackTime: state => state.trackTime\n  },\n  mutations: {\n    setLibrary(state, library) {\n      state.library = library;\n    },\n    setAuthor(state, author) {\n      state.author = author;\n    },\n    setBook(state, book) {\n      state.book = book;\n    },\n    setChapterIndex(state, index) {\n      state.chapterIndex = index;\n    },\n    setTrackTime(state, time) {\n      state.trackTime = time;\n    },\n    resetSelection(state) {\n      state.author = '';\n      state.book = '';\n      state.chapterIndex = 0;\n      state.trackTime = 0;\n    }\n  },\n  actions: {\n    selectLibrary({\n      state,\n      commit\n    }, library) {\n      if (!library) {\n        commit('setLibrary', '');\n        commit('resetSelection');\n      } else if (library !== state.library) {\n        commit('setLibrary', library);\n        commit('resetSelection');\n      }\n    },\n    selectAuthor({\n      commit\n    }, author) {\n      commit('setBook', '');\n      commit('setChapterIndex', 0);\n      commit('setAuthor', author);\n      commit('setTrackTime', 0);\n    },\n    selectBook({\n      commit\n    }, book) {\n      commit('setChapterIndex', 0);\n      commit('setBook', book);\n      commit('setTrackTime', 0);\n    },\n    selectChapterIndex({\n      commit\n    }, index) {\n      commit('setChapterIndex', index);\n      commit('setTrackTime', 0);\n    },\n    updateTrackTime({\n      commit\n    }, time) {\n      commit('setTrackTime', time);\n    }\n  },\n  modules: {},\n  strict: \"development\" !== 'production',\n  plugins: [vuexPersist.plugin]\n}));\n\n//# sourceURL=webpack://fable-flow/./src/store/index.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-22.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-22.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/AudioPlayer.vue?vue&type=style&index=0&id=0eb2a4d7&scoped=true&lang=scss":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-22.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-22.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/AudioPlayer.vue?vue&type=style&index=0&id=0eb2a4d7&scoped=true&lang=scss ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"\", \"\"]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://fable-flow/./src/components/AudioPlayer.vue?./node_modules/css-loader/dist/cjs.js??clonedRuleSet-22.use%5B1%5D!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-22.use%5B2%5D!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22.use%5B3%5D!./node_modules/vue-loader/dist/index.js??ruleSet%5B0%5D.use%5B0%5D");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-24.use[1]!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-24.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-24.use[3]!./src/assets/scss/theme_main.scss":
/*!*******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-24.use[1]!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-24.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-24.use[3]!./src/assets/scss/theme_main.scss ***!
  \*******************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! @/assets/img/caret_down.svg */ \"./src/assets/img/caret_down.svg\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! @/assets/img/book-yellow.svg */ \"./src/assets/img/book-yellow.svg\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! @/assets/img/logo.png */ \"./src/assets/img/logo.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! @/assets/img/cogs-yellow.svg */ \"./src/assets/img/cogs-yellow.svg\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);\nvar ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);\nvar ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"/* ** MIXINS ** */\\n@keyframes spin {\\n  to {\\n    transform: rotate(360deg);\\n  }\\n}\\n@keyframes pulse-in {\\n  50% {\\n    transform: scale(0.9);\\n  }\\n}\\n@keyframes puff-in {\\n  0% {\\n    opacity: 0;\\n    filter: blur(2px);\\n    transform: scale(2);\\n  }\\n  100% {\\n    opacity: 1;\\n    filter: blur(0);\\n    transform: scale(1);\\n  }\\n}\\n@keyframes puff-out {\\n  0% {\\n    opacity: 1;\\n    filter: blur(0);\\n    transform: scale(1);\\n  }\\n  100% {\\n    opacity: 0;\\n    filter: blur(2px);\\n    transform: scale(2);\\n  }\\n}\\n@keyframes grow-in {\\n  0% {\\n    opacity: 0;\\n    transform: scale(0);\\n  }\\n  90% {\\n    opacity: 1;\\n    transform: scale(0.9);\\n  }\\n  100% {\\n    opacity: 1;\\n    transform: scale(1);\\n  }\\n}\\n@keyframes grow-out {\\n  0% {\\n    opacity: 1;\\n    transform: scale(1);\\n  }\\n  10% {\\n    opacity: 1;\\n    transform: scale(0.9);\\n  }\\n  100% {\\n    opacity: 0;\\n    transform: scale(0);\\n  }\\n}\\n@keyframes collapse-in {\\n  0% {\\n    opacity: 0;\\n    transform: scale(0) rotateY(180deg);\\n  }\\n  100% {\\n    opacity: 1;\\n    transform: scale(1) rotateY(0deg);\\n  }\\n}\\n@keyframes collapse-out {\\n  0% {\\n    opacity: 1;\\n    transform: scale(1) rotateY(0deg);\\n  }\\n  100% {\\n    opacity: 0;\\n    transform: scale(0) rotateY(180deg);\\n  }\\n}\\n@keyframes ting-in-down {\\n  0% {\\n    opacity: 0;\\n    transform: scale(0) translateY(900%);\\n  }\\n  70%, 90% {\\n    opacity: 1;\\n    transform: scale(1.1) translateY(0);\\n  }\\n  50%, 80%, 100% {\\n    opacity: 1;\\n    transform: scale(1) translateY(0);\\n  }\\n}\\n/* Main Style */\\n:root {\\n  --main-color: #C5FDFE;\\n  --main-bg: #0F1721;\\n  --primary: #D6B14A;\\n  --secondary: #1768A4;\\n  --success: #50B97E;\\n  --info: #7571C1;\\n  --warning: #F37E2B;\\n  --danger: #FF4747;\\n  --light: #FFFFFF;\\n  --dark: #000000;\\n  --border-radius: 50px;\\n  --margin-side: 10px;\\n  --font-size-default: 1.1rem;\\n  --font-size-large: 1.2rem;\\n  --font-size-small: 0.9rem;\\n  --audio-player-button-size: 80px;\\n  --audio-player-width: 320px;\\n  --timeline-slider-track-height: 5px;\\n  --timeline-slider-track-margin: 15px;\\n  --timeline-slider-thumb-size: 18px;\\n  --timeline-slider-thumb-margin: -7px;\\n}\\n\\nbody {\\n  background-color: #0F1721;\\n  color: #C5FDFE;\\n  text-align: center;\\n  font-family: Avenir, Helvetica, Arial, sans-serif;\\n  -webkit-font-smoothing: antialiased;\\n  -moz-osx-font-smoothing: grayscale;\\n  min-height: 97vh;\\n  height: auto;\\n  padding: 20px 10px 10px 10px;\\n  box-sizing: border-box;\\n  font-size: 1.1rem;\\n}\\nbody form {\\n  text-align: justify;\\n}\\nbody label {\\n  font-size: 1.2rem;\\n}\\nbody .help {\\n  font-size: 0.9rem;\\n  font-style: italic;\\n  text-align: justify;\\n}\\nbody .selection {\\n  margin-bottom: 20px;\\n}\\nbody .audio-player {\\n  margin-top: 20px;\\n}\\nbody .chapter-control-container {\\n  display: grid;\\n  grid-template-columns: auto 360px auto;\\n}\\n@media (width < 740px) {\\n  body .chapter-control-container {\\n    grid-template-columns: auto auto;\\n    grid-template-rows: auto auto;\\n  }\\n  body .chapter-control-container > div:nth-child(1) {\\n    grid-column: 1;\\n    grid-row: 2;\\n  }\\n  body .chapter-control-container > div:nth-child(2) {\\n    grid-column: 1/span 2;\\n    grid-row: 1;\\n    margin-bottom: 10px;\\n  }\\n  body .chapter-control-container > div:nth-child(3) {\\n    grid-column: 2;\\n    grid-row: 2;\\n  }\\n}\\nbody nav > .nav-item {\\n  display: inline;\\n}\\nbody nav > .nav-item:not(:last-child) {\\n  margin-right: 10px;\\n}\\nbody nav > .nav-item:not(:last-child):after {\\n  margin-left: 10px;\\n  content: \\\"|\\\";\\n}\\nbody nav a {\\n  font-weight: bold;\\n  color: #D6B14A;\\n}\\nbody nav a.router-link-exact-active {\\n  color: #1768A4;\\n}\\nbody button, body .btn {\\n  display: inline-block;\\n  background-color: transparent;\\n  color: #FFFFFF;\\n  border: 1px solid #FFFFFF;\\n  border-radius: 50px;\\n  padding: 0.25rem 1rem;\\n  line-height: 2;\\n  font-size: 1.1rem;\\n  text-align: center;\\n  text-decoration: none;\\n  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\\n  -webkit-user-select: none;\\n     -moz-user-select: none;\\n          user-select: none;\\n  margin: 5px;\\n  cursor: pointer;\\n  background-color: #0F1721;\\n  transform-origin: 50%;\\n  transition: all 0.5s ease-in-out;\\n}\\nbody button:hover, body .btn:hover {\\n  color: #0F1721;\\n  background: #FFFFFF;\\n}\\nbody button.btn-primary, body .btn.btn-primary {\\n  color: #D6B14A;\\n  border-color: #D6B14A;\\n  background-color: #0F1721;\\n  transform-origin: 50%;\\n  transition: all 0.5s ease-in-out;\\n}\\nbody button.btn-primary:hover, body .btn.btn-primary:hover {\\n  color: #0F1721;\\n  background: #D6B14A;\\n}\\nbody button.btn-secondary, body .btn.btn-secondary {\\n  color: #1768A4;\\n  border-color: #1768A4;\\n  background-color: #0F1721;\\n  transform-origin: 50%;\\n  transition: all 0.5s ease-in-out;\\n}\\nbody button.btn-secondary:hover, body .btn.btn-secondary:hover {\\n  color: #0F1721;\\n  background: #1768A4;\\n}\\nbody button.btn-success, body .btn.btn-success {\\n  color: #50B97E;\\n  border-color: #50B97E;\\n  background-color: #0F1721;\\n  transform-origin: 50%;\\n  transition: all 0.5s ease-in-out;\\n}\\nbody button.btn-success:hover, body .btn.btn-success:hover {\\n  color: #0F1721;\\n  background: #50B97E;\\n}\\nbody button.btn-info, body .btn.btn-info {\\n  color: #7571C1;\\n  border-color: #7571C1;\\n  background-color: #0F1721;\\n  transform-origin: 50%;\\n  transition: all 0.5s ease-in-out;\\n}\\nbody button.btn-info:hover, body .btn.btn-info:hover {\\n  color: #0F1721;\\n  background: #7571C1;\\n}\\nbody button.btn-warning, body .btn.btn-warning {\\n  color: #F37E2B;\\n  border-color: #F37E2B;\\n  background-color: #0F1721;\\n  transform-origin: 50%;\\n  transition: all 0.5s ease-in-out;\\n}\\nbody button.btn-warning:hover, body .btn.btn-warning:hover {\\n  color: #0F1721;\\n  background: #F37E2B;\\n}\\nbody button.btn-danger, body .btn.btn-danger {\\n  color: #FF4747;\\n  border-color: #FF4747;\\n  background-color: #0F1721;\\n  transform-origin: 50%;\\n  transition: all 0.5s ease-in-out;\\n}\\nbody button.btn-danger:hover, body .btn.btn-danger:hover {\\n  color: #0F1721;\\n  background: #FF4747;\\n}\\nbody .alert {\\n  cursor: pointer;\\n  padding: 0.75rem 1.25rem;\\n  margin-bottom: 1rem;\\n  border: 1px solid #FFFFFF;\\n  color: #FFFFFF;\\n  background-color: rgba(255, 255, 255, 0.25);\\n  animation-name: puff-in;\\n  animation-duration: 0.7s;\\n  animation-timing-function: linear;\\n  animation-iteration-count: 1;\\n}\\nbody .alert.alert-primary {\\n  border: 1px solid #D6B14A;\\n  color: #D6B14A;\\n  background-color: rgba(214, 177, 74, 0.25);\\n}\\nbody .alert.alert-secondary {\\n  border: 1px solid #D6B14A;\\n  color: #D6B14A;\\n  background-color: rgba(214, 177, 74, 0.25);\\n}\\nbody .alert.alert-success {\\n  border: 1px solid #50B97E;\\n  color: #50B97E;\\n  background-color: rgba(80, 185, 126, 0.25);\\n}\\nbody .alert.alert-info {\\n  border: 1px solid #7571C1;\\n  color: #7571C1;\\n  background-color: rgba(117, 113, 193, 0.25);\\n}\\nbody .alert.alert-warning {\\n  border: 1px solid #F37E2B;\\n  color: #F37E2B;\\n  background-color: rgba(243, 126, 43, 0.25);\\n}\\nbody .alert.alert-danger {\\n  border: 1px solid #FF4747;\\n  color: #FF4747;\\n  background-color: rgba(255, 71, 71, 0.25);\\n}\\nbody select {\\n  -webkit-appearance: none;\\n     -moz-appearance: none;\\n          appearance: none;\\n  display: block;\\n  border: 1px solid #D6B14A;\\n  padding: 0.5rem 4rem 0.5rem 1rem;\\n  background: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \") no-repeat right 0.3rem center/1.8rem, linear-gradient(to left, rgba(15, 23, 33, 0.3) 2.5rem, rgba(15, 23, 33, 0.05) 0);\\n  color: #FFFFFF;\\n  font-size: 1.1rem;\\n  cursor: pointer;\\n  width: calc(100% - 10px);\\n}\\nbody select:focus {\\n  outline: none;\\n}\\nbody select.empty-select {\\n  font-style: italic;\\n  color: rgba(197, 253, 254, 0.5);\\n}\\nbody select option {\\n  color: #C5FDFE;\\n  background-color: #0F1721;\\n  font-style: normal;\\n}\\nbody .custom-player-container {\\n  display: grid;\\n  width: var(--audio-player-width);\\n  height: var(--audio-player-button-size);\\n  grid-template-columns: var(--audio-player-button-size) auto var(--audio-player-button-size);\\n  grid-template-rows: calc(var(--audio-player-button-size) / 2) calc(var(--audio-player-button-size) / 2);\\n  margin: auto;\\n}\\nbody .custom-player-container .play-button {\\n  grid-column: 3;\\n  grid-row: 1/span 2;\\n  border-radius: 50%;\\n  cursor: pointer;\\n}\\nbody .custom-player-container .play-button .play-border.play-border-dotted {\\n  opacity: 0;\\n  stroke-dasharray: 4, 5;\\n  stroke-width: 1px;\\n  transform-origin: 50% 50%;\\n  animation-name: spin;\\n  animation-duration: 4s;\\n  animation-timing-function: linear;\\n  animation-iteration-count: infinite;\\n  transition: opacity 1s ease, stroke-width 1s ease;\\n}\\nbody .custom-player-container .play-button .play-border.play-border-solid {\\n  stroke-dashoffset: 0;\\n  stroke-dashArray: 300;\\n  stroke-width: 6px;\\n  transition: stroke-dashoffset 1s ease, opacity 1s ease;\\n}\\nbody .custom-player-container .play-button .play-icon {\\n  transform-origin: 50% 50%;\\n  transition: transform 200ms ease-out;\\n}\\nbody .custom-player-container .play-button .pause-icon {\\n  transform-origin: 50% 50%;\\n  transition: transform 200ms ease-out;\\n  transform: scale(0);\\n}\\nbody .custom-player-container .play-button.play-button-playing .play-border-dotted {\\n  stroke-width: 4px;\\n  opacity: 1;\\n}\\nbody .custom-player-container .play-button.play-button-playing .play-border-solid {\\n  opacity: 0;\\n  stroke-dashoffset: 300;\\n}\\nbody .custom-player-container .play-button.play-button-playing .play-icon {\\n  transform: scale(0);\\n}\\nbody .custom-player-container .play-button.play-button-playing .pause-icon {\\n  transform: scale(1);\\n}\\nbody .custom-player-container .rewind-button {\\n  grid-column: 1;\\n  grid-row: 1/span 2;\\n  border-radius: 50%;\\n  cursor: pointer;\\n}\\nbody .custom-player-container .custom-player-time {\\n  grid-column: 2;\\n  grid-row: 2;\\n  text-align: center;\\n  color: var(--light);\\n  padding-top: 10px;\\n}\\nbody .custom-player-container .custom-player-timeline {\\n  grid-column: 2;\\n  grid-row: 1;\\n  padding: 0 10px;\\n}\\nbody .custom-player-container .custom-player-timeline input[type=range] {\\n  width: 100%;\\n  cursor: pointer;\\n  -webkit-appearance: none;\\n  height: 25px;\\n  background-color: var(--main-bg);\\n  padding: 5px 0;\\n  border-radius: 25px;\\n  position: relative;\\n}\\nbody .custom-player-container .custom-player-timeline input[type=range]::-webkit-slider-runnable-track {\\n  height: var(--timeline-slider-track-height);\\n  background: rgba(0, 0, 0, 0.3);\\n}\\nbody .custom-player-container .custom-player-timeline input[type=range]::-webkit-slider-thumb {\\n  position: relative;\\n  -webkit-appearance: none;\\n  box-sizing: content-box;\\n  height: var(--timeline-slider-thumb-size);\\n  width: var(--timeline-slider-thumb-size);\\n  border-radius: 50%;\\n  background-color: var(--secondary);\\n  border: 1px solid var(--light);\\n  margin: var(--timeline-slider-thumb-margin) 0 0 0;\\n}\\nbody .custom-player-container .custom-player-timeline input[type=range]:active::-webkit-slider-thumb {\\n  transform: scale(1.2);\\n}\\nbody .custom-player-container .custom-player-timeline input[type=range]::before {\\n  position: absolute;\\n  content: \\\"\\\";\\n  top: var(--timeline-slider-track-margin);\\n  left: 0;\\n  width: var(--custom-player-percent-progress);\\n  height: var(--timeline-slider-track-height);\\n  background-color: var(--light);\\n}\\nbody .custom-player-container .custom-player-timeline input[type=range]::-moz-range-track {\\n  height: var(--timeline-slider-track-height);\\n  background: rgba(0, 0, 0, 0.3);\\n}\\nbody .custom-player-container .custom-player-timeline input[type=range]::-moz-range-progress {\\n  background-color: var(--light);\\n}\\nbody .custom-player-container .custom-player-timeline input[type=range]::-moz-range-thumb {\\n  position: relative;\\n  -webkit-appearance: none;\\n  box-sizing: content-box;\\n  height: var(--timeline-slider-thumb-size);\\n  width: var(--timeline-slider-thumb-size);\\n  border-radius: 50%;\\n  background-color: var(--secondary);\\n  border: 1px solid var(--light);\\n  margin: var(--timeline-slider-thumb-margin) 0 0 0;\\n}\\nbody .custom-player-container .custom-player-timeline input[type=range]:active::-moz-range-thumb {\\n  transform: scale(1.2);\\n}\\nbody .custom-player-container .custom-player-timeline input[type=range]::-ms-track {\\n  width: 100%;\\n  height: var(--timeline-slider-track-height);\\n  background: transparent;\\n  border: solid transparent;\\n  color: transparent;\\n}\\nbody .custom-player-container .custom-player-timeline input[type=range]::-ms-fill-lower {\\n  background-color: var(--light);\\n}\\nbody .custom-player-container .custom-player-timeline input[type=range]::-ms-fill-upper {\\n  background: rgba(0, 0, 0, 0.3);\\n}\\nbody .custom-player-container .custom-player-timeline input[type=range]::-ms-thumb {\\n  position: relative;\\n  -webkit-appearance: none;\\n  box-sizing: content-box;\\n  height: var(--timeline-slider-thumb-size);\\n  width: var(--timeline-slider-thumb-size);\\n  border-radius: 50%;\\n  background-color: var(--secondary);\\n  border: 1px solid var(--light);\\n  margin: var(--timeline-slider-thumb-margin) 0 0 0;\\n}\\nbody .custom-player-container .custom-player-timeline input[type=range]:active::-ms-thumb {\\n  transform: scale(1.2);\\n}\\n\\nbody {\\n  background: radial-gradient(ellipse at center, #4A5A64 0%, #0F1721 100%);\\n}\\nbody .message-container {\\n  position: fixed;\\n  width: 100%;\\n  bottom: 0;\\n  left: 0;\\n  z-index: 10;\\n}\\nbody .message-container .alert {\\n  margin-right: 10px;\\n  margin-left: 10px;\\n}\\nbody .content {\\n  margin-top: 100px;\\n}\\nbody h1 {\\n  color: #D6B14A;\\n}\\nbody nav {\\n  position: fixed;\\n  width: 100%;\\n  top: 10px;\\n  left: 0;\\n}\\nbody nav > .nav-item:not(:last-child) {\\n  margin-right: 15px;\\n}\\nbody nav > .nav-item:not(:last-child):after {\\n  margin-left: 0;\\n  content: \\\"\\\";\\n}\\nbody nav > .nav-item:nth-child(1) {\\n  position: fixed;\\n  left: 10px;\\n  background: url(\" + ___CSS_LOADER_URL_REPLACEMENT_1___ + \") no-repeat center/3rem;\\n}\\nbody nav > .nav-item:nth-child(2) {\\n  margin: auto;\\n}\\nbody nav > .nav-item:nth-child(2) a {\\n  background: url(\" + ___CSS_LOADER_URL_REPLACEMENT_2___ + \") no-repeat center;\\n  width: 100px;\\n  height: 100px;\\n  line-height: 75px;\\n}\\nbody nav > .nav-item:nth-child(3) {\\n  position: fixed;\\n  right: 10px;\\n  background: url(\" + ___CSS_LOADER_URL_REPLACEMENT_3___ + \") no-repeat center/3rem;\\n}\\nbody nav > .nav-item a {\\n  display: inline-block;\\n  text-indent: -9999px;\\n  width: 80px;\\n  height: 80px;\\n  border-radius: 75px;\\n  line-height: 57px;\\n  border: 5px solid #1768A4;\\n}\\nbody nav > .nav-item a:hover, body nav > .nav-item a:active {\\n  border-color: #D6B14A;\\n}\\nbody nav > .nav-item a:focus {\\n  border-color: #D6B14A;\\n}\\nbody nav > .nav-item a.router-link-exact-active {\\n  border-color: #FFFFFF;\\n}\\nbody .custom-player-container {\\n  background: radial-gradient(ellipse at center, #0F1721 0%, #1768A4 100%);\\n  outline: 2px solid #0F1721;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://fable-flow/./src/assets/scss/theme_main.scss?./node_modules/css-loader/dist/cjs.js??clonedRuleSet-24.use%5B1%5D!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-24.use%5B2%5D!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-24.use%5B3%5D");

/***/ }),

/***/ "./src/App.vue":
/*!*********************!*\
  !*** ./src/App.vue ***!
  \*********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App_vue_vue_type_template_id_7ba5bd90__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=7ba5bd90 */ \"./src/App.vue?vue&type=template&id=7ba5bd90\");\n/* harmony import */ var _App_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&setup=true&lang=js */ \"./src/App.vue?vue&type=script&setup=true&lang=js\");\n/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/vue-loader/dist/exportHelper.js */ \"./node_modules/vue-loader/dist/exportHelper.js\");\n\n\n\n\n;\nconst __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_App_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"], [['render',_App_vue_vue_type_template_id_7ba5bd90__WEBPACK_IMPORTED_MODULE_0__.render],['__file',\"src/App.vue\"]])\n/* hot reload */\nif (false) {}\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (__exports__);\n\n//# sourceURL=webpack://fable-flow/./src/App.vue?");

/***/ }),

/***/ "./src/components/AudioPlayer.vue":
/*!****************************************!*\
  !*** ./src/components/AudioPlayer.vue ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _AudioPlayer_vue_vue_type_template_id_0eb2a4d7_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AudioPlayer.vue?vue&type=template&id=0eb2a4d7&scoped=true */ \"./src/components/AudioPlayer.vue?vue&type=template&id=0eb2a4d7&scoped=true\");\n/* harmony import */ var _AudioPlayer_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AudioPlayer.vue?vue&type=script&setup=true&lang=js */ \"./src/components/AudioPlayer.vue?vue&type=script&setup=true&lang=js\");\n/* harmony import */ var _AudioPlayer_vue_vue_type_style_index_0_id_0eb2a4d7_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AudioPlayer.vue?vue&type=style&index=0&id=0eb2a4d7&scoped=true&lang=scss */ \"./src/components/AudioPlayer.vue?vue&type=style&index=0&id=0eb2a4d7&scoped=true&lang=scss\");\n/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/vue-loader/dist/exportHelper.js */ \"./node_modules/vue-loader/dist/exportHelper.js\");\n\n\n\n\n;\n\n\nconst __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_AudioPlayer_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"], [['render',_AudioPlayer_vue_vue_type_template_id_0eb2a4d7_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render],['__scopeId',\"data-v-0eb2a4d7\"],['__file',\"src/components/AudioPlayer.vue\"]])\n/* hot reload */\nif (false) {}\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (__exports__);\n\n//# sourceURL=webpack://fable-flow/./src/components/AudioPlayer.vue?");

/***/ }),

/***/ "./src/components/AudioPlayerPlayButton.vue":
/*!**************************************************!*\
  !*** ./src/components/AudioPlayerPlayButton.vue ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _AudioPlayerPlayButton_vue_vue_type_template_id_ad89ba86__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AudioPlayerPlayButton.vue?vue&type=template&id=ad89ba86 */ \"./src/components/AudioPlayerPlayButton.vue?vue&type=template&id=ad89ba86\");\n/* harmony import */ var _AudioPlayerPlayButton_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AudioPlayerPlayButton.vue?vue&type=script&setup=true&lang=js */ \"./src/components/AudioPlayerPlayButton.vue?vue&type=script&setup=true&lang=js\");\n/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/vue-loader/dist/exportHelper.js */ \"./node_modules/vue-loader/dist/exportHelper.js\");\n\n\n\n\n;\nconst __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_AudioPlayerPlayButton_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"], [['render',_AudioPlayerPlayButton_vue_vue_type_template_id_ad89ba86__WEBPACK_IMPORTED_MODULE_0__.render],['__file',\"src/components/AudioPlayerPlayButton.vue\"]])\n/* hot reload */\nif (false) {}\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (__exports__);\n\n//# sourceURL=webpack://fable-flow/./src/components/AudioPlayerPlayButton.vue?");

/***/ }),

/***/ "./src/components/AudioPlayerRewindButton.vue":
/*!****************************************************!*\
  !*** ./src/components/AudioPlayerRewindButton.vue ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _AudioPlayerRewindButton_vue_vue_type_template_id_166a9bc4__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AudioPlayerRewindButton.vue?vue&type=template&id=166a9bc4 */ \"./src/components/AudioPlayerRewindButton.vue?vue&type=template&id=166a9bc4\");\n/* harmony import */ var _AudioPlayerRewindButton_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AudioPlayerRewindButton.vue?vue&type=script&setup=true&lang=js */ \"./src/components/AudioPlayerRewindButton.vue?vue&type=script&setup=true&lang=js\");\n/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/vue-loader/dist/exportHelper.js */ \"./node_modules/vue-loader/dist/exportHelper.js\");\n\n\n\n\n;\nconst __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_AudioPlayerRewindButton_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"], [['render',_AudioPlayerRewindButton_vue_vue_type_template_id_166a9bc4__WEBPACK_IMPORTED_MODULE_0__.render],['__file',\"src/components/AudioPlayerRewindButton.vue\"]])\n/* hot reload */\nif (false) {}\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (__exports__);\n\n//# sourceURL=webpack://fable-flow/./src/components/AudioPlayerRewindButton.vue?");

/***/ }),

/***/ "./src/components/AudioPlayerTimeline.vue":
/*!************************************************!*\
  !*** ./src/components/AudioPlayerTimeline.vue ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _AudioPlayerTimeline_vue_vue_type_template_id_5af3d490__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AudioPlayerTimeline.vue?vue&type=template&id=5af3d490 */ \"./src/components/AudioPlayerTimeline.vue?vue&type=template&id=5af3d490\");\n/* harmony import */ var _AudioPlayerTimeline_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AudioPlayerTimeline.vue?vue&type=script&setup=true&lang=js */ \"./src/components/AudioPlayerTimeline.vue?vue&type=script&setup=true&lang=js\");\n/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/vue-loader/dist/exportHelper.js */ \"./node_modules/vue-loader/dist/exportHelper.js\");\n\n\n\n\n;\nconst __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_AudioPlayerTimeline_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"], [['render',_AudioPlayerTimeline_vue_vue_type_template_id_5af3d490__WEBPACK_IMPORTED_MODULE_0__.render],['__file',\"src/components/AudioPlayerTimeline.vue\"]])\n/* hot reload */\nif (false) {}\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (__exports__);\n\n//# sourceURL=webpack://fable-flow/./src/components/AudioPlayerTimeline.vue?");

/***/ }),

/***/ "./src/components/AudioPlayerTimeview.vue":
/*!************************************************!*\
  !*** ./src/components/AudioPlayerTimeview.vue ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _AudioPlayerTimeview_vue_vue_type_template_id_5a18402e__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AudioPlayerTimeview.vue?vue&type=template&id=5a18402e */ \"./src/components/AudioPlayerTimeview.vue?vue&type=template&id=5a18402e\");\n/* harmony import */ var _AudioPlayerTimeview_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AudioPlayerTimeview.vue?vue&type=script&setup=true&lang=js */ \"./src/components/AudioPlayerTimeview.vue?vue&type=script&setup=true&lang=js\");\n/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/vue-loader/dist/exportHelper.js */ \"./node_modules/vue-loader/dist/exportHelper.js\");\n\n\n\n\n;\nconst __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_AudioPlayerTimeview_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"], [['render',_AudioPlayerTimeview_vue_vue_type_template_id_5a18402e__WEBPACK_IMPORTED_MODULE_0__.render],['__file',\"src/components/AudioPlayerTimeview.vue\"]])\n/* hot reload */\nif (false) {}\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (__exports__);\n\n//# sourceURL=webpack://fable-flow/./src/components/AudioPlayerTimeview.vue?");

/***/ }),

/***/ "./src/components/AuthorSelect.vue":
/*!*****************************************!*\
  !*** ./src/components/AuthorSelect.vue ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _AuthorSelect_vue_vue_type_template_id_521a91d2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AuthorSelect.vue?vue&type=template&id=521a91d2 */ \"./src/components/AuthorSelect.vue?vue&type=template&id=521a91d2\");\n/* harmony import */ var _AuthorSelect_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AuthorSelect.vue?vue&type=script&setup=true&lang=js */ \"./src/components/AuthorSelect.vue?vue&type=script&setup=true&lang=js\");\n/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/vue-loader/dist/exportHelper.js */ \"./node_modules/vue-loader/dist/exportHelper.js\");\n\n\n\n\n;\nconst __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_AuthorSelect_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"], [['render',_AuthorSelect_vue_vue_type_template_id_521a91d2__WEBPACK_IMPORTED_MODULE_0__.render],['__file',\"src/components/AuthorSelect.vue\"]])\n/* hot reload */\nif (false) {}\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (__exports__);\n\n//# sourceURL=webpack://fable-flow/./src/components/AuthorSelect.vue?");

/***/ }),

/***/ "./src/components/BookInfo.vue":
/*!*************************************!*\
  !*** ./src/components/BookInfo.vue ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _BookInfo_vue_vue_type_template_id_c839b832__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BookInfo.vue?vue&type=template&id=c839b832 */ \"./src/components/BookInfo.vue?vue&type=template&id=c839b832\");\n/* harmony import */ var _BookInfo_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BookInfo.vue?vue&type=script&setup=true&lang=js */ \"./src/components/BookInfo.vue?vue&type=script&setup=true&lang=js\");\n/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/vue-loader/dist/exportHelper.js */ \"./node_modules/vue-loader/dist/exportHelper.js\");\n\n\n\n\n;\nconst __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_BookInfo_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"], [['render',_BookInfo_vue_vue_type_template_id_c839b832__WEBPACK_IMPORTED_MODULE_0__.render],['__file',\"src/components/BookInfo.vue\"]])\n/* hot reload */\nif (false) {}\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (__exports__);\n\n//# sourceURL=webpack://fable-flow/./src/components/BookInfo.vue?");

/***/ }),

/***/ "./src/components/BookSelect.vue":
/*!***************************************!*\
  !*** ./src/components/BookSelect.vue ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _BookSelect_vue_vue_type_template_id_3c9db8f5__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BookSelect.vue?vue&type=template&id=3c9db8f5 */ \"./src/components/BookSelect.vue?vue&type=template&id=3c9db8f5\");\n/* harmony import */ var _BookSelect_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BookSelect.vue?vue&type=script&setup=true&lang=js */ \"./src/components/BookSelect.vue?vue&type=script&setup=true&lang=js\");\n/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/vue-loader/dist/exportHelper.js */ \"./node_modules/vue-loader/dist/exportHelper.js\");\n\n\n\n\n;\nconst __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_BookSelect_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"], [['render',_BookSelect_vue_vue_type_template_id_3c9db8f5__WEBPACK_IMPORTED_MODULE_0__.render],['__file',\"src/components/BookSelect.vue\"]])\n/* hot reload */\nif (false) {}\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (__exports__);\n\n//# sourceURL=webpack://fable-flow/./src/components/BookSelect.vue?");

/***/ }),

/***/ "./src/components/ChapterInfo.vue":
/*!****************************************!*\
  !*** ./src/components/ChapterInfo.vue ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _ChapterInfo_vue_vue_type_template_id_1f1adf1b__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ChapterInfo.vue?vue&type=template&id=1f1adf1b */ \"./src/components/ChapterInfo.vue?vue&type=template&id=1f1adf1b\");\n/* harmony import */ var _ChapterInfo_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ChapterInfo.vue?vue&type=script&setup=true&lang=js */ \"./src/components/ChapterInfo.vue?vue&type=script&setup=true&lang=js\");\n/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/vue-loader/dist/exportHelper.js */ \"./node_modules/vue-loader/dist/exportHelper.js\");\n\n\n\n\n;\nconst __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_ChapterInfo_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"], [['render',_ChapterInfo_vue_vue_type_template_id_1f1adf1b__WEBPACK_IMPORTED_MODULE_0__.render],['__file',\"src/components/ChapterInfo.vue\"]])\n/* hot reload */\nif (false) {}\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (__exports__);\n\n//# sourceURL=webpack://fable-flow/./src/components/ChapterInfo.vue?");

/***/ }),

/***/ "./src/components/NavBar.vue":
/*!***********************************!*\
  !*** ./src/components/NavBar.vue ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _NavBar_vue_vue_type_template_id_4295d220__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NavBar.vue?vue&type=template&id=4295d220 */ \"./src/components/NavBar.vue?vue&type=template&id=4295d220\");\n/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/vue-loader/dist/exportHelper.js */ \"./node_modules/vue-loader/dist/exportHelper.js\");\n\nconst script = {}\n\n;\nconst __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(script, [['render',_NavBar_vue_vue_type_template_id_4295d220__WEBPACK_IMPORTED_MODULE_0__.render],['__file',\"src/components/NavBar.vue\"]])\n/* hot reload */\nif (false) {}\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (__exports__);\n\n//# sourceURL=webpack://fable-flow/./src/components/NavBar.vue?");

/***/ }),

/***/ "./src/views/BookSelectionView.vue":
/*!*****************************************!*\
  !*** ./src/views/BookSelectionView.vue ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _BookSelectionView_vue_vue_type_template_id_ae2571c4__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BookSelectionView.vue?vue&type=template&id=ae2571c4 */ \"./src/views/BookSelectionView.vue?vue&type=template&id=ae2571c4\");\n/* harmony import */ var _BookSelectionView_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BookSelectionView.vue?vue&type=script&setup=true&lang=js */ \"./src/views/BookSelectionView.vue?vue&type=script&setup=true&lang=js\");\n/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/vue-loader/dist/exportHelper.js */ \"./node_modules/vue-loader/dist/exportHelper.js\");\n\n\n\n\n;\nconst __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_BookSelectionView_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"], [['render',_BookSelectionView_vue_vue_type_template_id_ae2571c4__WEBPACK_IMPORTED_MODULE_0__.render],['__file',\"src/views/BookSelectionView.vue\"]])\n/* hot reload */\nif (false) {}\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (__exports__);\n\n//# sourceURL=webpack://fable-flow/./src/views/BookSelectionView.vue?");

/***/ }),

/***/ "./src/views/ChapterPlayView.vue":
/*!***************************************!*\
  !*** ./src/views/ChapterPlayView.vue ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _ChapterPlayView_vue_vue_type_template_id_e9ee0dc8__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ChapterPlayView.vue?vue&type=template&id=e9ee0dc8 */ \"./src/views/ChapterPlayView.vue?vue&type=template&id=e9ee0dc8\");\n/* harmony import */ var _ChapterPlayView_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ChapterPlayView.vue?vue&type=script&setup=true&lang=js */ \"./src/views/ChapterPlayView.vue?vue&type=script&setup=true&lang=js\");\n/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/vue-loader/dist/exportHelper.js */ \"./node_modules/vue-loader/dist/exportHelper.js\");\n\n\n\n\n;\nconst __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_ChapterPlayView_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"], [['render',_ChapterPlayView_vue_vue_type_template_id_e9ee0dc8__WEBPACK_IMPORTED_MODULE_0__.render],['__file',\"src/views/ChapterPlayView.vue\"]])\n/* hot reload */\nif (false) {}\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (__exports__);\n\n//# sourceURL=webpack://fable-flow/./src/views/ChapterPlayView.vue?");

/***/ }),

/***/ "./src/App.vue?vue&type=script&setup=true&lang=js":
/*!********************************************************!*\
  !*** ./src/App.vue?vue&type=script&setup=true&lang=js ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_App_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; }\n/* harmony export */ });\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_App_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./App.vue?vue&type=script&setup=true&lang=js */ \"./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/App.vue?vue&type=script&setup=true&lang=js\");\n \n\n//# sourceURL=webpack://fable-flow/./src/App.vue?");

/***/ }),

/***/ "./src/components/AudioPlayer.vue?vue&type=script&setup=true&lang=js":
/*!***************************************************************************!*\
  !*** ./src/components/AudioPlayer.vue?vue&type=script&setup=true&lang=js ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AudioPlayer_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; }\n/* harmony export */ });\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AudioPlayer_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./AudioPlayer.vue?vue&type=script&setup=true&lang=js */ \"./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/AudioPlayer.vue?vue&type=script&setup=true&lang=js\");\n \n\n//# sourceURL=webpack://fable-flow/./src/components/AudioPlayer.vue?");

/***/ }),

/***/ "./src/components/AudioPlayerPlayButton.vue?vue&type=script&setup=true&lang=js":
/*!*************************************************************************************!*\
  !*** ./src/components/AudioPlayerPlayButton.vue?vue&type=script&setup=true&lang=js ***!
  \*************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AudioPlayerPlayButton_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; }\n/* harmony export */ });\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AudioPlayerPlayButton_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./AudioPlayerPlayButton.vue?vue&type=script&setup=true&lang=js */ \"./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/AudioPlayerPlayButton.vue?vue&type=script&setup=true&lang=js\");\n \n\n//# sourceURL=webpack://fable-flow/./src/components/AudioPlayerPlayButton.vue?");

/***/ }),

/***/ "./src/components/AudioPlayerRewindButton.vue?vue&type=script&setup=true&lang=js":
/*!***************************************************************************************!*\
  !*** ./src/components/AudioPlayerRewindButton.vue?vue&type=script&setup=true&lang=js ***!
  \***************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AudioPlayerRewindButton_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; }\n/* harmony export */ });\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AudioPlayerRewindButton_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./AudioPlayerRewindButton.vue?vue&type=script&setup=true&lang=js */ \"./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/AudioPlayerRewindButton.vue?vue&type=script&setup=true&lang=js\");\n \n\n//# sourceURL=webpack://fable-flow/./src/components/AudioPlayerRewindButton.vue?");

/***/ }),

/***/ "./src/components/AudioPlayerTimeline.vue?vue&type=script&setup=true&lang=js":
/*!***********************************************************************************!*\
  !*** ./src/components/AudioPlayerTimeline.vue?vue&type=script&setup=true&lang=js ***!
  \***********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AudioPlayerTimeline_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; }\n/* harmony export */ });\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AudioPlayerTimeline_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./AudioPlayerTimeline.vue?vue&type=script&setup=true&lang=js */ \"./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/AudioPlayerTimeline.vue?vue&type=script&setup=true&lang=js\");\n \n\n//# sourceURL=webpack://fable-flow/./src/components/AudioPlayerTimeline.vue?");

/***/ }),

/***/ "./src/components/AudioPlayerTimeview.vue?vue&type=script&setup=true&lang=js":
/*!***********************************************************************************!*\
  !*** ./src/components/AudioPlayerTimeview.vue?vue&type=script&setup=true&lang=js ***!
  \***********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AudioPlayerTimeview_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; }\n/* harmony export */ });\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AudioPlayerTimeview_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./AudioPlayerTimeview.vue?vue&type=script&setup=true&lang=js */ \"./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/AudioPlayerTimeview.vue?vue&type=script&setup=true&lang=js\");\n \n\n//# sourceURL=webpack://fable-flow/./src/components/AudioPlayerTimeview.vue?");

/***/ }),

/***/ "./src/components/AuthorSelect.vue?vue&type=script&setup=true&lang=js":
/*!****************************************************************************!*\
  !*** ./src/components/AuthorSelect.vue?vue&type=script&setup=true&lang=js ***!
  \****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AuthorSelect_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; }\n/* harmony export */ });\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AuthorSelect_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./AuthorSelect.vue?vue&type=script&setup=true&lang=js */ \"./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/AuthorSelect.vue?vue&type=script&setup=true&lang=js\");\n \n\n//# sourceURL=webpack://fable-flow/./src/components/AuthorSelect.vue?");

/***/ }),

/***/ "./src/components/BookInfo.vue?vue&type=script&setup=true&lang=js":
/*!************************************************************************!*\
  !*** ./src/components/BookInfo.vue?vue&type=script&setup=true&lang=js ***!
  \************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_BookInfo_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; }\n/* harmony export */ });\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_BookInfo_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./BookInfo.vue?vue&type=script&setup=true&lang=js */ \"./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/BookInfo.vue?vue&type=script&setup=true&lang=js\");\n \n\n//# sourceURL=webpack://fable-flow/./src/components/BookInfo.vue?");

/***/ }),

/***/ "./src/components/BookSelect.vue?vue&type=script&setup=true&lang=js":
/*!**************************************************************************!*\
  !*** ./src/components/BookSelect.vue?vue&type=script&setup=true&lang=js ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_BookSelect_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; }\n/* harmony export */ });\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_BookSelect_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./BookSelect.vue?vue&type=script&setup=true&lang=js */ \"./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/BookSelect.vue?vue&type=script&setup=true&lang=js\");\n \n\n//# sourceURL=webpack://fable-flow/./src/components/BookSelect.vue?");

/***/ }),

/***/ "./src/components/ChapterInfo.vue?vue&type=script&setup=true&lang=js":
/*!***************************************************************************!*\
  !*** ./src/components/ChapterInfo.vue?vue&type=script&setup=true&lang=js ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ChapterInfo_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; }\n/* harmony export */ });\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ChapterInfo_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ChapterInfo.vue?vue&type=script&setup=true&lang=js */ \"./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/ChapterInfo.vue?vue&type=script&setup=true&lang=js\");\n \n\n//# sourceURL=webpack://fable-flow/./src/components/ChapterInfo.vue?");

/***/ }),

/***/ "./src/views/BookSelectionView.vue?vue&type=script&setup=true&lang=js":
/*!****************************************************************************!*\
  !*** ./src/views/BookSelectionView.vue?vue&type=script&setup=true&lang=js ***!
  \****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_BookSelectionView_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; }\n/* harmony export */ });\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_BookSelectionView_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./BookSelectionView.vue?vue&type=script&setup=true&lang=js */ \"./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/BookSelectionView.vue?vue&type=script&setup=true&lang=js\");\n \n\n//# sourceURL=webpack://fable-flow/./src/views/BookSelectionView.vue?");

/***/ }),

/***/ "./src/views/ChapterPlayView.vue?vue&type=script&setup=true&lang=js":
/*!**************************************************************************!*\
  !*** ./src/views/ChapterPlayView.vue?vue&type=script&setup=true&lang=js ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ChapterPlayView_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; }\n/* harmony export */ });\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ChapterPlayView_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ChapterPlayView.vue?vue&type=script&setup=true&lang=js */ \"./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/ChapterPlayView.vue?vue&type=script&setup=true&lang=js\");\n \n\n//# sourceURL=webpack://fable-flow/./src/views/ChapterPlayView.vue?");

/***/ }),

/***/ "./src/App.vue?vue&type=template&id=7ba5bd90":
/*!***************************************************!*\
  !*** ./src/App.vue?vue&type=template&id=7ba5bd90 ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   render: function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_App_vue_vue_type_template_id_7ba5bd90__WEBPACK_IMPORTED_MODULE_0__.render; }\n/* harmony export */ });\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_App_vue_vue_type_template_id_7ba5bd90__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./App.vue?vue&type=template&id=7ba5bd90 */ \"./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/App.vue?vue&type=template&id=7ba5bd90\");\n\n\n//# sourceURL=webpack://fable-flow/./src/App.vue?");

/***/ }),

/***/ "./src/components/AudioPlayer.vue?vue&type=template&id=0eb2a4d7&scoped=true":
/*!**********************************************************************************!*\
  !*** ./src/components/AudioPlayer.vue?vue&type=template&id=0eb2a4d7&scoped=true ***!
  \**********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   render: function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AudioPlayer_vue_vue_type_template_id_0eb2a4d7_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render; }\n/* harmony export */ });\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AudioPlayer_vue_vue_type_template_id_0eb2a4d7_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./AudioPlayer.vue?vue&type=template&id=0eb2a4d7&scoped=true */ \"./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/AudioPlayer.vue?vue&type=template&id=0eb2a4d7&scoped=true\");\n\n\n//# sourceURL=webpack://fable-flow/./src/components/AudioPlayer.vue?");

/***/ }),

/***/ "./src/components/AudioPlayerPlayButton.vue?vue&type=template&id=ad89ba86":
/*!********************************************************************************!*\
  !*** ./src/components/AudioPlayerPlayButton.vue?vue&type=template&id=ad89ba86 ***!
  \********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   render: function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AudioPlayerPlayButton_vue_vue_type_template_id_ad89ba86__WEBPACK_IMPORTED_MODULE_0__.render; }\n/* harmony export */ });\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AudioPlayerPlayButton_vue_vue_type_template_id_ad89ba86__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./AudioPlayerPlayButton.vue?vue&type=template&id=ad89ba86 */ \"./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/AudioPlayerPlayButton.vue?vue&type=template&id=ad89ba86\");\n\n\n//# sourceURL=webpack://fable-flow/./src/components/AudioPlayerPlayButton.vue?");

/***/ }),

/***/ "./src/components/AudioPlayerRewindButton.vue?vue&type=template&id=166a9bc4":
/*!**********************************************************************************!*\
  !*** ./src/components/AudioPlayerRewindButton.vue?vue&type=template&id=166a9bc4 ***!
  \**********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   render: function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AudioPlayerRewindButton_vue_vue_type_template_id_166a9bc4__WEBPACK_IMPORTED_MODULE_0__.render; }\n/* harmony export */ });\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AudioPlayerRewindButton_vue_vue_type_template_id_166a9bc4__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./AudioPlayerRewindButton.vue?vue&type=template&id=166a9bc4 */ \"./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/AudioPlayerRewindButton.vue?vue&type=template&id=166a9bc4\");\n\n\n//# sourceURL=webpack://fable-flow/./src/components/AudioPlayerRewindButton.vue?");

/***/ }),

/***/ "./src/components/AudioPlayerTimeline.vue?vue&type=template&id=5af3d490":
/*!******************************************************************************!*\
  !*** ./src/components/AudioPlayerTimeline.vue?vue&type=template&id=5af3d490 ***!
  \******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   render: function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AudioPlayerTimeline_vue_vue_type_template_id_5af3d490__WEBPACK_IMPORTED_MODULE_0__.render; }\n/* harmony export */ });\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AudioPlayerTimeline_vue_vue_type_template_id_5af3d490__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./AudioPlayerTimeline.vue?vue&type=template&id=5af3d490 */ \"./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/AudioPlayerTimeline.vue?vue&type=template&id=5af3d490\");\n\n\n//# sourceURL=webpack://fable-flow/./src/components/AudioPlayerTimeline.vue?");

/***/ }),

/***/ "./src/components/AudioPlayerTimeview.vue?vue&type=template&id=5a18402e":
/*!******************************************************************************!*\
  !*** ./src/components/AudioPlayerTimeview.vue?vue&type=template&id=5a18402e ***!
  \******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   render: function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AudioPlayerTimeview_vue_vue_type_template_id_5a18402e__WEBPACK_IMPORTED_MODULE_0__.render; }\n/* harmony export */ });\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AudioPlayerTimeview_vue_vue_type_template_id_5a18402e__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./AudioPlayerTimeview.vue?vue&type=template&id=5a18402e */ \"./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/AudioPlayerTimeview.vue?vue&type=template&id=5a18402e\");\n\n\n//# sourceURL=webpack://fable-flow/./src/components/AudioPlayerTimeview.vue?");

/***/ }),

/***/ "./src/components/AuthorSelect.vue?vue&type=template&id=521a91d2":
/*!***********************************************************************!*\
  !*** ./src/components/AuthorSelect.vue?vue&type=template&id=521a91d2 ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   render: function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AuthorSelect_vue_vue_type_template_id_521a91d2__WEBPACK_IMPORTED_MODULE_0__.render; }\n/* harmony export */ });\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AuthorSelect_vue_vue_type_template_id_521a91d2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./AuthorSelect.vue?vue&type=template&id=521a91d2 */ \"./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/AuthorSelect.vue?vue&type=template&id=521a91d2\");\n\n\n//# sourceURL=webpack://fable-flow/./src/components/AuthorSelect.vue?");

/***/ }),

/***/ "./src/components/BookInfo.vue?vue&type=template&id=c839b832":
/*!*******************************************************************!*\
  !*** ./src/components/BookInfo.vue?vue&type=template&id=c839b832 ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   render: function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_BookInfo_vue_vue_type_template_id_c839b832__WEBPACK_IMPORTED_MODULE_0__.render; }\n/* harmony export */ });\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_BookInfo_vue_vue_type_template_id_c839b832__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./BookInfo.vue?vue&type=template&id=c839b832 */ \"./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/BookInfo.vue?vue&type=template&id=c839b832\");\n\n\n//# sourceURL=webpack://fable-flow/./src/components/BookInfo.vue?");

/***/ }),

/***/ "./src/components/BookSelect.vue?vue&type=template&id=3c9db8f5":
/*!*********************************************************************!*\
  !*** ./src/components/BookSelect.vue?vue&type=template&id=3c9db8f5 ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   render: function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_BookSelect_vue_vue_type_template_id_3c9db8f5__WEBPACK_IMPORTED_MODULE_0__.render; }\n/* harmony export */ });\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_BookSelect_vue_vue_type_template_id_3c9db8f5__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./BookSelect.vue?vue&type=template&id=3c9db8f5 */ \"./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/BookSelect.vue?vue&type=template&id=3c9db8f5\");\n\n\n//# sourceURL=webpack://fable-flow/./src/components/BookSelect.vue?");

/***/ }),

/***/ "./src/components/ChapterInfo.vue?vue&type=template&id=1f1adf1b":
/*!**********************************************************************!*\
  !*** ./src/components/ChapterInfo.vue?vue&type=template&id=1f1adf1b ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   render: function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ChapterInfo_vue_vue_type_template_id_1f1adf1b__WEBPACK_IMPORTED_MODULE_0__.render; }\n/* harmony export */ });\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ChapterInfo_vue_vue_type_template_id_1f1adf1b__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ChapterInfo.vue?vue&type=template&id=1f1adf1b */ \"./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/ChapterInfo.vue?vue&type=template&id=1f1adf1b\");\n\n\n//# sourceURL=webpack://fable-flow/./src/components/ChapterInfo.vue?");

/***/ }),

/***/ "./src/components/NavBar.vue?vue&type=template&id=4295d220":
/*!*****************************************************************!*\
  !*** ./src/components/NavBar.vue?vue&type=template&id=4295d220 ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   render: function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_NavBar_vue_vue_type_template_id_4295d220__WEBPACK_IMPORTED_MODULE_0__.render; }\n/* harmony export */ });\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_NavBar_vue_vue_type_template_id_4295d220__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./NavBar.vue?vue&type=template&id=4295d220 */ \"./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/NavBar.vue?vue&type=template&id=4295d220\");\n\n\n//# sourceURL=webpack://fable-flow/./src/components/NavBar.vue?");

/***/ }),

/***/ "./src/views/BookSelectionView.vue?vue&type=template&id=ae2571c4":
/*!***********************************************************************!*\
  !*** ./src/views/BookSelectionView.vue?vue&type=template&id=ae2571c4 ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   render: function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_BookSelectionView_vue_vue_type_template_id_ae2571c4__WEBPACK_IMPORTED_MODULE_0__.render; }\n/* harmony export */ });\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_BookSelectionView_vue_vue_type_template_id_ae2571c4__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./BookSelectionView.vue?vue&type=template&id=ae2571c4 */ \"./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/BookSelectionView.vue?vue&type=template&id=ae2571c4\");\n\n\n//# sourceURL=webpack://fable-flow/./src/views/BookSelectionView.vue?");

/***/ }),

/***/ "./src/views/ChapterPlayView.vue?vue&type=template&id=e9ee0dc8":
/*!*********************************************************************!*\
  !*** ./src/views/ChapterPlayView.vue?vue&type=template&id=e9ee0dc8 ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   render: function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ChapterPlayView_vue_vue_type_template_id_e9ee0dc8__WEBPACK_IMPORTED_MODULE_0__.render; }\n/* harmony export */ });\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ChapterPlayView_vue_vue_type_template_id_e9ee0dc8__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ChapterPlayView.vue?vue&type=template&id=e9ee0dc8 */ \"./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/ChapterPlayView.vue?vue&type=template&id=e9ee0dc8\");\n\n\n//# sourceURL=webpack://fable-flow/./src/views/ChapterPlayView.vue?");

/***/ }),

/***/ "./src/components/AudioPlayer.vue?vue&type=style&index=0&id=0eb2a4d7&scoped=true&lang=scss":
/*!*************************************************************************************************!*\
  !*** ./src/components/AudioPlayer.vue?vue&type=style&index=0&id=0eb2a4d7&scoped=true&lang=scss ***!
  \*************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_style_loader_index_js_clonedRuleSet_22_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_22_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_22_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_22_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AudioPlayer_vue_vue_type_style_index_0_id_0eb2a4d7_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-style-loader/index.js??clonedRuleSet-22.use[0]!../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-22.use[1]!../../node_modules/vue-loader/dist/stylePostLoader.js!../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-22.use[2]!../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22.use[3]!../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./AudioPlayer.vue?vue&type=style&index=0&id=0eb2a4d7&scoped=true&lang=scss */ \"./node_modules/vue-style-loader/index.js??clonedRuleSet-22.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-22.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-22.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/AudioPlayer.vue?vue&type=style&index=0&id=0eb2a4d7&scoped=true&lang=scss\");\n/* harmony import */ var _node_modules_vue_style_loader_index_js_clonedRuleSet_22_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_22_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_22_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_22_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AudioPlayer_vue_vue_type_style_index_0_id_0eb2a4d7_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_clonedRuleSet_22_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_22_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_22_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_22_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AudioPlayer_vue_vue_type_style_index_0_id_0eb2a4d7_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_clonedRuleSet_22_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_22_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_22_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_22_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AudioPlayer_vue_vue_type_style_index_0_id_0eb2a4d7_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== \"default\") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = function(key) { return _node_modules_vue_style_loader_index_js_clonedRuleSet_22_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_22_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_22_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_22_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AudioPlayer_vue_vue_type_style_index_0_id_0eb2a4d7_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_0__[key]; }.bind(0, __WEBPACK_IMPORT_KEY__)\n/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);\n\n\n//# sourceURL=webpack://fable-flow/./src/components/AudioPlayer.vue?");

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js??clonedRuleSet-22.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-22.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-22.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/AudioPlayer.vue?vue&type=style&index=0&id=0eb2a4d7&scoped=true&lang=scss":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader/index.js??clonedRuleSet-22.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-22.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-22.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/AudioPlayer.vue?vue&type=style&index=0&id=0eb2a4d7&scoped=true&lang=scss ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("// style-loader: Adds some css to the DOM by adding a <style> tag\n\n// load the styles\nvar content = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-22.use[1]!../../node_modules/vue-loader/dist/stylePostLoader.js!../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-22.use[2]!../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22.use[3]!../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./AudioPlayer.vue?vue&type=style&index=0&id=0eb2a4d7&scoped=true&lang=scss */ \"./node_modules/css-loader/dist/cjs.js??clonedRuleSet-22.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-22.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/AudioPlayer.vue?vue&type=style&index=0&id=0eb2a4d7&scoped=true&lang=scss\");\nif(content.__esModule) content = content.default;\nif(typeof content === 'string') content = [[module.id, content, '']];\nif(content.locals) module.exports = content.locals;\n// add the styles to the DOM\nvar add = (__webpack_require__(/*! !../../node_modules/vue-style-loader/lib/addStylesClient.js */ \"./node_modules/vue-style-loader/lib/addStylesClient.js\")[\"default\"])\nvar update = add(\"7e0b9aeb\", content, false, {\"sourceMap\":false,\"shadowMode\":false});\n// Hot Module Replacement\nif(false) {}\n\n//# sourceURL=webpack://fable-flow/./src/components/AudioPlayer.vue?./node_modules/vue-style-loader/index.js??clonedRuleSet-22.use%5B0%5D!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-22.use%5B1%5D!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-22.use%5B2%5D!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22.use%5B3%5D!./node_modules/vue-loader/dist/index.js??ruleSet%5B0%5D.use%5B0%5D");

/***/ }),

/***/ "./src/assets/scss/theme_main.scss":
/*!*****************************************!*\
  !*** ./src/assets/scss/theme_main.scss ***!
  \*****************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("// style-loader: Adds some css to the DOM by adding a <style> tag\n\n// load the styles\nvar content = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-24.use[1]!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-24.use[2]!../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-24.use[3]!./theme_main.scss */ \"./node_modules/css-loader/dist/cjs.js??clonedRuleSet-24.use[1]!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-24.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-24.use[3]!./src/assets/scss/theme_main.scss\");\nif(content.__esModule) content = content.default;\nif(typeof content === 'string') content = [[module.id, content, '']];\nif(content.locals) module.exports = content.locals;\n// add the styles to the DOM\nvar add = (__webpack_require__(/*! !../../../node_modules/vue-style-loader/lib/addStylesClient.js */ \"./node_modules/vue-style-loader/lib/addStylesClient.js\")[\"default\"])\nvar update = add(\"a162f00c\", content, false, {\"sourceMap\":false,\"shadowMode\":false});\n// Hot Module Replacement\nif(false) {}\n\n//# sourceURL=webpack://fable-flow/./src/assets/scss/theme_main.scss?");

/***/ }),

/***/ "./src/assets/img/book-yellow.svg":
/*!****************************************!*\
  !*** ./src/assets/img/book-yellow.svg ***!
  \****************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
eval("module.exports = __webpack_require__.p + \"img/book-yellow.134fc891.svg\";\n\n//# sourceURL=webpack://fable-flow/./src/assets/img/book-yellow.svg?");

/***/ }),

/***/ "./src/assets/img/caret_down.svg":
/*!***************************************!*\
  !*** ./src/assets/img/caret_down.svg ***!
  \***************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
eval("module.exports = __webpack_require__.p + \"img/caret_down.58046fe5.svg\";\n\n//# sourceURL=webpack://fable-flow/./src/assets/img/caret_down.svg?");

/***/ }),

/***/ "./src/assets/img/cogs-yellow.svg":
/*!****************************************!*\
  !*** ./src/assets/img/cogs-yellow.svg ***!
  \****************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
eval("module.exports = __webpack_require__.p + \"img/cogs-yellow.ff85b945.svg\";\n\n//# sourceURL=webpack://fable-flow/./src/assets/img/cogs-yellow.svg?");

/***/ }),

/***/ "./src/assets/img/logo.png":
/*!*********************************!*\
  !*** ./src/assets/img/logo.png ***!
  \*********************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
eval("module.exports = __webpack_require__.p + \"img/logo.6444ad9b.png\";\n\n//# sourceURL=webpack://fable-flow/./src/assets/img/logo.png?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	!function() {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = function(result, chunkIds, fn, priority) {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var chunkIds = deferred[i][0];
/******/ 				var fn = deferred[i][1];
/******/ 				var priority = deferred[i][2];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every(function(key) { return __webpack_require__.O[key](chunkIds[j]); })) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	!function() {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = function(chunkId) {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce(function(promises, key) {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	!function() {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.u = function(chunkId) {
/******/ 			// return url for filenames based on template
/******/ 			return "js/" + chunkId + ".js";
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	!function() {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/load script */
/******/ 	!function() {
/******/ 		var inProgress = {};
/******/ 		var dataWebpackPrefix = "fable-flow:";
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = function(url, done, key, chunkId) {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.setAttribute("data-webpack", dataWebpackPrefix + key);
/******/ 		
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = function(prev, event) {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach(function(fn) { return fn(event); });
/******/ 				if(prev) return prev(event);
/******/ 			}
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	!function() {
/******/ 		__webpack_require__.p = "";
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	!function() {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"app": 0
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.f.j = function(chunkId, promises) {
/******/ 				// JSONP chunk loading for javascript
/******/ 				var installedChunkData = __webpack_require__.o(installedChunks, chunkId) ? installedChunks[chunkId] : undefined;
/******/ 				if(installedChunkData !== 0) { // 0 means "already installed".
/******/ 		
/******/ 					// a Promise means "currently loading".
/******/ 					if(installedChunkData) {
/******/ 						promises.push(installedChunkData[2]);
/******/ 					} else {
/******/ 						if(true) { // all chunks have JS
/******/ 							// setup Promise in chunk cache
/******/ 							var promise = new Promise(function(resolve, reject) { installedChunkData = installedChunks[chunkId] = [resolve, reject]; });
/******/ 							promises.push(installedChunkData[2] = promise);
/******/ 		
/******/ 							// start chunk loading
/******/ 							var url = __webpack_require__.p + __webpack_require__.u(chunkId);
/******/ 							// create error before stack unwound to get useful stacktrace later
/******/ 							var error = new Error();
/******/ 							var loadingEnded = function(event) {
/******/ 								if(__webpack_require__.o(installedChunks, chunkId)) {
/******/ 									installedChunkData = installedChunks[chunkId];
/******/ 									if(installedChunkData !== 0) installedChunks[chunkId] = undefined;
/******/ 									if(installedChunkData) {
/******/ 										var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 										var realSrc = event && event.target && event.target.src;
/******/ 										error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 										error.name = 'ChunkLoadError';
/******/ 										error.type = errorType;
/******/ 										error.request = realSrc;
/******/ 										installedChunkData[1](error);
/******/ 									}
/******/ 								}
/******/ 							};
/******/ 							__webpack_require__.l(url, loadingEnded, "chunk-" + chunkId, chunkId);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 		};
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = function(chunkId) { return installedChunks[chunkId] === 0; };
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = function(parentChunkLoadingFunction, data) {
/******/ 			var chunkIds = data[0];
/******/ 			var moreModules = data[1];
/******/ 			var runtime = data[2];
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some(function(id) { return installedChunks[id] !== 0; })) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkfable_flow"] = self["webpackChunkfable_flow"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["chunk-vendors"], function() { return __webpack_require__("./src/main.js"); })
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;