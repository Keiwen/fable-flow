export function useMediaSession (audioControl) {
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
      if (audioControl) audioControl.trackTimeBack()
    })

    navigator.mediaSession.setActionHandler('nexttrack', function () {
      // code to manage next track button => next chapter
      if (audioControl) audioControl.nextChapter()
    })
  }

  return { setup }
}
