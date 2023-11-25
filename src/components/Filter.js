import { useEffect, useRef, useState } from "react";

export default function Filter({
  toggleSort,
  filteredTodos,
  handleSearch,
  searchText,
}) {
  const [showSortOptions, setShowSortOptions] = useState(false);
  const sortOptionsRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        sortOptionsRef.current &&
        !sortOptionsRef.current.contains(event.target)
      ) {
        setShowSortOptions(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="flex justify-end gap-4 my-6">
      <div className="flex gap-2">
        <p
          className="text-xl lg:text-3xl"
          onChange={() => filteredTodos(searchText)}
        >
          🔍
        </p>
        <input
          type="text"
          placeholder="Search"
          value={searchText}
          onChange={handleSearch}
          className="h-8 w-auto md:w-20 lg:h-10 lg:w-32"
        ></input>
      </div>
      <div className="relative" ref={sortOptionsRef}>
        <p
          onClick={() => setShowSortOptions(!showSortOptions)}
          className="text-xl cursor-pointer lg:text-3xl"
        >
          🔃
        </p>
        {showSortOptions && (
          <ul className="absolute -ml-8 bg-white p-2 cursor-pointer">
            <li onClick={() => toggleSort("completion")}>Completion</li>
            <li onClick={() => toggleSort("deadline")}>Deadline</li>
            <li onClick={() => toggleSort("clear")}>Clear Sort</li>
          </ul>
        )}
      </div>
    </div>
  );
}
