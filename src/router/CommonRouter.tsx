import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { HomePage } from '../components/pages'
import { CommonLayout } from '../components/layouts'

const CommonRouter = () => (
	<BrowserRouter>
		<Routes>
			<Route path='/' element={<CommonLayout />}>
				<Route index element={<HomePage />} />
			</Route>
		</Routes>
	</BrowserRouter>
)

export default CommonRouter
