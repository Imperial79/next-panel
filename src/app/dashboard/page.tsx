import React from "react";
import { metadata } from "../layout";
import { ChartA } from "@/components/charts/SimpleAreaChart";
import { ChartB } from "@/components/charts/SimplePieChart";

metadata.title = "Dashboard";

const Page = () => {
	return (
		<div className="content">
			<h3 className="text-sm font-medium">Welcome,</h3>
			<h1 className="text-xl font-bold">Avishek Verma</h1>

			<div className="mt-10 flex flex-col lg:flex-row gap-4">
				<div className="w-1/3">
					<ChartB />
				</div>
				<div className="w-2/3">
					<ChartA />
				</div>
			</div>
		</div>
	);
};

export default Page;
