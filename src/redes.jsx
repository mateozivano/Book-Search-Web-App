import { GoMarkGithub, GoLogoGithub } from "react-icons/go";
import { AiFillLinkedin } from "react-icons/ai";

const Redes = () => {
    function linkedin() {
        window.location.href = 'https://www.linkedin.com/in/mateo-zivano/';
    }
    function github () {
        window.location.href = 'https://github.com/mateozivano/Book-Search-Web-App/tree/main';
    }

    return (
        <div className="sm:flex sm:justify-evenly">
            <div className="flex flex-col my-6">
                <p className="text-4xl font-sans mx-auto sm:mx-0 sm:py-1 sm:-mb-4 sm:text-4xl sm:ml-3">Pongámonos en </p>
                <p className="font-bold text-7xl mx-auto -mt-4 sm:mx-0 sm:py-2 sm:text-8xl sm:ml-1">contacto</p>
                <p className="font-serif mx-auto text-sm sm:mx-0 sm:py-2 sm:text-base sm:-mt-2 sm:ml-3">Seguime en las redes para saber qué estoy haciendo</p>
            </div>
            <div className="flex flex-col sm:mt-9">
                <p className="mx-auto">Accede a mi perfil de Github </p>
                <button onClick={github} className="mx-auto px-2 border rounded-full"><div className='flex items-center'><GoMarkGithub className="" size={30} /> <GoLogoGithub className="" size={60} /></div></button>
                <p className="mx-auto">Conectemos por LinkedIn</p>
                <button onClick={linkedin} className="mx-auto px-4 py-1 border rounded-full"><AiFillLinkedin size={40}/></button>
            </div>

        </div>

    )
}
export default Redes