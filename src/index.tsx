import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import { RecoilRoot } from 'recoil';
import theme from './theme/index';
import { ThemeProvider } from '@emotion/react';

const root = createRoot(document.getElementById('root') as HTMLElement);
root.render(
	<React.StrictMode>
		<RecoilRoot>
			<ThemeProvider theme={theme}>
				<App />
			</ThemeProvider>
		</RecoilRoot>
	</React.StrictMode>
);
