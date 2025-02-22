import { ref } from 'vue'

const audioContext = ref(null)

/*
This is designed to 'fake' an active process
The goal is to activate it only when chapter is played
This way, application is considered as active and may avoir a system closure for battery saving
 */

export function useKeepAlive () {
  const start = async () => {
    if (!audioContext.value) {
      audioContext.value = new AudioContext()

      console.log('state is', audioContext.value.state)
      if (audioContext.value.state === 'suspended') {
        await audioContext.value.resume()
      }

      try {
        // inject code to return an active process
        const workletCode = `
          class SilentProcessor extends AudioWorkletProcessor {
            process(inputs, outputs, parameters) {
              return true
            }
          }
          registerProcessor('silent-processor', SilentProcessor)
        `
        const blob = new Blob([workletCode], { type: 'application/javascript' })
        const workletURL = URL.createObjectURL(blob)

        await audioContext.value.audioWorklet.addModule(workletURL)

        const node = new AudioWorkletNode(audioContext.value, 'silent-processor')
        node.connect(audioContext.value.destination)
      } catch (e) {
        console.error('Issue in Audio Worklet', e)
      }
    }
  }

  const stop = () => {
    if (audioContext.value) {
      audioContext.value.close()
      audioContext.value = null
    }
  }

  return { start, stop }
}
