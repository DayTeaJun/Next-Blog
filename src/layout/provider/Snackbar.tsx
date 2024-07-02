import { SnackbarKey, SnackbarProvider, useSnackbar } from 'notistack';
import { Button } from '@/components/ui/button.tsx';
import { CircleX } from 'lucide-react';
import { useTheme } from 'next-themes';

function SnackbarCloseButton({ snackbarKey }: { snackbarKey: SnackbarKey }) {
	const { closeSnackbar } = useSnackbar();

	return (
		<Button
			size='icon'
			className=' bg-inherit text-inherit cursor-pointer hover:bg-inherit'
			onClick={() => closeSnackbar(snackbarKey)}
		>
			<CircleX size={20} />
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
				backgroundColor: theme === 'light' ? '#121212' : '#fff',
				color: theme === 'light' ? '#fff' : '#121212',
			}}
			action={renderSnackbarCloseButton}
		>
			{children}
		</SnackbarProvider>
	);
}
