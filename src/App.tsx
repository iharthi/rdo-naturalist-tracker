import React from "react";
import "./App.css";
import { ItemList } from "./components/itemList";
import { categories } from "./data/categories";

function App() {
  return (
    <>
      {categories.map((c) => (
        <ItemList
          key={c.key}
          categoryKey={c.key}
          title={c.title}
          items={c.items}
          image={c.image}
        />
      ))}
    </>
  );
}

export default App;
