
export default function Search({ search, setSearch }) {
    return (
        <div className='searchBar'>
            <i className="fa-solid fa-magnifying-glass"></i>
            <input type="text" placeholder='SEARCH (Name / Policy Number)' value={search} onChange={(e) => setSearch(e.target.value)}></input>
        </div>
    )
}