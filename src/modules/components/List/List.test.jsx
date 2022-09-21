import React from 'react';
import {render} from '@testing-library/react';
import List from './List';
import store from '../../../redux/store';
import {Provider} from 'react-redux';

test("List renders", async () => {
    const {findAllByRole} = render(<Provider store={store}><List /></Provider>);
    // eslint-disable-next-line testing-library/prefer-screen-queries
    const items = await findAllByRole("button");
    expect(items).toHaveLength(2);
})

test('Title appears', async () => {
    const {findAllByRole} = render(<Provider store={store}><List /></Provider>);
    const headings = await findAllByRole('heading');
    expect(headings[0]).toHaveTextContent('Lista de Tareas');
});


