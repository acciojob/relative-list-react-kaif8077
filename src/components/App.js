import React from "react";

const App = () => {

  const relatives = [
    { id: "relativeListItem1", name: "Aunt" },
    { id: "relativeListItem2", name: "Uncle" },
    { id: "relativeListItem3", name: "Cousin" },
    { id: "relativeListItem4", name: "Grandma" },
    { id: "relativeListItem5", name: "Grandpa" },
  ];

  return (
    <div>
      <h2>Relatives to Visit this Diwali</h2>
      <ol key="relativeList">
        {relatives.map((relative) => (
          <li key={relative.id}>{relative.name}</li>
        ))}
      </ol>
    </div>
  );
};

export default App;
