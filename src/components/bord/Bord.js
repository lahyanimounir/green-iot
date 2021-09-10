import React, { Component } from 'react'
import './bord.css';
import { Doughnut  } from 'react-chartjs-2';

export class Bord extends Component {
    render() {
        const data = {
            labels : ["Olivier","blé","Riz"],
            datasets: [{
                label: "Les cultures",
                data:[23,19,10],
                backgroundColor:["red","green","yellow"]

            }]
        }
        const options={
            maintainAspectRatio:false
        }
        return (
            <div>
               
                <div className="card-agri">
                    <div className="row mx-0  ">
                        <div className="col-6 px-3 py-3 bg-fff br-10" style={{height:'300px'}}>
                            <div className="px-3 py-3 bg-fff br-10 h-100">
                                <Doughnut data={data} options={options} />
                            </div>
                        </div>
                        <div className="col-6 ">
                            <div className="bg-fff br-10 px-3 py-3">
                                <div className="bjr"><span>Bonjour</span>  Mounir </div> 
                                <div className="my-2 fs-16 "><span className="fw-b">Prenom :</span>  Mounir </div> 
                                <div className="my-2 fs-16 "><span className="fw-b">Nom :</span>   Lahyani</div> 
                                <div className="my-2 fs-16 "><span className="fw-b">Culture :</span>   Olivier, blé, Riz</div> 
                            </div> 
                           
                        </div>
                        
                    </div>
                </div>

                <div className="card-agri mt-4">
                    <div className="row mx-0  ">
                        <div className="col-12 ">
                            <div className="px-3 py-3 bg-fff br-10">
                            <table className="table table-sm">
                                    <tr>
                                        <th>Culture</th>
                                        <th>Temperature</th>
                                        <th>Humidité</th>
                                        <th>Gaz</th>
                                        <th>Niveau d’eau</th>
                                        <th>Luminosité</th>
                                        <th>Vents</th>
                                    </tr>
                                    <tr>
                                        <td>Olivier</td>
                                        <td>15 C°</td>
                                        <td>0.5</td>
                                        <td>19</td>
                                        <td>10</td>
                                        <td>100</td>
                                        <td>40</td>
                                    </tr>
                                    <tr>
                                        <td>blé</td>
                                        <td>17 C°</td>
                                        <td>0.5</td>
                                        <td>10</td>
                                        <td>50</td>
                                        <td>40</td>
                                        <td>22</td>
                                    </tr>
                                    <tr>
                                        <td>Riz</td>
                                        <td>10 C°</td>
                                        <td>50</td>
                                        <td>15</td>
                                        <td>60</td>
                                        <td>22</td>
                                        <td>15</td>
                                    </tr>
                                </table>   
                            </div> 
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Bord
