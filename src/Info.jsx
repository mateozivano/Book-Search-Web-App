import { FcGoogle } from "react-icons/fc";
import { RiReactjsFill } from "react-icons/ri";
import { SiVite, SiJavascript, SiTailwindcss } from "react-icons/si";



const Informacion = () => {
    const jsColor = "#F0DB4F"
    const reactColor = "#61DBFB"
    const tailwindColor = "#4dc0b5"
    return (
        <div className="mt-10 px-6 sm:px-12">
            <section className="lg:flex lg:divide-x ">
                <div className="mb-10 lg:mx-2 lg:pt-2">
                    <p className="text-2xl mb-4 font-semibold">El amor a los libros, nuestro motor.</p>
                    <p className="font-serif italic">Nuestra aplicación nace de la necesidad de encontrar las lecturas que necesitamos y de la afición a la programación.</p>
                </div>
                <div className=" lg:mx-2 lg:ml-4 lg:pt-2 lg:pl-8">
                    <p>Bienvenidos a esta página, donde la pasión por los libros y la programación se mezclan. Hecha para lectores empedernidos, a quienes nos mueve el amor por los libros, que consideramos nuestro motor, y para quienes necesitamos encontrarlos en cualquier momento.</p>
                    <p>En esta página web, hemos utilizado un conjunto de tecnologías para ofrecer una experiencia de usuario óptima y una funcionalidad fluida. Entre estas tecnologías se encuentran React, Vite.js, Tailwind, y la API de Google Books.</p>
                </div>
            </section>
            <div className="my-20">
                <p className="text-xl text-gray-600 text-opacity-40">Powered by:</p>
                <div className="md:flex">
                    <FcGoogle size={60} className="mx-auto my-6" />
                    <RiReactjsFill size={60} color={reactColor} className="mx-auto my-6" />
                </div>
                <div className="md:flex md:mt-10">
                    <SiVite size={60} className="mx-auto my-6"/>
                    <SiJavascript size={60} color={jsColor} className="mx-auto my-6 bg-black"/>
                    <SiTailwindcss size={60} color={tailwindColor} className="mx-auto my-6"/></div>
            </div>
        </div>
    )
}
export default Informacion
{/* <div className="mt-12">
    <h2 className="text-center text-4xl my-10">Sobre el desarrollo</h2>
    <div className="divide-y flex flex-col justify-">
        <p className="my-6 py-6">React es una biblioteca de JavaScript que nos ha permitido crear una interfaz de usuario rápida y dinámica. Gracias a React, podemos ofrecer una experiencia interactiva y fácil de usar para nuestros usuarios.</p>
        <p className="my-6 py-6">Vite.js es una herramienta de construcción de paquetes rápida y moderna que nos ha permitido optimizar el rendimiento de la página. Vite.js nos ha permitido hacer que la página se cargue más rápido y que la experiencia de usuario sea más fluida.</p>
        <p className="my-6 py-6">Tailwind es un framework de CSS que nos ha permitido diseñar una interfaz de usuario moderna y atractiva. Con Tailwind, hemos podido crear un diseño limpio y elegante que es fácil de navegar y agradable a la vista.</p>
        <p className="my-6 py-6">Finalmente, hemos utilizado la API de Google Books para permitir a los usuarios buscar y encontrar los libros que necesitan. Gracias a la API de Google Books, podemos ofrecer una amplia selección de libros para nuestros usuarios y ayudarles a encontrar los que más les interesen.</p>
        <p className="my-6 py-6">En resumen, estas tecnologías nos han permitido crear una página web moderna y funcional que es fácil de usar y agradable a la vista.</p>
    </div>
</div> */}