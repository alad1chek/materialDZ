import React from 'react';
import MaterialService from '../services/MaterialsService';
import Materials from '../views/Materials';

class MaterialsContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentMaterial: null,
      materials: [],
    };
    this.material_service = new MaterialService();
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

  render() {
    return (
      <Materials
        materials={this.state.materials}
        handleGet={this.handleGet}
        handleCreate={this.handleCreate}
        handleUpdate={this.handleUpdate}
        handleDelete={this.handleDelete}
      />
    );
  }
}

export default MaterialsContainer;
