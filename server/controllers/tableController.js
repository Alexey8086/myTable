
const db = require('../database')


class TableController {

  async getColumns (req, res) {
    try {
      const columns = await db.query('SELECT * FROM cities')
  
      return res.json({
        rows: columns.rows,
        count: columns.rowCount
      })

    } catch (error) {
      console.warn('Error from getting DATA from DATA BASE', error)
    }

  }

  async getPage (req, res) {
    const limit = req.query.limit
    const page = req.query.page

    // count - 130
    // limit - 10
    // page - 4
    // from 31 to 40

    // from limit*(page-1)+1 to page*limit
    // from 10*(1-1)+1 to 1*10 = from 0 to 10

    // 1 2 3 4 5 6 7 8 9 10 | 11 12 13 14 15 16 17 18 19 20

    try {
      const query = `SELECT * FROM cities WHERE id BETWEEN ${limit*(page - 1) + 1} AND ${page*limit}`
      const { rows, rowCount } = await db.query(query)
  
      return res.json({
        rows: rows,
        count: rowCount
      })

    } catch (error) {
      console.warn('Error from getting DATA from DATA BASE', error)
    }
  }

  async getCount (req, res) {

    try {
      const { rowCount } = await db.query(`SELECT * FROM cities`)
  
      return res.json({
        count: rowCount
      })

    } catch (error) {
      console.warn('Error from getting DATA from DATA BASE', error)
    }
  }
}

module.exports = new TableController()