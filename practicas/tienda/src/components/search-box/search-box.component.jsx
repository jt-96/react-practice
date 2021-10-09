import './search-box.styles.css'

import TextField from '@material-ui/core/TextField'

function SearchBox(props){
    return(
        <TextField className='search-box' style={{width: "100%", height:"70px"}} label="filled" variant="filled" onInput={(evt) => props.onSearch(evt.target.value)}>Search</TextField>
    );
}

export default SearchBox
