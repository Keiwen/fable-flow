<template>
  <div>
    <h1>Book selection</h1>
    <author-select class="selection selection-author"></author-select>
    <book-select class="selection selection-book"></book-select>
  </div>
</template>

<script>
import AuthorSelect from '@/components/AuthorSelect'
import BookSelect from '@/components/BookSelect'

export default {
  name: 'BookSelectionView',
  components: {
    AuthorSelect,
    BookSelect
  }
}
</script>
