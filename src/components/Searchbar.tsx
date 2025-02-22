import { Search } from "lucide-react";
import React from "react";

const Searchbar = () => {
	return (
		<div className="relative flex items-center">
			<input
				type="search"
				className="border rounded-full placeholder:text-sm pl-10 py-1 outline-none focus:ring-2"
				placeholder="Search"
			/>

			<Search className="absolute inset-y-auto ml-2 text-gray-500" size={20} />
		</div>
	);
};

export default Searchbar;
