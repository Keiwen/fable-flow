export function useMediaSession () {
  const setup = (author, book, chapter) => {
    if ('mediaSession' in navigator) {
      navigator.mediaSession.metadata = new MediaMetadata({
        artist: author,
        album: book,
        title: chapter
      })
    }

    navigator.mediaSession.setActionHandler('previoustrack', function () {
      // code to manage previous track button => back 10s?
    })

    navigator.mediaSession.setActionHandler('nexttrack', function () {
      // code to manage next track button => next chapter
    })
  }

  return { setup }
}
