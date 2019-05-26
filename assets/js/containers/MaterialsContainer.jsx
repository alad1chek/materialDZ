import React from 'react';
import MaterialService from '../services/MaterialsService';
import SpendingServie from "../services/SpendingService";
import Materials from '../views/Materials';

class MaterialsContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentMaterial: null,
      materials: [],
      showModal: false,
      showItem: null,
      reason: null,
      count: null
    };
    this.material_service = new MaterialService();
    this.spendingService = new SpendingServie();
  }

  componentDidMount() {
    this.handleGetList();

  }

  handleGet = material => {
    this.material_service
      .getMaterial(material)
      .then(res => this.setState(state => ({ material: res.data })));
  };

  handleGetList = () => {
    this.material_service.getMaterials().then(res =>
      this.setState({
        materials: res.data,
      }),
    );
  };

  handleCreate = material => {
    this.material_service
      .createMaterial(material)
      .then(res =>
        this.setState({ materials: [...this.state.materials, res.data] }),
      );
  };

  handleUpdate = material => {
    this.material_service.updateMaterial(material).then(res => {
      this.setState(state => {
        const materials = state.materials.map(item => {
          if (item.id === material) {
            return material;
          } else {
            return item;
          }
        });
        return {
          materials,
        };
      });
    });
  };

  handleDelete = material => {
    this.material_service.deleteMaterial(material).then(res =>
      this.setState(state => {
        const materials = state.materials.filter(item => item.id !== material);
        return {
          materials,
        };
      }),
    );
  };

  handleClose = () => {
    this.setState({ ...this.state, showModal: false });
  };

  handleShow = (item) => {
    this.setState({ ...this.state, showModal: true, showItem: item });
  };

  handleCountChange = (e) => {
      this.setState({...this.state, count: e.target.value});
  };

  handleReasonChange = (e) => {
    this.setState({...this.state, reason: e.target.value});
  };

  handleSpend = () => {
    if(!this.state.reason || !this.state.count) return;
    const spending = {
      reason: this.state.reason,
      materials: [{
        id: this.state.showItem,
        count: this.state.count
      }]
    };
    this.spendingService.spend(spending).then(res => {
      const material = Object.values(this.state.materials).filter(item => item.id === this.state.showItem);
      material[0].count -=this.state.count;
      this.setState(state => ({
        ...state,
        materials: {
          ...state.materials,
          ...material
        }
      }))
    });
  };

  render() {
    return (
      <Materials
        materials={this.state.materials}
        handleGet={this.handleGet}
        showModal={this.state.showModal}
        handleCreate={this.handleCreate}
        handleUpdate={this.handleUpdate}
        handleDelete={this.handleDelete}
        handleClose={this.handleClose}
        handleShow={this.handleShow}
        handleCountChange={this.handleCountChange}
        handleReasonChange={this.handleReasonChange}
        handleSpend={this.handleSpend}
      />
    );
  }
}

export default MaterialsContainer;
