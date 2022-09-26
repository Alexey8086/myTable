<template>
    <input
      :value="value"
      @input="updateInput"
      type="text"
    >
</template>

<script>
  export default {
      name: 'my-input',
      props: {
        value: [String, Number]
      },
      methods: {
        updateInput(event) {
            this.$emit('update:value', event.target.value)
        }
      }
  }
  
</script>

<style scoped>

  input {
    width: 100%;
    height: 30px;
    border-radius: 5px;
    font-size: 1rem;
    padding: 10px;
    margin-bottom: 10px;
    margin-top: 10px;
    color: rgb(28, 150, 215);
  }

</style>  