import React, { useEffect, useState } from 'react';
import TableComponent from '../../components/table/table_component';

function Table() {

    //TODO : faire ici le fetch de data et les passer en props au composant TableComponent ?

    return (
        <div>
            <h1>Infirmiers</h1>
            <TableComponent />
        </div>
    );
}

export default Table; 