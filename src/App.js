import './App.css';
import {Provider} from 'react-redux';
import store from "./store";

import {saveSate} from "./store/localStorage";
import Router from "./component/router";

store.subscribe(() => {
    saveSate(store.getState())
});
function App() {
    return (
        <div className="App">
            <Provider store={store}>
                <Router />
            </Provider>
        </div>
    );
}


export default App;
