"use client";
import * as React from "react";
import { NextUIProvider } from '@nextui-org/react';
import {ThemeProvider as NextThemesProvider} from "next-themes";

export function Providers({ 
	children 
}: {
	children: React.ReactNode
} ) {
	return (
		<NextUIProvider>
			<NextThemesProvider
				attribute="class"
				defaultTheme="dark"
				themes={["light", "dark"]}
			>
				{children}
			</NextThemesProvider>
		</NextUIProvider>
	);
}