import React from "react";

import Content from "./Content";
import Footer from "./Footer";
import Header from "./Header";

function App() {
  // content data and function
  const [items, setItems] = React.useState(
    JSON.parse(localStorage.getItem("shoppinglist"))
  );

  const setAndSaveItems = (newListItems) => {
    setItems(newListItems);
    localStorage.setItem("shoppinglist", JSON.stringify(newListItems));
  };

  const handleCheck = (id) => {
    const listItems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setAndSaveItems(listItems);
    localStorage.setItem("shoppinglist", JSON.stringify(listItems));
  };
  const handleDelete = (id) => {
    const listItems = items.filter((item) => item.id !== id);
    setAndSaveItems(listItems);
    localStorage.setItem("shoppinglist", JSON.stringify(listItems));
  };

  return (
    <div className="App">
      <Header title={"Hello"} />
      <Content handleCheck={handleCheck} handleDelete={handleDelete} />
      <Footer length={items.length} />
    </div>
  );
}

export default App;
