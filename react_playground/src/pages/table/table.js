import React, { useEffect, useState } from 'react';
import './table.css';

function Table() {

    // Énumération pour les statuts des nurses (enum fonctionne pas en JS)
    const Status = Object.freeze({
        Bim: 1,
        NotBim: 0
    });

    const [nurses, setNurses] = useState([]);

    const fetchNurses = () => {
        const data = [
            { id: 1, firstName: 'Jean', lastName: 'Dupont', status: Status.Bim, address: '1 rue de la compétence', NissNumber: '97.11.04-732.01', insuranceCompanyNumber: '500'},
            { id: 2, firstName: 'Marie', lastName: 'Durand', status: Status.notBim, address: '2 rue de la compétence', NissNumber: '98.10.28-735.02', insuranceCompanyNumber: '509'},
            { id: 3, firstName: 'Pierre', lastName: 'Martin', status: Status.Bim, address: '3 rue de la compétence', NissNumber: '99.09.12-734.03', insuranceCompanyNumber: '501'},
            { id: 4, firstName: 'Sophie', lastName: 'Bernard', status: Status.notBim, address: '4 rue de la compétence', NissNumber: '00.08.16-731.04', insuranceCompanyNumber: '510'},

        ];
        setNurses(data);
    }

    // useEffect est un hook qui permet d'executer du code à chaque fois que le composant est monté, (et mis à jour ou démonté?)
    useEffect(() => {
        fetchNurses();
    }, []); //le tableau vide signifie que le useEffect ne s'executera qu'une seule fois au montage du composant

    return (
        <div>
            <h1>Infirmiers</h1>
            <table className='table'>
                <thead>
                    <tr>
                        <th>Prénom</th>
                        <th>Nom</th>
                        <th>Statut</th>
                        <th>Adresse</th>
                        <th>Niss</th>
                        <th>Mut.</th>
                        
                    </tr>
                </thead>
                <tbody>
                    {nurses.map((nurse) => (
                        <tr>
                            <td>{nurse.firstName}</td>
                            <td>{nurse.lastName}</td>
                            <td>{nurse.status}</td>
                            <td>{nurse.address}</td>
                            <td>{nurse.NissNumber}</td>
                            <td>{nurse.insuranceCompanyNumber}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Table; 