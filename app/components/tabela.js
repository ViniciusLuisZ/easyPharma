import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Button } from '@mui/material';

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'firstName', headerName: 'Nome Produto', width: 130 },
  { field: 'lastName', headerName: 'Quantidade', width: 130 },
  { field: 'fullName', headerName: 'Endereço', width: 160, },
];

const rows = [
  { id: 1, lastName: 2, firstName: 'Jon', fullName: 'Avenida São Sebastião' },
  { id: 2, lastName: 1, firstName: 'Cersei', fullName: 'Rua Júlio Frederico Müller' },
  { id: 3, lastName: 10, firstName: 'Máscara', fullName: 'Rua dos Girassóis' },
  { id: 4, lastName: 2, firstName: 'Arya', fullName: 'Rua Santa Rita' },
  { id: 5, lastName: 1, firstName: 'Daenerys', fullName: 'Rua Estácio de Sá' },

];

export default function DataTable() {
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
      />
      <Button variant="contained" href = {`/estoquista/${rows.id}`}> </Button>
    </div>

  );
}
