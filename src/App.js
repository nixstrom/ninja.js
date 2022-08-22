import React from 'react';
import PropTypes from 'prop-types';
import DataTable from './DataTable/index.jsx';
import './App.css';

const App = ({ rows }) => (
  <div className="container mt-3">
    <DataTable rows={rows} locale="da" />
  </div>
);

App.propTypes = {
  rows: PropTypes.arrayOf(
    PropTypes.exact({
      name1: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      per_id: PropTypes.number.isRequired,
      edit_path: PropTypes.string.isRequired
    })
  ).isRequired
};

export default App;

