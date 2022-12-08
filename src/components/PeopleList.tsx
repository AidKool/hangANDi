import { useState } from 'react';
import data from '../data/data.json';

type personType = typeof data[number];

function PeopleList() {
	const [people, setPeople] = useState(data);

	return (
		<ul>
			{people.map((person: personType) => (
				<li key={person.name}>{person.name}</li>
			))}
		</ul>
	);
}

export default PeopleList;
