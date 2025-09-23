import { useAudioControl } from '@/composables/audioControl'

export function useMediaSession () {
  const setup = (author, book, chapter) => {
    if ('mediaSession' in navigator) {
      const metadata = {
        artist: author,
        album: book,
        title: chapter
      }
      navigator.mediaSession.metadata = new MediaMetadata(metadata)
    }

    navigator.mediaSession.setActionHandler('previoustrack', function () {
      // code to manage previous track button => back 10s?
      useAudioControl().trackTimeBack()
    })

    navigator.mediaSession.setActionHandler('nexttrack', function () {
      // code to manage next track button => next chapter
      useAudioControl().nextChapter()
    })
  }

  const updateProgress = (audioCurrentTime, audioDuration) => {
    if (isNaN(audioDuration)) audioDuration = 0
    navigator.mediaSession.setPositionState({
      duration: audioDuration,
      playbackRate: 1,
      position: audioCurrentTime
    })
  }

  return { setup, updateProgress }
}
