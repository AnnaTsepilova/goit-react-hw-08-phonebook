import PropTypes from 'prop-types';

import {
  FilterContainer,
  FilterContactInput,
} from 'components/Filter/Filter.styled';

export default function Filter({ searchQuery, filterByName }) {
  return (
    <FilterContainer>
      <FilterContactInput
        label="Find contacts by name"
        type="text"
        value={searchQuery}
        onChange={event => filterByName(event.target.value)}
      />
    </FilterContainer>
  );
}

Filter.propTypes = {
  filterByName: PropTypes.func.isRequired,
  searchQuery: PropTypes.string,
};
