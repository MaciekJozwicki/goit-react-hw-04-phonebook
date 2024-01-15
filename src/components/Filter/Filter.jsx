const Filter = filter => {
  const { onChange } = filter;

  const handleInputChange = e => {
    onChange(e);
  };
  return (
    <label>
      Find contacts by name
      <input onChange={handleInputChange} />
    </label>
  );
};

export default Filter;
