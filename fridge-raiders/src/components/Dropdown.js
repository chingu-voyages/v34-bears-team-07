const Dropdown = () => {
  return (
    <div>
        <select name="sort" id="sort">
        <option value="Default" disabled>Select food category</option>
        <option value="Meat">Meat</option>
        <option value="Vegetables">Vegetables</option>
        <option value="Fruit">Fruit</option>
        <option value="Bakery">Bakery</option>
      </select>
    </div>
  );
};

export default Dropdown;
