import React from "react";

function CategoryFilter({categories, handleClick}) {


  function CategoryBtn({context}) {
    return (
      <button 
      name={context}
      onClick={handleClick}
      >{context}</button>
    )
  }

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {/* render <button> elements for each category here */}
      {categories.map( (cate, index) => (
        <CategoryBtn key={index} context={cate}/>
      ))}
    </div>
  );
}

export default CategoryFilter;
