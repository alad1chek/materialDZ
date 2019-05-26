import React from 'react';
import MaterialService from '../services/MaterialsService';
import CurrentMaterial from '../views/CurrentMaterial';

class CurrentMaterialContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            material: null,
        };
        this.material_service = new MaterialService();
    }

    componentDidMount() {
        const {match: {params}} = this.props;
        this.handleGet(params.id);
    }

    handleGet = material => {
        this.material_service
            .getMaterial(material)
            .then(res => this.setState(state => ({ material: res.data })));
    };

    handleNameChange = e => {
        this.setState({
            material: {...this.state.material, name: e.target.value}
        });
    };

    handleCountChange = e => {
        this.setState({
            material: {...this.state.material, count: e.target.value}
        });
    };

    handlePriceChange = e => {
        this.setState({
            material: {...this.state.material, price: e.target.value}
        });
    };


     handleUpdate = e => {
         e.preventDefault();
         this.material_service.updateMaterial(this.state.material)
     };


    render() {
        return (
            <CurrentMaterial
                material={this.state.material}
                handleUpdate={this.handleUpdate}
                handleNameChange={this.handleNameChange}
                handlePriceChange={this.handlePriceChange}
                handleCountChange={this.handleCountChange}
            />
        );
    }
}

export default CurrentMaterialContainer;
