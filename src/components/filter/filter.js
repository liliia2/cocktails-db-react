import React, { Component } from 'react';
import './filter.css';

import Category from './category/category';

export default class Filter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            categories: [],
            checkedCategories: [],
            updCheckedCategories: []
        };
    }

    componentDidMount() {
        fetch(`https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list`)
            .then(function (response) { return response.json(); })
            .then((result) => {
                this.setState({
                    categories: result.drinks,
                    checkedCategories: result.drinks,
                    updCheckedCategories: result.drinks
                });
                // console.log('this.state', this.state)
            })
            .catch(function (error) { console.log('Request failed', error) });
    }

    changeShowedCategories = (checkedCategory) => {
        console.log('changeShowedCategories');
        let updCategories = [];
        if (this.state.updCheckedCategories.filter(
            (category) => category.strCategory === checkedCategory).length
        ) {
            updCategories = this.state.updCheckedCategories.filter(
                category => category.strCategory !== checkedCategory
            );
        } else {
            let addedCategory = {strCategory: checkedCategory};
            updCategories = [...this.state.updCheckedCategories, addedCategory];
        }
        this.setState({
            updCheckedCategories: updCategories
        });
    }

    updateShowedCategories() {
        this.setState({
            checkedCategories: this.state.updCheckedCategories
        });
    }

    render() {
        const { categories, updCheckedCategories } = this.state;

        return (
            <div className="Filter">
                <div className="Categories">
                    {categories.map((category) => (
                        <Category 
                            changeShowedCategories={this.changeShowedCategories}
                            category={category.strCategory}
                            checkedCategories={updCheckedCategories}
                            key={category.strCategory}
                        />
                    ))}
                </div>
                <div className="Button">
                    <button
                        onClick={() => this.updateShowedCategories()}
                        disabled={!this.state.categories.length}
                        >Apply
                    </button>
                </div>
            </div>
        )
    }
}
