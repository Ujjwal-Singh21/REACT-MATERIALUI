import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper
} from '@mui/material'

export const MuiTable = () => {
  return (
    <TableContainer component={Paper} sx={{ maxHeight: '400px'}}>
      <Table aria-lable='simple-table' stickyHeader>
        <TableHead>
            <TableRow>
                <TableCell> Id </TableCell>
                <TableCell> First Name </TableCell>
                <TableCell> Last Name </TableCell>
                <TableCell align='center'> E-Mail </TableCell>
                <TableCell> Gender </TableCell>
            </TableRow>
        </TableHead>
        <TableBody>
            {
                tableData.map((row) => (
                    <TableRow key={row.id} 
                              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>

                        <TableCell> {row.id} </TableCell>
                        <TableCell> {row.first_name} </TableCell>
                        <TableCell> {row.last_name} </TableCell>
                        <TableCell  align='center'> {row.email} </TableCell>
                        <TableCell> {row.gender} </TableCell>
                    </TableRow>
                ))
            }
        </TableBody>
      </Table>
    </TableContainer>
  )
}

const tableData = [
  {
    id: 1,
    first_name: 'Reena',
    last_name: 'Bryceson',
    email: 'rbryceson0@huffingtonpost.com',
    gender: 'Female',
    ip_address: '61.205.30.130'
  },
  {
    id: 2,
    first_name: 'Lonna',
    last_name: 'Townes',
    email: 'ltownes1@who.int',
    gender: 'Genderqueer',
    ip_address: '165.104.155.38'
  },
  {
    id: 3,
    first_name: 'Angie',
    last_name: 'Scattergood',
    email: 'ascattergood2@ehow.com',
    gender: 'Bigender',
    ip_address: '64.214.68.53'
  },
  {
    id: 4,
    first_name: 'Bev',
    last_name: 'Krolik',
    email: 'bkrolik3@nature.com',
    gender: 'Female',
    ip_address: '176.91.112.4'
  },
  {
    id: 5,
    first_name: 'Shelli',
    last_name: 'Swiffan',
    email: 'sswiffan4@gnu.org',
    gender: 'Female',
    ip_address: '143.231.149.150'
  },
  {
    id: 6,
    first_name: 'Thorpe',
    last_name: 'Kubes',
    email: 'tkubes5@booking.com',
    gender: 'Male',
    ip_address: '242.231.179.194'
  },
  {
    id: 7,
    first_name: 'Damien',
    last_name: 'Prichard',
    email: 'dprichard6@t-online.de',
    gender: 'Male',
    ip_address: '83.247.164.186'
  },
  {
    id: 8,
    first_name: 'Garnette',
    last_name: 'Ballantine',
    email: 'gballantine7@ucoz.com',
    gender: 'Female',
    ip_address: '185.80.149.26'
  },
  {
    id: 9,
    first_name: 'Cassandra',
    last_name: 'Shankster',
    email: 'cshankster8@mysql.com',
    gender: 'Female',
    ip_address: '153.190.236.206'
  },
  {
    id: 10,
    first_name: 'Rodrigo',
    last_name: 'Attiwill',
    email: 'rattiwill9@addtoany.com',
    gender: 'Male',
    ip_address: '234.112.201.139'
  }
]
