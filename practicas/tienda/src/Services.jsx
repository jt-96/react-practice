import store from "./redux/store";
import { Provider } from 'react-redux'

function Services(props) {
    return <Provider store={store}>{props.children}</Provider>
}

export default Services;