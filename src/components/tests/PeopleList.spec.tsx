import { render, screen } from '@testing-library/react';
import PeopleList from '../PeopleList';

describe('PeopleList tests suite', () => {
	test('PeopleList renders list', () => {
		render(<PeopleList />);
		const list = screen.getByRole('list');
		expect(list).toBeInTheDocument();
	});

	test('PeopleList renders at least 1 person', () => {
		render(<PeopleList />);
		const people = screen.getAllByRole('listitem');
		expect(people.length).toBeGreaterThanOrEqual(1);
	});
});
