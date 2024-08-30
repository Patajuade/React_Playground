import React, { useState } from 'react';

function Table() {

    // Énumération pour les statuts des nurses (enum fonctionne pas en JS)
    const Status = Object.freeze({
        Bim: 1,
        NotBim: 0
    });

    // const Nurse = (id, firstName, lastName, status, address, NissNumber, insuranceCompanyNumber) => {
    //     return { id, firstName, lastName, status, address, NissNumber, insuranceCompanyNumber };
    // }

    const [nurses, setNurses] = useState([
        { id: 1, firstName: 'Jean', lastName: 'Dupont', status: Status.Bim, address: '1 rue de la compétence', NissNumber: '97.11.04-732.01', insuranceCompanyNumber: '500'},
        { id: 2, firstName: 'Marie', lastName: 'Durand', status: Status.notBim, address: '2 rue de la compétence', NissNumber: '98.10.28-735.02', insuranceCompanyNumber: '509'},
    ]);

    return (
        <div>
            <h1>Infirmiers</h1>
            <table>
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