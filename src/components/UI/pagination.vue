<template>

    <div class="page__container">
      <div
        class="page"
        :key="pageNumber"
        v-for="pageNumber in totalPages"
        :class="{
          'page-selected': page === pageNumber
        }"
        @click="$emit('paginate', pageNumber)"
      > {{ pageNumber }} </div>
    </div>

</template>
  
  <script>

    export default {
        name: 'my-pagination',

        props: {
            totalPages: {
                type: Number,
                required: true
            },
            page: {
                type: Number,
                required: true
            }
        }

    }

  </script>
  

  <style scoped>

    .page__container {
        display: flex;
        flex-direction: row;
        gap: 10px;
        margin-top: 80px;
    }

    .page {
        padding: 5px;
        width: 45px;
        height: 45px;
        text-align: center;
        border: 1px solid gray;
        cursor: pointer;
        border-radius: 15px;
        box-shadow: -1px 10px 14px 2px rgba(0, 0, 0, 0.11);
    }

    .page:hover{
        background-color: rgb(222, 222, 222);
        transition: 0.3s;
    }

    .page-selected {
        background-color: rgb(222, 222, 222);
        color: rgb(53, 75, 222);
    }

  </style>
  