import React, { Component } from 'react'

export class ListDevices extends Component {
    render() {
        return (
            <div>
                <div class="row">
                    <div class="col-12">
                        <button class="btn btn-sm btn-primary" data-toggle="modal" data-target="#exampleModal">Ajouter</button>
                    </div>
                    <div class="col-12 mt-4">
                        <div className="px-3 py-3 bg-fff br-10">
                            <table class="table table-sm " >
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
                                                <button class="btn btn-sm btn-warning mr-2" data-toggle="modal" data-target="#exampleModal"><i class="far fa-edit"></i></button>
                                                <button class="btn btn-sm btn-danger" ><i class="far fa-trash-alt"></i></button>
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
                                                <button class="btn btn-sm btn-warning mr-2" data-toggle="modal" data-target="#exampleModal"><i class="far fa-edit"></i></button>
                                                <button class="btn btn-sm btn-danger" ><i class="far fa-trash-alt"></i></button>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ListDevices
