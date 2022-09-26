<template>

    <tr 
        v-for="row in rows"
        :key="row.id"
    >
      <td> {{row.date}} </td>
      <td> {{row.title}} </td>
      <td> {{row.amount}} </td>
      <td> {{row.distance}} </td>
    </tr>

  </template>
  
  <script>

    export default {
        name: 'table-row',

        props: {
            rows: {
                type: Array,
                required: true
            }
        }

    }

  </script>
  
  <style>

  </style>
  