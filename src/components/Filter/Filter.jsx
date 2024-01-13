const Filter = filter => {
  const { onChange } = filter;

  const handleInputChange = e => {
    console.log(e.target.value);
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
