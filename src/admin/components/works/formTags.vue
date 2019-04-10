<template lang="pug">
  ul.form__tags-list
    li.tag(
      v-for="(tag, index) in editedTags"
      :key="index"
    )
      span.tag__name {{tag}}
      button(
        type="button"
        @click="REMOVE_TAG(tag)"
      ).btn.btn--remove-tag
</template>

<script>
import { mapState, mapMutations } from 'vuex';

export default {
  computed: {
    ...mapState('works', {
      editedTags: state => state.editedTags
    })
  },
  methods: {
    ...mapMutations('works', ['REMOVE_TAG'])
  }
}
</script>


<style lang="postcss" scoped>
@import "../../../styles/mixins.pcss";
.tag {
  font-size: 13px;
  font-weight: 600;
  color: rgba(40, 51, 64, 0.7);
  border-radius: 14.9px;
  background-color: #f4f4f4;
  padding: 8px 12px;
  display: flex;
  align-items: center;
  margin-right: 9px;
}

.tag__name {
  margin-right: 10px;
}
</style>
