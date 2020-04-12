import React,{useState} from 'react';

const Search = (props) => {

    const [searchValue,setSearchValue] = useState("");

    const handleSearch = (e) =>{
        setSearchValue(e.target.value);
    }

    const resetField = () => {
        setSearchValue("");
    }

    const searchField = (e) => {
        e.preventDefault();
        props.search(searchValue);
        resetField();
    }


    return (
        <form className="search">
            <input type="text" value={searchValue} onChange={handleSearch}/>
            <input type="submit" value="search" onClick={searchField} />
        </form>

    );
}

export default Search;


