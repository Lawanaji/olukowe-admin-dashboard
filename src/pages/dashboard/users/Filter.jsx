import React, { useState } from 'react';

const Filter = () => {
  const [filter, setFilter] = useState('');

  const handleChangeFilter = event => {
    setFilter(event.target.value);
  }

  return (
    <div>
      <label htmlFor="filter">Filter: </label>
      <select
        name="filter"
        value={filter}
        onChange={handleChangeFilter}
      >
        <option value="">Filter</option>
        <option value="name">Subscription</option>
        <option value="date">Retention</option>
        <option value="category">Location</option>
        <option value="category">Gender</option>
      </select>
    </div>
  )
};

export default Filter;