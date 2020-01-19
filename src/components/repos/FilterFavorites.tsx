import React, { ChangeEvent } from 'react';

interface IFilterFavorites {
  setFilter: (favFilter: string) => void;
  favFilter: string;
}

const FilterFavorites: React.FC<IFilterFavorites> = ({
  setFilter,
  favFilter
}) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFilter(e.target.value);
  };
  return (
    <div className="form-group">
      <label>Filter</label>
      <input
        defaultValue={favFilter}
        type="text"
        className="form-control"
        placeholder="Filter Favorites"
        onChange={handleChange}
      />
    </div>
  );
};

export default FilterFavorites;
