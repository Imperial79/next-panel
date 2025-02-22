import React, { Dispatch, SetStateAction } from "react";

interface Props {
	labelList: string[];
	value: string;
	setValue: Dispatch<SetStateAction<string>>;
}

const Tabbar: React.FunctionComponent<Props> = ({
	labelList,
	value,
	setValue,
}) => {
	return (
		<div className="flex flex-grow flex-row border-b">
			{labelList.map((label, index) => {
				const selected = value === label;
				return (
					<button
						onClick={() => setValue(label)}
						key={index}
						className={`${
							selected
								? "border-black font-medium text-black"
								: "border-transparent font-normal text-gray-500"
						} border-b-4 px-5 py-2 hover:bg-gray-100`}
					>
						<p>{label}</p>
					</button>
				);
			})}
		</div>
	);
};

export default Tabbar;
