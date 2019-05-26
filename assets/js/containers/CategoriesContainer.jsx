import React from 'react';
import CategoriesService from '../services/CategoriesService';
import Categories from "../views/Categories";

class CategoriesContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            categories: [],
        };
        this.categories_service = new CategoriesService();
    }

    componentDidMount() {
        console.log("DID MOUNT");

        this.handleGetList();
    }

    handleGet = category => {
        this.categories_service
            .getCategory(category)
            .then(res => this.setState(state => ({ categories: res.data })));
    };

    handleGetList = () => {
        this.categories_service.getCategories().then(res =>
            this.setState({
                categories: res.data,
            }),
        );
    };

    handleCreate = category => {
        this.categories_service
            .createCategory(category)
            .then(res =>
                this.setState({ categories: [...this.state.categories, res.data] }),
            );
    };

    handleUpdate = category => {
        this.categories_service.updateCategory(category).then(res => {
            this.setState(state => {
                const categories = state.categories.map(item => {
                    if (item.id === category.id) {
                        return category;
                    } else {
                        return item;
                    }
                });
                return {
                    categories,
                };
            });
        });
    };

    handleDelete = category => {
        this.categories_service.deleteCategory(category).then(res =>
            this.setState(state => {
                const categories = state.filter(item => item.id !== category.id);

                return {
                    categories,
                };
            }),
        );
    };

    render() {
        return (
            <Categories
                categories={this.state.categories}
                handleGet={this.handleGet}
                handleCreate={this.handleCreate}
                handleUpdate={this.handleUpdate}
                handleDelete={this.handleDelete}
            />
        );
    }
}

export default CategoriesContainer;
