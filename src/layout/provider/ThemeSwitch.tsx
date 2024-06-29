'use client';

import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuTrigger,
	DropdownMenuItem,
} from '@radix-ui/react-dropdown-menu';
import { useTheme } from 'next-themes';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { Dot, LucideIcon, Monitor, Moon, Sun } from 'lucide-react';
import { Button } from '../../components/ui/button.tsx';

interface DropdownItemProps {
	t: string;
	label: string;
	Icon: LucideIcon;
	theme: string | undefined;
	setTheme: Dispatch<SetStateAction<string>>;
}

function Item({ t, Icon, label, theme, setTheme }: DropdownItemProps) {
	return (
		<DropdownMenuItem
			onClick={() => setTheme(t)}
			className='flex items-center justify-between cursor-pointer rounded-lg p-1 hover:bg-slate-500'
		>
			<div className='flex items-center gap-2 text-slate-800 dark:text-neutral-200'>
				<Icon width={14} /> {label}
			</div>
			{theme === t && <Dot />}
		</DropdownMenuItem>
	);
}

function ThemeSwitch() {
	const [mounted, setMounted] = useState(false);
	const { theme, setTheme } = useTheme();

	// useEffect only runs on the client, so now we can safely show the UI
	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) return null;

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button variant='ghost' size='icon'>
					{theme === 'light' ? <Sun /> : <Moon />}
					<span className='sr-only'>Toggle theme</span>
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent
				align='end'
				className='justify-between items-center p-4 bg-neutral-100 border dark:bg-neutral-800 rounded-lg border-none'
			>
				<Item
					t='light'
					label='Light'
					Icon={Sun}
					theme={theme}
					setTheme={setTheme}
				/>
				<Item
					t='dark'
					label='Dark'
					Icon={Moon}
					theme={theme}
					setTheme={setTheme}
				/>
				<Item
					t='system'
					label='System'
					Icon={Monitor}
					theme={theme}
					setTheme={setTheme}
				/>
			</DropdownMenuContent>
		</DropdownMenu>
	);
}

export default ThemeSwitch;
