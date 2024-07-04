import { SnackbarKey, SnackbarProvider, useSnackbar } from 'notistack';
import { Button } from '@/components/ui/button.tsx';
import { X } from 'lucide-react';
import { useTheme } from 'next-themes';

function SnackbarCloseButton({ snackbarKey }: { snackbarKey: SnackbarKey }) {
	const { closeSnackbar } = useSnackbar();

	return (
		<Button
			size='icon'
			className=' bg-inherit text-inherit cursor-pointer hover:bg-inherit px-0'
			onClick={() => closeSnackbar(snackbarKey)}
		>
			<X size={20} strokeWidth={3} />
		</Button>
	);
}

export default function Snackbar({ children }: { children: React.ReactNode }) {
	const renderSnackbarCloseButton = (key: SnackbarKey) => (
		<SnackbarCloseButton snackbarKey={key} />
	);
	const { theme } = useTheme();

	return (
		<SnackbarProvider
			anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
			autoHideDuration={3000}
			style={{
				fontWeight: 'bold',
				backgroundColor: theme === 'light' ? '#121212' : '#ffffff',
				color: theme === 'light' ? '#fff' : '#121212',
				fontSize: '1rem',
				padding: '5px 15px',
			}}
			action={renderSnackbarCloseButton}
		>
			{children}
		</SnackbarProvider>
	);
}
