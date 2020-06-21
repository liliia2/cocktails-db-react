import React from 'react';

import './category.css';

const Category = ({category, checkedCategories, changeShowedCategories}) => {
    function checkCategory(category) {
        return (checkedCategories.filter(elem => elem.strCategory === category).length) ? true : false;
    }

    return(
        <div className='Category'>
            <input
                className="checkbox"
                type="checkbox"
                id={category}
                checked={checkCategory(category)}
                onChange={() => changeShowedCategories(category)}
                name="category" />
            <label htmlFor={category}></label>
            {category}
        </div>
    );
};

export default Category;
