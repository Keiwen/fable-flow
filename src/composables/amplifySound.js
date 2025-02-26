import { computed, ref } from 'vue'
import { useStore } from 'vuex'

const amplifier = ref(null)

export function useAmplifySound () {
  const store = useStore()
  const amplifyLevel = computed(() => store.getters.amplifyLevel)

  const initializeAmplifier = (mediaElmt) => {
    if (!amplifier.value) {
      const context = new AudioContext()
      amplifier.value = {
        context,
        source: context.createMediaElementSource(mediaElmt),
        gain: context.createGain(),
        media: mediaElmt,
        amplify: function (multiplier) { amplifier.value.gain.gain.value = multiplier }
      }
      amplifier.value.source.connect(amplifier.value.gain)
      amplifier.value.gain.connect(context.destination)

      changeLevel(amplifyLevel.value)
    }
  }

  const changeLevel = async (multiplier) => {
    if (!amplifier.value) return
    amplifier.value.amplify(multiplier)
  }

  return { initializeAmplifier, changeLevel }
}
