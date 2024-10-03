import { FaSearch } from "react-icons/fa"


const Searchplate = () => {
  return (
    <div className="relative w-full mt-4 mb-2 ">
    <input
      type="text"
      placeholder="Search"
      className="w-full p-2 pl-10 rounded-md bg-gray-400 opacity-30 text-white outline-none placeholder-slate-100  "
    />
    {/* Search Icon */}
    <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
     <FaSearch/>
    </div>
  </div>
  )
}

export default Searchplate