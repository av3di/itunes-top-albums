import { SearchBarProps } from "../../types";
import SearchButton from "./SearchButton";
import SearchInput from "./SearchInput";

function SearchBar(props: SearchBarProps) {
    return (
        <div className="row justify-content-center mb-5">
            <div className="col-12 col-sm-8 col-md-5 align-self-center">
                <SearchInput setQuery={ props.setQuery } query={ props.query }/>
            </div>
            <div className="col-12 col-sm-auto col-md-auto text-center mt-2 mt-sm-0">
                <SearchButton handleSearch={ props.handleSearch } />
            </div>
        </div>
    )
}

export default SearchBar;