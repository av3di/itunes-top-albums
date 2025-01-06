import { SearchInputProps } from "../../types";

function SearchInput(props: SearchInputProps) {
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => props.setQuery(event.target.value);
    
    return (
        <input type="text" 
            placeholder="Search for albums, artists"
            value={ props.query }
            onChange={handleChange} />
    );
}

export default SearchInput;