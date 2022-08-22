import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Pagination from './Pagination.jsx'
import Row from './Row.jsx'
import Search from './Search.jsx'
import { ITEMS_PER_PAGE } from '../constants.js'

const DataTable = ({ rows }) => {
  const [currentPageNumber, setCurrentPageNumber] = useState(0)
  const [currentRows, setCurrentRows] = useState(rows)

  const search = (event) => {
    const text = event.target.value

    const rowsFound = text
      ? rows.filter(
          (row) =>
            row.name1.toLowerCase().search(text.toLowerCase()) > -1 ||
            (row.email && row.email.toLowerCase().search(text.toLowerCase()) > -1)
        )
      : rows

    setCurrentPageNumber(0)
    setCurrentRows(rowsFound)
  }

  const rowsInPageNumber = (pageNumber) => {
    const startIndex = pageNumber * ITEMS_PER_PAGE
    return [startIndex, startIndex + ITEMS_PER_PAGE]
  }

  return (
    <div>
      <Search onSearch={search} />
      <table>
        <tbody>
          {currentRows.slice(...rowsInPageNumber(currentPageNumber)).map((row) => (
            <Row key={row.per_id} row={row} />
          ))}
        </tbody>
      </table>
      <Pagination
        paginationState={[currentPageNumber, setCurrentPageNumber]}
        totalRowCount={currentRows.length}
      />
    </div>
  )
}

DataTable.propTypes = {
  rows: PropTypes.arrayOf(
    PropTypes.exact({
      name1: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      per_id: PropTypes.number.isRequired,
      edit_path: PropTypes.string.isRequired
    })
  ).isRequired
}

export default DataTable

