<template>
    <svg viewBox="0 0 24 24">
      <use :xlink:href="`#icon-${login}`" />
    </svg>
  </template>
  
  <script>
  export default {
    props: {
      name: {
        type: String,
        required: true
      }
    },
    computed: {
      icon() {
        return require(``);
      }
    }
  };
  </script>
  