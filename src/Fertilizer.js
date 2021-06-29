
import App from './App';
import { Table } from 'react-bootstrap';
import { Navigation } from './Navigation';
import { NavUser } from './NavUser';
import { Footer } from './Footer';
import React, { useState } from "react";
import './Context/Fertilizer.css'
export default function Fertilizer() {
    const [urea, setUrea] = useState();
    const [phos, setPhos] = useState();
    const [pota, setPota] = useState();
    const [upercentage, setuPercentage] = useState(0);
    const [phpercentage, setPhPercentage] = useState(0);
    const [popercentage, setPoPercentage] = useState(0);
    const [found, setfound] = useState(localStorage.getItem('found'));
    const [error, seterror] = useState(false); 

    const calculate = (e) => {
        e.preventDefault();
        const formValid = +urea >= 0 && +phos > 0 && +pota > 0;
        if (!formValid) {
            seterror(true);
            return;
        }
        else {
            seterror(false);
        }
        setuPercentage((100 / +urea) * 100 * 1);
        setPhPercentage((50 / +phos) * 100 * 1);
        setPoPercentage((50 / +pota) * 100 * 1);

    }; return (
        <div>
            {
                found == "True" ?
                    <NavUser />
                    :
                    <Navigation />
            }
            <header class="masthead bg-primary text-white text-center">
        <div className="bdy">
         
            <form action="/" class="decor" onSubmit={calculate}>
                <div class="LeftDecoration"></div>
                <div class="rightDecoration"></div>
                <div class="circle"></div>
                <div class="form-inner">
                    <h1 className="he">Calculate Fertilizer</h1>
                            <input className="Inp showing" type="text" placeholder="Urea Percentage" value={urea}
                        onChange={(e) => setUrea(e.target.value)} />
                            <input className="Inp showing" type="text" placeholder="Phosphorus Percentage" value={phos}
                        onChange={(e) => setPhos(e.target.value)} />
                            <input className="Inp showing" type="text" placeholder="Potassium Percentage" value={pota}
                        onChange={(e) => setPota(e.target.value)} />
                        <button className="Bbtn" type="submit" href="/">Submit</button>
                        {
                            error == true ?
                                <div className="text alert alert-danger">Invalid value entered</div>
                                :
                                null
                        }
                        {
                            upercentage == 0 && phpercentage == 0 && popercentage == 0 ?
                                null
                                :
                                <div className="center showing" id="myDIV">
                                        <div className=" ma1 fw6 pa1 center lh-copy f5">Urea Percentage: {upercentage.toFixed(2)} Kg of Urea</div>
                                        <div className=" ma1 pa1  fw6 center lh-copy f5">Phosphorus Percentage: {phpercentage.toFixed(2)} Kg of Phosphorus</div>
                                        <div className="ma1 pa1 fw6 center lh-copy f5">Potassium Percentage: {popercentage.toFixed(2)} Kg of Potassium</div>
                                </div>
                        }
                       


                </div>
            </form>
            
                </div>
                </header>
            <Footer />
        </div>
    );
}


//export class Fertilizer extends Component {
//    constructor(props) {
//        super(props);
//        this.state = {
//            plants: [],
//            found: ''
//        }


//    }
//    refreshList() {
        
//     fetch('https://localhost:5002/api/Department')
//            .then(response => {
//                console.log(response);
//                return response.json();
//            })
//            .then(data => {
//                this.setState({ plants: data });
//                console.log(data);
//            });
//        console.log('arrangementList', this.state.plants);

//    }
//    componentDidMount() {
//        this.refreshList();
//        console.log('arrangementList', this.state.plants);
//        const found = localStorage.getItem('found');
//        const email = localStorage.getItem('email');
//        const password = localStorage.getItem('password');
//        this.setState({ found, email, password });
//        console.log('found:', found, 'email:', email, 'password: ', password);
//    }

//    componentDidUpdate() {
//        this.refreshList();
//    }
//    render() {
//        const { plants } = this.state;
//        return (
//            <div>
//                {
//                    this.state.found == "True" ?
//                        <NavUser />
//                        :
//                        <Navigation />
//                }
//                < Table className="mt-4" striped bordered hover size="sm">
//                    <thead>
//                        <tr>
//                            <th>PlantId</th>
//                            <th>PlantName</th>
//                            <th> Options</th>
//                        </tr>
//                    </thead>
//                    <tbody>
//                        {plants.map(plant =>
//                            <tr key={plant.DepartmentId}>
//                                <td> {plant.DepartmentId} </td>
//                                <td> {plant.DepartmentName} </td>
//                                <td>Edit/Delete </td>
//                            </tr>
//                        )}
//                    </tbody>
//                </Table>
//                <Footer />
//            </div>
//        )

//    }

//}
//export default Fertilizer ; 