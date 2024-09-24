import Image from 'next/image'
import { FC } from 'react'
import { IHeaderProps } from './Header.props'

const Header: FC<IHeaderProps> = ({bg}) => {
	return <header className={`${bg === 'white' ? 'bg-white' : 'bg-main-400'} bg-opacity-50`}>
		<Image src='./img/logo.svg' width={70} height={70} alt='Simpatik'/> 
	</header>
}

export default Header