import React from 'react'
import PropTypes from 'prop-types'

const Page = ({ pageNumber, currentPageNumber, onChange }) => {
  const className = currentPageNumber === pageNumber ? 'page-link button-outline' : 'page-link'

  const handleOnClick = () => onChange(pageNumber)

  return (
    <li className="page-item mr-1">
      <button className={className} onClick={handleOnClick}>
        {pageNumber + 1}
      </button>
    </li>
  )
}

Page.propTypes = {
  pageNumber: PropTypes.number.isRequired,
  currentPageNumber: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired
}

export default Page

