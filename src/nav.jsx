import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
import { useState } from 'react'

const Navbar = () => {
    const [nav, setNav] = useState(true)

    const handleNav = () => {
        setNav(!nav)
    }

    return (
        <div className="text-black flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 border-b border-black">
            <h1 className="text-red-800 m-8 text-3xl font-extrabold w-full">BuscaBooks</h1>
            <ul className="hidden md:flex">
                <li className="p-4">Info</li>
                <li className="p-4">+Proyectos</li>
                <li className="p-4">Redes</li>
            </ul>
            <div onClick={handleNav} className='block md:hidden'>
                {!nav ? <AiOutlineClose /> : <AiOutlineMenu size={20} />}

            </div>
            <div className={!nav ? 'fixed md:hidden left-0 h-full top-0 w-[60%] border-r border-r-gray-900 bg-white ease-in-out duration-500' : 'fixed left-[-100%]'}>
                <h1 className="text-red-800 m-4 text-3xl font-extrabold w-full">BuscaBooks</h1>
                <ul className='p-4 uppercase'>

                    <li className="p-4 border-b border-gray-400">Info</li>
                    <li className="p-4 border-b border-gray-400">+Proyectos</li>
                    <li className="p-4 border-b border-gray-400">Redes</li>


                </ul>
            </div>
        </div>

    )
}
export default Navbar