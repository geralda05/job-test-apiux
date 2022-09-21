import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import store from './redux/store';
import AddForm from './modules/components/AddForm/AddForm';
import List from './modules/components/List/List';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <div className="container p-4">
          <div className="row">
            <div className="col-12 col-sm-4 col-md-6">
              <List></List>
            </div>
            <div className="col-12 col-sm-8 col-md-6">
              <AddForm></AddForm>
            </div>
          </div>
        </div>
      </div>
    </Provider>
  );
}

export default App;
