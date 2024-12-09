import { ref } from 'vue'

const flashMessages = ref([])

export function useFlashMessages () {
  const addMessage = (messageObject) => {
    flashMessages.value.push(messageObject)
  }

  const addSuccessMessage = (content, messageTitle = '', toPersistOnce = false) => {
    addMessage({ type: 'success', message: content, title: messageTitle, persistOnce: toPersistOnce })
  }

  const addInfoMessage = (content, messageTitle = '', toPersistOnce = false) => {
    addMessage({ type: 'info', message: content, title: messageTitle, persistOnce: toPersistOnce })
  }

  const addWarningMessage = (content, messageTitle = '', toPersistOnce = false) => {
    addMessage({ type: 'warning', message: content, title: messageTitle, persistOnce: toPersistOnce })
  }

  const addErrorMessage = (content, messageTitle = '', toPersistOnce = false) => {
    addMessage({ type: 'error', message: content, title: messageTitle, persistOnce: toPersistOnce })
  }

  const clearMessage = (index) => {
    flashMessages.value.splice(index, 1)
  }

  const clearAllMessages = () => {
    const persisted = []
    for (const message of flashMessages.value) {
      if (message.persistOnce) {
        message.persistOnce = false
        persisted.push(message)
      }
    }
    flashMessages.value = persisted
  }

  return { flashMessages, addSuccessMessage, addInfoMessage, addWarningMessage, addErrorMessage, clearMessage, clearAllMessages }
}
