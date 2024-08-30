export default function Form() {
    return (
        <div className="bg-[#EBEBEB] dark:bg-[#121212] w-3/12">
            <h1>Contactame</h1>
            <form className="max-w-sm mx-auto">
                <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nombre:</label>
                <input type="text" id="name" aria-describedby="helper-text-explanation" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Escribe aqui.."></input>

                <label htmlFor="cel" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Teléfono:</label>
                <input type="number" id="cel" aria-describedby="helper-text-explanation" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Escribe aqui.."></input>
                
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Correo electrónico:</label>
                <input type="email" id="email" aria-describedby="helper-text-explanation" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="nombre@gmal.com"></input>

                <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Asunto:</label>
                <textarea id="message" rows={4} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Escribe aqui.."></textarea>

                <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Enviar</button>
            </form>
        </div>
    )
}