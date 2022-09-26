<template>

    <div v-if="isLoading" class="loader">
        <h1>Загрузка данных ...</h1>
    </div>

</template>
  
  <script>

    export default {
        name: 'my-loader',

        props: {
            isLoading: {
                type: Boolean,
                required: true
            }
        }

    }

  </script>
  

  <style scoped>
    .loader {
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        box-sizing: border-box;
        position: absolute;
        display: flex;
        padding-top: 350px;
        justify-content: center;
        background-color: rgba(0, 0, 0, 0.52);
    }

    .loader>h1 {
        color:rgb(51, 175, 241);
    }
  </style>
  