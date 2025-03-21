<script setup>
const props = defineProps({
  title: {
    type: String,
    default: "About Us",
  },
});
</script>
<template>
  <div class="title">
    <div class="text">{{ props.title }}</div>
  </div>
</template>
<style scoped lang="less">
.title {
  position: relative;
  animation: right-in 0.7s ease-in-out forwards;
  width: 100%;
  padding: 3rem 0 0.8rem 0;
  border-bottom: 1px solid #000;
  text-align: center;
  text-transform: uppercase;
  font-size: 3rem;
  font-family: "Avenir";
  color: #000000;
}

@keyframes right-in {
  from {
    top: 2rem;
    opacity: 0;
  }

  to {
    top: 0;
    opacity: 1;
  }
}

@media (max-width: 900px) {}
</style>
