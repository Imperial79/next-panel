"use client";

import Searchbar from "@/components/Searchbar";
import Tabbar from "@/components/Tabbar";
import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import React, { useState } from "react";

const tabList: string[] = ["All", "Active", "Blocked"];

const Page = () => {
	const [selectedTab, setSelectedTab] = useState(tabList[0]);
	return (
		<div className="content">
			<Breadcrumb>
				<BreadcrumbList>
					<BreadcrumbItem>
						<BreadcrumbLink href="/">Home</BreadcrumbLink>
					</BreadcrumbItem>
					<BreadcrumbSeparator />
					<BreadcrumbItem>
						<BreadcrumbLink>Manage Customers</BreadcrumbLink>
					</BreadcrumbItem>
				</BreadcrumbList>
			</Breadcrumb>
			<div className="flex flex-row items-center mb-10">
				<div className="flex-grow">
					<h1 className="text-2xl font-semibold mt-5">Manage Customers</h1>
					<p className="text-sm font-medium text-gray-400 mt-2">
						Add, Edit and Remove Customers
					</p>
				</div>

				<Searchbar />
			</div>

			<Tabbar
				labelList={["All", "Active", "Blocked"]}
				value={selectedTab}
				setValue={setSelectedTab}
			/>
		</div>
	);
};

export default Page;
