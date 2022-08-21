import React from 'react'
import PropTypes from 'prop-types'

const Row = (props) => {
  const { row } = props

  return (
    <tr>
      <td>
        <a href={row.edit_path}>{row.name1}</a>
        <br />
        <small>{row.email}</small>
      </td>
    </tr>
  )
}

Row.propTypes = {
  row: PropTypes.exact({
    name1: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    per_id: PropTypes.number.isRequired,
    edit_path: PropTypes.string.isRequired
  }).isRequired
}

export default Row

