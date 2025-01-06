import { SearchButtonProps } from "../../types";

function SearchButton(props: SearchButtonProps) {
    return (
        <button type="button" 
            onClick={ props.handleSearch }
            className="btn btn-primary">Search</button>
    );
}

export default SearchButton;