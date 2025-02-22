import Searchbar from "@/components/Searchbar";
import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import React from "react";

const Page = () => {
	return (
		<div className="content">
			<Breadcrumb>
				<BreadcrumbList>
					<BreadcrumbItem>
						<BreadcrumbLink href="/">Home</BreadcrumbLink>
					</BreadcrumbItem>
					<BreadcrumbSeparator />
					<BreadcrumbItem>
						<BreadcrumbLink href="/components">Components</BreadcrumbLink>
					</BreadcrumbItem>
				</BreadcrumbList>
			</Breadcrumb>
			<div className="flex flex-row items-center">
				<div className="flex-grow">
					<h1 className="text-2xl font-semibold mt-5">Manage Customers</h1>
					<p className="text-sm font-medium text-gray-400 mt-2">
						Add, Edit and Remove Customers
					</p>
				</div>

				<Searchbar />
			</div>
		</div>
	);
};

export default Page;
