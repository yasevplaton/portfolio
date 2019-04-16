<template lang="pug">
  .tags
    ul.tags__list
      li.tags__item(
        v-for="(tag, index) in tags"
        :key="index"
      ) {{tag}}
</template>

<script>
export default {
  props: {
    tags: Array
  }
}
</script>


<style lang="postcss" scoped>
@import "../../../styles/mixins.pcss";


.tags__list {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: flex-end;
}

.tags__item {
  border-radius: 14.9px;
  padding: 7px 13px;
  background: #fff;
  font-size: 13px;
  font-weight: 600;
  color: rgba(40, 51, 64, 0.7);
  margin-right: 8px;
  margin-bottom: 5px;
}
</style>
