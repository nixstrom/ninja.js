import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Pagination from './Pagination.jsx'
import Row from './Row.jsx'
import Search from './Search.jsx'

const calculateTotalNumberOfPages = (rowsFound, rowsPerPage) => {
  if (rowsPerPage == 0) return 0
  return Math.ceil(rowsFound.length / rowsPerPage)
}

const DataTable = ({ rows, rowsPerPage }) => {
  const [currentPageNumber, setCurrentPageNumber] = useState(0)
  const [currentRows, setCurrentRows] = useState(rows)
  const [totalNumberOfPages, setTotalNumberOfPages] = useState(() =>
    calculateTotalNumberOfPages(rows, rowsPerPage)
  )

  const search = (event) => {
    const text = event.target.value
    let rowsFound = rows

    if (text) {
      rowsFound = rows.filter((row) => {
        return (
          row.name1.toLowerCase().search(text.toLowerCase()) > -1 ||
          (row.email && row.email.toLowerCase().search(text.toLowerCase()) > -1)
        )
      })
    }

    setCurrentPageNumber(0)
    setCurrentRows(rowsFound)
    setTotalNumberOfPages(calculateTotalNumberOfPages(rowsFound, rowsPerPage))
  }

  const changeToPageNumber = (pageNumber) => {
    setCurrentPageNumber(pageNumber)
  }

  const rowsInPageNumber = (pageNumber) => {
    const startIndex = pageNumber * rowsPerPage
    return [startIndex, startIndex + rowsPerPage]
  }

  const rowsToRender = currentRows
    .map((row) => <Row key={row.per_id} row={row} />)
    .slice(...rowsInPageNumber(currentPageNumber))

  return (
    <div>
      <Search onSearch={search} />
      <table>
        <tbody>{rowsToRender}</tbody>
      </table>
      <Pagination
        currentPageNumber={currentPageNumber}
        totalNumberOfPages={totalNumberOfPages}
        onChange={changeToPageNumber}
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
  ).isRequired,
  rowsPerPage: PropTypes.number.isRequired
}

export default DataTable

