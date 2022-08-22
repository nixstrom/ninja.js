import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import Pagination, { calculatePageCount } from './Pagination'

const initialProps = {
  paginationState: [0, (_num) => {}],
  totalRowCount: 42
}

const setup = (props = {}) => render(<Pagination {...initialProps} {...props} />)

describe('<Pagination />', () => {
  it('will not render anything if there are no pages', () => {
    setup({ totalRowCount: 4 })

    expect(screen.queryByRole('list')).not.toBeInTheDocument()
  })

  it('will render pages', () => {
    setup()

    expect(screen.getAllByRole('listitem').length).toBe(9)
    expect(screen.getByText('9')).toBeInTheDocument()
  })

  it('will change page when clicking on a page item', () => {
    const mockChangePage = jest.fn()
    const paginationState = [0, mockChangePage]
    setup({ paginationState })

    expect(mockChangePage).not.toHaveBeenCalled()

    fireEvent.click(screen.getByText('7'))

    expect(mockChangePage).toHaveBeenCalledTimes(1)
    // The actual value is 0-indexed
    expect(mockChangePage).toHaveBeenCalledWith(6)
  })

  describe('calculatePageCount', () => {
    it('will not return any pages if it is configured to have zero rows per page', () => {
      // Prevents division by zero
      expect(calculatePageCount(initialProps.totalRowCount, 0)).toStrictEqual(0)
    })

    it('will calculate the total page count', () => {
      expect(calculatePageCount(initialProps.totalRowCount)).toStrictEqual(9)
    })
  })
})
