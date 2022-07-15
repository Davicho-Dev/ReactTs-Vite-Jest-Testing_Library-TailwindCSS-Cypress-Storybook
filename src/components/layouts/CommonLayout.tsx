import { Outlet } from 'react-router-dom'

const CommonLayout = () => {
	return (
		<section>
			<Outlet />
		</section>
	)
}

export default CommonLayout
