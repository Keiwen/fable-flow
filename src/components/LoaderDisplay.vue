<script setup>

</script>

<template>
  <span class="loader">
  </span>
</template>

<style scoped lang="scss">
  .loader {
    width: 50px;
    height: 50px;
    display: inline-block;

    // ellipsis
    transform: rotateZ(45deg);
    perspective: 1000px;
    border-radius: 50%;
    color: var(--primary);
    &:before,&:after {
      content: '';
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      width: inherit;
      height: inherit;
      border-radius: 50%;
      transform: rotateX(70deg);
      animation: 1s spin linear infinite;
    }
    &:after {
      color: var(--secondary);
      transform: rotateY(70deg);
      animation: 1s spin2 linear infinite;
    }
  }

  @keyframes spin {
    0%   { box-shadow: 5px  0    0 0 currentColor; }
    12%  { box-shadow: 5px  5px  0 0 currentColor; }
    25%  { box-shadow: 0    5px  0 0 currentColor; }
    37%  { box-shadow: -5px 5px  0 0 currentColor; }
    50%  { box-shadow: -5px 0    0 0 currentColor; }
    62%  { box-shadow: -5px -5px 0 0 currentColor; }
    75%  { box-shadow: 0    -5px 0 0 currentColor; }
    87%  { box-shadow: 5px  -5px 0 0 currentColor; }
    100% { box-shadow: 5px  0    0 0 currentColor; }
  }

  @keyframes spin2 {
    0%   { box-shadow: -5px 0    0 0 currentColor; }
    12%  { box-shadow: -5px -5px 0 0 currentColor; }
    25%  { box-shadow: 0    -5px 0 0 currentColor; }
    37%  { box-shadow: 5px  -5px 0 0 currentColor; }
    50%  { box-shadow: 5px  0    0 0 currentColor; }
    62%  { box-shadow: 5px  5px  0 0 currentColor; }
    75%  { box-shadow: 0    5px  0 0 currentColor; }
    87%  { box-shadow: -5px 5px  0 0 currentColor; }
    100% { box-shadow: -5px 0    0 0 currentColor; }
  }
</style>
