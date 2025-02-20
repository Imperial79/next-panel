"use client";
import { Url } from "next/dist/shared/lib/router/router";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { JSX, useState } from "react";
import { Button } from "./ui/button";
import {
	ChevronLeft,
	ChevronRight,
	ChevronsUpDown,
	FileUser,
	LayoutDashboard,
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { ToastAction } from "./ui/toast";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "./ui/dropdown-menu";

const Sidebar = () => {
	const [showSidebar, setShowSidebar] = useState(true);
	const { toast } = useToast();
	const isAuthPage = usePathname().includes("auth");
	return (
		isAuthPage || (
			<div
				className={`${
					showSidebar ? "w-[250px] px-1 py-3" : "w-[70px] px-1 py-3"
				} transition-all max-w-[250px] bg-gray-100 border border-r-2 text-black h-screen flex flex-col gap-5`}
			>
				{showSidebar ? (
					<div className="flex space-x-2 hover:bg-gray-200 items-center rounded-lg px-2 py-1">
						<div className="rounded-lg bg-black h-[30px] w-[30px]"></div>
						<div className="flex-1 flex-grow">
							<h1 className="text-start text-sm font-medium">Appkraft</h1>
							<h3 className="text-start text-[12px] text-gray-700">Admin</h3>
						</div>

						<div>
							{/* <ChevronsUpDown size={17} /> */}
							<Button
								onClick={() => setShowSidebar(!showSidebar)}
								variant="outline"
								size="icon"
							>
								<ChevronLeft />
							</Button>
						</div>
					</div>
				) : (
					<div className="h-10 w-10 bg-white rounded-xl mx-auto flex justify-center items-center text-center">
						<h1 className="text-gray-500">A</h1>
					</div>
				)}

				<div className="flex flex-grow flex-col gap-1 border-separate">
					<SideButton
						path="/dashboard"
						icon={<LayoutDashboard size={15} />}
						label="Home"
						showSidebar={showSidebar}
					/>
					<SideButton
						path="/customers"
						icon={<FileUser size={15} />}
						label="Customers"
						showSidebar={showSidebar}
					/>
				</div>

				{/* Sidebar Footer */}
				<div className="mx-auto w-full flex justify-center">
					{!showSidebar ? (
						<Button
							onClick={() => setShowSidebar(!showSidebar)}
							variant="outline"
							size="icon"
						>
							<ChevronRight />
						</Button>
					) : (
						<DropdownMenu>
							<DropdownMenuTrigger asChild>
								<div
									// onClick={() => {
									// 	toast({
									// 		title: "Uh oh! Something went wrong.",
									// 		description: "We've encountered some issue with the server",
									// 		variant: "destructive",
									// 		action: (
									// 			<ToastAction altText="Try again">Try again</ToastAction>
									// 		),
									// 	});
									// }}
									className="flex mx-1 space-x-2 hover:bg-gray-200 items-center rounded-lg px-2 py-1 w-full"
								>
									<div className="rounded-lg bg-black h-[30px] w-[30px] overflow-clip">
										<img
											src="https://github.com/shadcn.png"
											alt="AV"
											className="h-full w-full object-cover"
										/>
									</div>

									<div className="flex-1 flex-grow">
										<h1 className="text-start text-sm font-medium">Username</h1>
										<h3 className="text-start text-[12px] text-gray-700">
											user@mail.com
										</h3>
									</div>

									<div>
										<ChevronsUpDown size={17} />
									</div>
								</div>
							</DropdownMenuTrigger>

							<DropdownMenuContent className="w-56">
								<DropdownMenuLabel>My Account</DropdownMenuLabel>
								<DropdownMenuSeparator />
							</DropdownMenuContent>
						</DropdownMenu>
					)}
				</div>
			</div>
		)
	);
};

export default Sidebar;

interface SideButtonProps {
	path: Url;
	icon: JSX.Element;
	label: String;
	showSidebar: boolean;
}

const SideButton: React.FC<SideButtonProps> = ({
	path,
	icon,
	label,
	showSidebar,
}) => {
	const isActive = usePathname() === path.toString();
	return (
		<Link href={path}>
			<div
				className={`relative rounded-md hover:bg-gray-200 hover:text-gray-800 text-gray-600 w-full p-2 flex gap-2 items-center group ${
					isActive ? "bg-gray-200 text-gray-800" : ""
				} ${showSidebar ? "justify-start " : "justify-center"}`}
			>
				{icon}
				{showSidebar && (
					<p className="text-start text-[13px] font-medium">{label}</p>
				)}
				{!showSidebar && (
					<span className="absolute left-full ml-2 w-max bg-gray-700 text-white text-xs rounded p-1 opacity-0 group-hover:opacity-100 transition-opacity">
						{label}
					</span>
				)}
			</div>
		</Link>
	);
};
