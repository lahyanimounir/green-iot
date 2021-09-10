import React, { Component } from 'react'
import axios from 'axios';
import produits from '../../produits.json';

export class Devices extends Component {
    //const [devices, product] = useState({});
    nextBtn = false;
    constructor(props) {
        super(props)
    
        this.state = {
            devices:[],
            products:[],
            nextBtn:false
        }
     
    }
    clickHandler = () => {
        this.setState({
            nextBtn: true
        })
        console.log(this.state.nextBtn)
    }
    save = () =>{
        console.log(this.state)
    }
    getProduits = () => {

        this.setState({
            products: produits[2].data

        })
                
    }
    
    getDevides = () => {
        axios.get('http://localhost:8080/dev')
            .then(respense => {
                this.setState({
                    devices: respense.data
                })
                console.log(this.state)
            })
    }

    //onInit in angular
    componentDidMount(){
        this.getDevides();
        this.getProduits();
       // console.log(produits.filter(item=> item.lang == 'fr'));
        // this.setState({
        //     products: produits
        // })
        // console.log(this.state);
    }

    

    

    render() {
        return (
            <div>
                
                <div className="row mt-4">
                    <div className="col-5">
                        <div className="form-group">
                        
                            <input type="text" className="form-control" id="search"  placeholder="Chercher ..." />
                            <small  className="form-text text-muted">Filtrer vos cultures ici</small>
                        </div>
                    </div>
                    <div className="col-1">
                        <button className="btn btn-light">
                            <i className="fas fa-search"></i>
                        </button>
                    </div>
                    <div className="col-6 text-right">
                        <button className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">Ajouter</button>
                    </div>
                </div>

                {this.state.devices.map(device => (

                    <div className="row">
                        <div className="col-3 mt-3">
                            <div className="card">
                            <img className="card-img-top img-culture" src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22286%22%20height%3D%22180%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20286%20180%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_17bc48efb0f%20text%20%7B%20fill%3Argba(255%2C255%2C255%2C.75)%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A14pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_17bc48efb0f%22%3E%3Crect%20width%3D%22286%22%20height%3D%22180%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22107.1953125%22%20y%3D%2296.3%22%3E286x180%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" alt="Card image cap" />
                            <div className="card-body px-3 py-2">
                                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna aliqua. </p>
                                

                                <button className="btn btn-block btn-outline-warning">
                                    <i className="fas fa-pencil-alt"></i>
                                    Modifier
                                </button>

                                <button className="btn btn-block my-3 btn-danger">
                                    <i className="far fa-trash-alt"></i>
                                    Supprimer
                                </button>
                            </div>
                            </div>
                        </div>
                    </div>
                
                ))}


                    {/* [{id_culture:3,id_device:4},{id_culture:4,id_device:4},{id_culture:4,id_device:4},{id_culture:3,id_device:4}] */}

                <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-lg" role="document">
                        <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Associer device a un culture</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            {this.state.nextBtn ?
                                <div>
                                    <table class="table table-sm table-borderd" >
                                        <thead >
                                            <tr>
                                                <th>Id</th>
                                                <th>@ MAC</th>
                                                <th>Culture</th>
                                                <th style={{width:'150px'}}>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>1</td>
                                                <td>55:11:33:cc</td>
                                                <td>
                                                    <div>Riz</div> 
                                                    <div>Blé</div> 
                                                </td>
                                                
                                                <td>
                                                    <div class="d-flex justify-content-between">
                                                        <input type="checkbox" />
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>2</td>
                                                <td>55:11:33:cc</td>
                                                <td>
                                                    <div>Olivier</div>  
                                                </td>
                                                
                                                <td>
                                                    <div class="d-flex justify-content-between">
                                                        <input type="checkbox" />
                                                    </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            :
                            <div className="row">
                                {this.state.products.map((produit,index) => (
                                    <div className="col-4 " style={{ borderRight: '1px solid #ddd' }} >
                                    
                                        <ul className="list-group">
                                        <li className="list-group-item item-produit px-2" >
                                        <img class="pr-2 img-produit" src={"https://beinagriculture.s3.amazonaws.com"+produit.url_photo} />
                                            
                                            <div class="d-flex justify-content-between width-check">
                                                <div> {produit.value}</div> 
                                                <div><input type="checkbox" onChange={()=> {
                                                                let checked = produit.checked;
                                                                checked = !checked;
                                                                produit.checked = checked
                                                                console.log(produit);
                                                                
                                                                // checked[index] = !checked[index];
                                                               
                                                        }} />
                                                </div>   
                                            </div> 
                                        </li>
                                        </ul>
                                    
                                    </div>
                                ))}
                            </div>
                            }
                        </div>
                        
                        <div className="modal-footer">
                            {this.state.nextBtn ? <button type="button" className="btn btn-sm btn-primary" onClick={this.save}>Enregistrer</button> :  <button type="button" className="btn btn-sm btn-primary" onClick={this.clickHandler}>Suivant</button> }
                            
                        </div>
                        </div>
                    </div>
                </div>
            </div>
                //  this.props.showMe ? <button type="submit" className="btn nav-btn-red">SIGN UP</button> : null
        )
    }
}

export default Devices
