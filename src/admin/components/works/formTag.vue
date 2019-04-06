<template lang="pug">
  li.tag
    span.tag__name HTML
    button(type="button").btn.btn--remove-tag
</template>

<script>
export default {
  
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
