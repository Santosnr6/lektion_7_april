import './searchForm.css';

function SearchForm({ handleInput, handleCategory}) {
    const categories = [
        'Any',
        'Programming',
        'Misc',
        'Dark',
        'Pun'
    ];

  return (
    <form className="search-form">
        <input 
            onChange={ handleInput }
            type="text" 
        />
        <select 
            onChange={ handleCategory }
            name="category" 
            id="category"
        >
            {
                categories.map((cat, index) => {
                    return <option 
                               value={ cat }
                               key={ index }
                           >
                               { cat }
                           </option>
                })
            }
        </select>
    </form>
  )
}

export default SearchForm;
