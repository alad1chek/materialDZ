import React from 'react';
import MaterialService from '../services/MaterialsService';
import SpendingService from '../services/SpendingService';
import CurrentMaterial from '../views/CurrentMaterial';

class CurrentMaterialContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      material: null,
      spending: null,
    };
    this.material_service = new MaterialService();
    this.spending_service = new SpendingService();
  }

  componentDidMount() {
    const {
      match: { params },
    } = this.props;
    this.handleGet(params.id);
    this.handleSpendingLog(params.id);
  }

  handleSpendingLog = spending => {
    this.spending_service
      .getSpending(spending)
      .then(res => this.setState({ ...this.state, spending: res.data }));
  };

  handleGet = material => {
    this.material_service
      .getMaterial(material)
      .then(res => this.setState(state => ({ material: res.data })));
  };

  handleNameChange = e => {
    this.setState({
      material: { ...this.state.material, name: e.target.value },
    });
  };

  handleCountChange = e => {
    this.setState({
      material: { ...this.state.material, count: e.target.value },
    });
  };

  handlePriceChange = e => {
    this.setState({
      material: { ...this.state.material, price: e.target.value },
    });
  };

  handleUpdate = e => {
    e.preventDefault();
    this.material_service.updateMaterial(this.state.material);
  };

  render() {
    return (
      <CurrentMaterial
        material={this.state.material}
        spending={this.state.spending}
        handleUpdate={this.handleUpdate}
        handleNameChange={this.handleNameChange}
        handlePriceChange={this.handlePriceChange}
        handleCountChange={this.handleCountChange}
      />
    );
  }
}

export default CurrentMaterialContainer;
