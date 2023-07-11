import React, { useState } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';

import StudentForm from './StudentForm';
import data from '../data.json';
function TableData() {
const [studentData, setStudentData] = useState(data);

const tableRows = studentData.map((info) => {
	return (
	<tr>
		<td>{info.id}</td>
		<td>{<DeleteIcon/>}</td>
		<td>{info.status}</td>
    <td>{info.serviceCategory}</td>
    <td>{info.location}</td>
    <td>{info.date}</td>
	</tr>
	);
});

const addRows = (data) => {
	const totalStudents = studentData.length;
	data.id = totalStudents + 1;
	const updatedStudentData = [...studentData];
	updatedStudentData.push(data);
	setStudentData(updatedStudentData);
};

return (
	<div> <header>Rise it Ticket</header>
	<div className='table'>
	<table className="table table-stripped">
		<thead>
		<tr>
		
			<th>Sr.NO</th>
			<th>Action</th>
			
			<th>Stutas</th>
      <th>Service</th>
      <th>Location</th>
			<th>Created on</th>
      {/* <th>Created on</th> */}
		</tr>
		</thead>
		<tbody>{tableRows}</tbody>
	</table>
	<StudentForm func={addRows} />
	
	</div>
	</div>
);
}

export default TableData;
