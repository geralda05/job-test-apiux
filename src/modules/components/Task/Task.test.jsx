import React from 'react';
import {render} from '@testing-library/react';
import store from '../../../redux/store';
import {Provider} from 'react-redux';
import Task from './Task';

const fakeData = {
    id: 1,
    name: 'Fake Name',
    description: 'Fake Description'
}

test("Task renders", async () => {
    const {findAllByRole} = render(<Provider store={store}><Task item={fakeData} /></Provider>);
    const items = await findAllByRole("button");
    expect(items).toHaveLength(2);
})
