import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

const initialProps = {
  rows: [],
  locale: 'da',
  rowsPerPage: 5
};

const rows = [
  {
    name1: 'Mads L. Klausen',
    email: 'MadsLKlausen@jourrapide.com',
    edit_path: 'http://google.com',
    per_id: 1
  },
  {
    name1: 'Alfred K. Krogh',
    email: 'AlfredKKrogh@armyspy.com',
    edit_path: 'http://google.com',
    per_id: 2
  },
  {
    name1: 'Silas L. Bertelsen',
    email: 'SilasLBertelsen@armyspy.com',
    edit_path: 'http://google.com',
    per_id: 3
  },
  {
    name1: 'Mia A. Johnsen',
    email: 'MiaAJohnsen@dayrep.com',
    edit_path: 'http://google.com',
    per_id: 4
  },
  {
    name1: 'Alfred S. Schou',
    email: 'AlfredSSchou@jourrapide.com',
    edit_path: 'http://google.com',
    per_id: 5
  }
];

const setup = (props = {}) => render(<App {...initialProps} {...props} />);

it('can display an empty table', () => {
  setup();

  expect(screen.getByRole('table')).toBeInTheDocument();
});

it('can display with data', () => {
  setup({ rows });

  expect(screen.getAllByRole('row').length).toBe(5);
});

it('can filter data based on input', () => {
  setup({ rows });

  const searchInput = screen.getByRole('searchbox');

  fireEvent.change(searchInput, { target: { value: 'k' } });

  expect(screen.getAllByRole('row').length).toBe(2);
});

