import "@/styles/global.css";
import { Inter } from "next/font/google";

import { QueryProvider } from "@/providers/query-provider";
import { LogsProvider } from "@/providers/logs-provider";

import type { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Digitevent front test",
	description: "A front test for Digitevent",
};

const RootLayout = ({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) => {
	return (
		<html lang="en">
			<body className={inter.className}>
				<QueryProvider>
					<LogsProvider>{children}</LogsProvider>
				</QueryProvider>
			</body>
		</html>
	);
};

export default RootLayout;
