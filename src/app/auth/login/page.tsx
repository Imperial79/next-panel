import { Button } from "@/components/ui/button";
import React from "react";

const Page = () => {
	return (
		<div className="flex flex-col lg:flex-row">
			<div className="bg-black w-1/2 h-screen flex flex-col p-5">
				<h1 className="font-mono text-white font-semibold text-2xl">
					Appkraft.in
				</h1>
			</div>

			<div className="w-1/2 h-screen flex flex-col text-center justify-center">
				<h1 className="text-2xl font-semibold mb-2">Create an account</h1>
				<h1 className="text-[12px] font-normal text-gray-500">
					Enter your details below to login to your account
				</h1>
				<div className="max-w-[350px] w-full mx-auto space-y-5">
					<div className="flex flex-col justify-start mt-5">
						<label htmlFor="username">Username</label>
						<div className="h-2" />
						<input
							id="username"
							type="text"
							className="w-full border py-1 px-2 rounded-sm focus:border-[1px]"
							placeholder="Enter username"
						/>
					</div>
					<div className="flex flex-col justify-start">
						<label htmlFor="username">Password</label>
						<div className="h-2" />
						<input
							id="password"
							type="password"
							className="w-full border py-1 px-2 rounded-sm focus:border-[1px]"
						/>
					</div>

					<Button className="w-full">Log In</Button>

					<p className="text-gray-500 text-[12px]">
						By clicking continue, you agree to our{" "}
						<span className="underline underline-offset-2 hover:text-blue-600 cursor-pointer">
							Terms of Use
						</span>{" "}
						and{" "}
						<span className="underline underline-offset-2 hover:text-blue-600 cursor-pointer">
							Privacy Policy
						</span>
					</p>
				</div>
			</div>
		</div>
	);
};

export default Page;
