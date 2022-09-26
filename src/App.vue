<template>

  <my-loader :isLoading="isLoading" />

  <div class="table-container">
    <table>
      <tr>
        <th>Дата</th>
        <th>Название</th>
        <th>Количество</th>
        <th>Расстояние</th>
      </tr>

<!-- Фильтрация -->
      <tr>
        <td colspan="1">
          <my-select
            @update="(value) => selectedSort=value"
            :options="sortOption"
          />
        </td>

        <td colspan="1">
          <my-select
            @update="(value) => selectedCondition=value"
            :options="conditionOption"
          />
        </td>

        <td colspan="2">
          <my-input
            v-model:value="searchQuery"
            placeholder="Введите значение для сортировки"
          />
        </td>
      </tr>
<!-- Фильтрация -->

      <table-row
        :rows="searchRows"
      />
    </table>

    <my-pagination
      :totalPages="totalPages"
      :page="page"
      @paginate="changePageHandler"
    />

  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'App',

  data () {

    return {
      sortOption: [
        {value: 'title', name: 'Название'},
        {value: 'amount', name: 'Количество'},
        {value: 'distance', name: 'Расстояние'}
      ],
      conditionOption: [
        {value: 'contains', name: 'Содержит'},
        {value: 'equal', name: 'Равно'},
        {value: 'larger', name: 'Больше'},
        {value: 'less', name: 'Меньше'}
      ],
      selectedSort: 'title',
      selectedCondition: 'contains',
      searchQuery: '',
      rows: '',
      isLoading: false,
      page: 1,
      totalPages: 0,
      limit: 10
    }
  },

  methods: {

    async fetchData () {
      this.isLoading = true

      try {
        setTimeout(async () => {
          const { data } = await axios.get('http://localhost:5000/api/page', {
            params: {
              page: this.page,
              limit: this.limit
            }
          })
          
          const responce = await axios.get('http://localhost:5000/api/amount')

          this.totalPages = Math.ceil(responce.data.count / this.limit)
          this.rows = data.rows
          this.isLoading = false
        }, 500)

      } catch (e) {
        console.error(e)
      }
    },

    changePageHandler (pageNumber) {
      this.page = pageNumber
    }
  },

  mounted () {
    this.fetchData()

  },

  computed: {
    sortedRows() {
      return [...this.rows].sort((row1, row2) => row1[this.selectedSort]?.localeCompare(row2[this.selectedSort]))
    },
    
    searchRows() {
      if (this.selectedCondition === 'contains') {
        return this.sortedRows.filter(rows => rows[this.selectedSort]?.toLowerCase().includes(this.searchQuery.toLowerCase()))
      } else if (this.selectedCondition === 'equal') {
        return this.sortedRows.filter(rows => rows[this.selectedSort]?.toLowerCase() === this.searchQuery.toLowerCase())
      } else if (this.selectedCondition === 'larger') {
        return this.sortedRows.filter(rows => rows[this.selectedSort]?.toLowerCase() > this.searchQuery.toLowerCase())
      } else if (this.selectedCondition === 'less') {
        return this.sortedRows.filter(rows => rows[this.selectedSort]?.toLowerCase() < this.searchQuery.toLowerCase())
      }
      return 0
    }
  },

  watch: {
    page () {
      this.fetchData()
    }
  }

}
</script>

<style>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-size: 1.25rem;
  }

  body {
    background-color: rgb(240, 240, 240);
  }

  .table-container {
    margin: 0 auto;
    margin-top: 80px;
    width: 750px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  table {
    border: 1px solid #777;
    border-collapse: collapse;
    box-shadow: 5px 6px 25px 9px rgba(0, 0, 0, 0.24);
  }

  td {
    padding: 10px;
    border: solid 1px #777;
    font-family: monospace, sans-serif;
  }

  th {
    padding: 10px 20px 10px 20px;
    background-color: rgb(28, 28, 28);
    font-size: 1.35rem;
    font-weight: bold;
    color:whitesmoke;
  }

</style>
