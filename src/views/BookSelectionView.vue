<template>
  <div>
    <h1>Book selection</h1>
    <author-select></author-select>
    <book-select></book-select>
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
