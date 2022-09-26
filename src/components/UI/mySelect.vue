<template>
    <select v-model="modelValue" @change="$emit('update', modelValue)">
        <option :value="options[0].value">{{ options[0].name }}</option>
        <option
            v-for="option in options.slice(1)"
            :key="option.value"
            :value="option.value"
        >
            {{ option.name }}
        </option>
    </select>
</template>
  
<script>
    export default {
        name: 'my-select',
        data () {
            return {
                modelValue: this.options[0].value
            }
        },
        props: {
            options : {
                type: Array,
                default: () => []
            }
        },
        methods: {
            changeOptions () {

            }
        }
    }
    
</script>
  
<style scoped>
    select {
        font-size: 1rem;
        color: rgb(28, 150, 215);
    }

    select>option {
        font-size: 1rem;
        color: rgb(28, 150, 215);
    }
</style>  