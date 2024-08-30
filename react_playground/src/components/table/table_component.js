import React, { useEffect, useState } from 'react';
import './table_component.css';

export default function TableComponent({data, columns}) {
    
    //TODO : dynamiser thead et tbody
    //TODO : utiliser des keys
    //TODO : ajouter une barre de recherche qui filtre sur tous les champs
    //TODO : ajouter des boutons pour trier les colonnes
    //TODO : pouvoir ajouter des rows
    //TODO : pouvoir supprimer des rows
    //TODO : pouvoir modifier des rows
    //TODO : ajouter une pagination


    return (
        <div>
        <table className='table'>
            <thead>
            <tr>
                {columns.map((column) => (
                <th key={column.key}>{column.header}</th>
                ))}
            </tr>
            </thead>
            <tbody>
            {data.map((item) => (
                <tr key={item.id}>
                {columns.map((column) => (
                    <td key={column.key}>{item[column.key]}</td>
                ))}
                </tr>
            ))}
            </tbody>
        </table>
        </div>
    );
}
