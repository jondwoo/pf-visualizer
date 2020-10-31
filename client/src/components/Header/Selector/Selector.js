import React from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';

const Selector = ({
  monthOptions,
  yearOptions,
  handleChange,
  defaultValue,
}) => {
  if (monthOptions) {
    return <Select options={monthOptions} defaultValue={defaultValue} />;
  }
  return (
    <Select
      options={yearOptions}
      onChange={handleChange}
      defaultValue={defaultValue}
    />
  );
};

export default Selector;

Selector.propTypes = {
  monthOptions: PropTypes.array,
  yearOptions: PropTypes.array,
  handleChange: PropTypes.func,
  defaultValue: PropTypes.object,
};
