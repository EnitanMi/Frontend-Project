import { useState } from "react"
import { DataGrid } from '@mui/x-data-grid';
import { useGetAllStudentQuery, useDeleteStudentMutation } from '../feature/studentApiSlice'
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import { Box } from '@mui/material';


export default function ListStudent () {
    const { data: student = [], refetch } = useGetAllStudentQuery();
    const [deleteStudent] = useDeleteStudentMutation();

    const handleDelete = async (id) => {
        try {
            await deleteStudent(id); // Call the delete mutation
            refetch(); // Refetch the data after deletion
        } catch (error) {
            console.error('Failed to delete student:', error);
        }
    };

    const columns = [
        { field: 'id', headerName: 'ID', width: 100 },
        {
            field: 'firstName',
            headerName: 'First name',
            width: 150,
            editable: true,
        },
        {
            field: 'lastName',
            headerName: 'Last name',
            width: 150,
            editable: true,
        },
        {
            field: 'gender',
            headerName: 'Gender',
            width: 150,
            editable: true,
        },
        {
            field: 'position',
            headerName: 'Position',
            type:"string",
            width: 150,
            editable: true,
        },
        {
            field: 'age',
            headerName: 'Age',
            type: 'number',
            width: 110,
            editable: true,
        },
        {
            field: 'fullname',
            headerName: 'Fullname',
            description: 'This column has a value getter and is not sortable.',
            sortable: false,
            width: 160,
            valueGetter: (params) => {
                const { row } = params || {};
                return row ? `${row.firstName || ''} ${row.lastName || ''}` : '';
            },
        },
        {
            field: 'delete',
            headerName: 'Delete',
            width: 120,
            sortable: false,
            renderCell: (params) => (
                <IconButton
                    aria-label="delete"
                    onClick={() => handleDelete(params.row.id)}
                >
                    <DeleteIcon color="error" />
                </IconButton>
            ),
        },
    ];

    const rows = student.map((student) => ({
        id: student.id || '',
        firstName: student.firstName || '',
        lastName: student.lastName || '',
        gender: student.gender || '',
        position:student.position || '',
        age: student.age || 0,
    }));

    console.log('Rows:', rows); // Debugging purpose




    return(
        <div>
            <h1>ListStudent</h1>
            <Box sx={{ height: 400, width: '100%', color: 'blue' }}>
                <DataGrid
                    rows={rows}
                    columns={columns}
                    initialState={{
                        pagination: {
                            paginationModel: {
                                pageSize: 5,
                            },
                        },
                    }}
                    pageSizeOptions={[5]}
                    checkboxSelection
                    disableRowSelectionOnClick
                />
            </Box>
        </div>
    )
}
