import { useState } from 'react'

import { ReactLogo, ViteLogo } from '../../assets'

const HomePage = () => {
	const [count, setCount] = useState(0)

	return (
		<section className='App'>
			<header>
				<a href='https://vitejs.dev' target='_blank' rel='noreferrer'>
					<img src={ViteLogo} className='logo' alt='Vite logo' />
				</a>
				<a href='https://reactjs.org' target='_blank' rel='noreferrer'>
					<img src={ReactLogo} className='logo react' alt='React logo' />
				</a>
			</header>
			<h1>Vite + React</h1>
			<div className='card'>
				<button onClick={() => setCount((count) => count + 1)}>
					count is {count}
				</button>
				<p>
					Edit <code>src/App.tsx</code> and save to test HMR
				</p>
			</div>
			<p className='read-the-docs'>
				Click on the Vite and React logos to learn more
			</p>
		</section>
	)
}

export default HomePage
