const Proyectos = () => {
    function pokeLink() {
        window.location.href = 'https://mateozivano.github.io/PokeRandomTeam/';
    }
    function bookAppLink() {
        window.location.href = 'https://mzbookapp.netlify.app/';
    }
    return (
        <div className="">
            <h1 className="text-2xl font-bold text-center my-4">+proyectos</h1>
            <p className="text-sm mx-4 text-center">En esta sección se encuentran más proyectos del mismo creador de esta página web</p>
            <div className="flex flex-col mx-auto mt-8 sm:flex-row">
                <div className="my-10 sm:my-6 mx-auto">
                    <button onClick={pokeLink} className="">
                        <img src="../public/file-pokeball-png-0.png" className="mx-auto h-32" alt="" />
                        <p>Random Pokemon Team Generator</p>
                    </button>
                </div>
                <div className="my-6 mx-auto">
                    <button onClick={bookAppLink} className="">
                        <img src="../public/LogoLibroAbierto.png" className="mx-auto h-32" alt="" />
                        <p>App de búsqueda de libros</p>
                    </button>
                </div>
                <div className="my-6 mx-auto">
                    <button className="">
                        <img src="../public/icon-image-not-found-free-vector.webp" className="mx-auto h-32" alt="" />
                        <p>Próximamente</p>
                    </button>
                </div>
                <div className="my-6 mx-auto">
                    <button className="">
                        <img src="../public/icon-image-not-found-free-vector.webp" className="mx-auto h-32" alt="" />
                        <p>Próximamente</p>
                    </button>
                </div>
            </div>
        </div>
    )
}
export default Proyectos