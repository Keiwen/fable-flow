<template>
  <div>
    <h1>Book selection</h1>
    <author-select></author-select>
  </div>
</template>

<script>
import AuthorSelect from '@/components/AuthorSelect'

export default {
  name: 'BookSelectionView',
  components: {
    AuthorSelect
  }
}
</script>
