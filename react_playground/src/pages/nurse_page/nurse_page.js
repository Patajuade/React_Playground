import React, { useEffect, useState } from 'react';
import TableComponent from '../../components/table/table_component';

function Nurse_Page() {

    const Status = Object.freeze({
        Bim: 1,
        Normal: 0
    });
    
    const [nurses, setNurses] = useState([]);
    const [pokemon, setPokemon] = useState([]);
    
    const fetchNurses = () => {
        const data = [
        { id: 1, firstName: 'Jean', lastName: 'Dupont', status: Status.Bim, address: '1 rue de la compétence', NissNumber: '97.11.04-732.01', insuranceCompanyNumber: '500'},
        { id: 2, firstName: 'Marie', lastName: 'Durand', status: Status.Normal, address: '2 rue de la compétence', NissNumber: '98.10.28-735.02', insuranceCompanyNumber: '509'},
        { id: 3, firstName: 'Pierre', lastName: 'Martin', status: Status.Bim, address: '3 rue de la compétence', NissNumber: '99.09.12-734.03', insuranceCompanyNumber: '501'},
        { id: 4, firstName: 'Sophie', lastName: 'Bernard', status: Status.Normal, address: '4 rue de la compétence', NissNumber: '00.08.16-731.04', insuranceCompanyNumber: '510'},
        ];
        setNurses(data);
    }

    const fetchPokemon = () => {
        const data = [
        { id: 1, name: 'Pikachu', type: 'Electric', base_experience: 112},
        { id: 2, name: 'Bulbasaur', type: 'Grass', base_experience: 64},
        { id: 3, name: 'Charmander', type: 'Fire', base_experience: 62},
        { id: 4, name: 'Squirtle', type: 'Water', base_experience: 63},
        ];
        setPokemon(data);
    }

    const NurseColumns = [
        { key: 'id', header: 'ID' },
        { key: 'firstName', header: 'Prénom' },
        { key: 'lastName', header: 'Nom' },
        { key: 'status', header: 'Statut' },
        { key: 'address', header: 'Adresse' },
        { key: 'NissNumber', header: 'Numéro INAMI' },
        { key: 'insuranceCompanyNumber', header: 'Numéro de mutuelle' }
    ];

    const PokemonColumns = [
        { key: 'id', header: 'ID' },
        { key: 'name', header: 'Nom' },
        { key: 'type', header: 'Type' },
        { key: 'base_experience', header: 'Expérience de base' }
    ];
    
    // useEffect est un hook qui permet d'executer du code à chaque fois que le composant est monté, (et mis à jour ou démonté?)
    useEffect(() => {
        fetchNurses();
        fetchPokemon();
    }, []); //le tableau vide signifie que le useEffect ne s'executera qu'une seule fois au montage du composant

    return (
        <div>
            <h1>Infirmiers</h1>
            <TableComponent data={nurses} columns={NurseColumns} />
            <h1>Cartes Pokemon</h1>
            <TableComponent data={pokemon} columns={PokemonColumns} />

        </div>
    );
}

export default Nurse_Page; 