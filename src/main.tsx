import { StrictMode } from 'react'

import ReactDOM from 'react-dom/client'

import CommonRouter from './router/CommonRouter'

import './styles/globals.sass'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<StrictMode>
		<CommonRouter />
	</StrictMode>
)
