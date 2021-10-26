import store from "./redux/store";
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';


function Services(props) {
    return (
        <Provider store={store}>
            <BrowserRouter>
                {props.children}
            </BrowserRouter>
        </Provider>
    )
}

export default Services;