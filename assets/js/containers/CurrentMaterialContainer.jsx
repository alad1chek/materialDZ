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
        console.log(this.props);
        const {match: {params}} = this.props;
        this.handleGet(params.id);
    }

    handleGet = material => {
        this.material_service
            .getMaterial(material)
            .then(res => this.setState(state => ({ material: res.data })));
    };
    handleUpdate = e => {
        e.preventDefault();
    };


    /* handleUpdate = material => {
         this.material_service.updateMaterial(material).then(res => {
             this.setState(state => {
                return {
                    material
                }
             });
         });
     };
 */
    render() {
        return (
            <CurrentMaterial
                material={this.state.material}
                handleUpdate={this.handleUpdate}
            />
        );
    }
}

export default CurrentMaterialContainer;
