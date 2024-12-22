import LineItem from "./LineItem";

const ItemList = ({ items, handleCheck, handleDelete }) => {
  return (
    <ul>
      {Array.isArray(items) && items.length > 0 ? (
        items.map((item) => (
          <LineItem
            key={item.id}
            item={item}
            handleCheck={handleCheck}
            handleDelete={handleDelete}
          />
        ))
      ) : (
        <p>No items available</p>
      )}
    </ul>
  );
};

export default ItemList;
