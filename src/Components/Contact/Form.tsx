export default function Form() {
    return (
        <div className="w-full sm:w-11/12 md:w-7/12 lg:w-3/12">
            <h1 className="dark:text-gray-200 text-center text-gray-900 text-3xl font-bold my-4">Contáctame</h1>
            <form className="max-w-sm mx-auto dark:bg-[#1F1F1F] bg-[#68cbe9] p-5 rounded-xl w-full shadow-md shadow-gray-700 dark:shadow-none">
                <label htmlFor="name" className="block my-2 text-sm font-medium dark:text-gray-300 text-gray-900">Nombre:</label>
                <input type="text" id="name" aria-describedby="helper-text-explanation" className="bg-[#ECECEC] dark:bg-[#292929] text-gray-900 text-sm rounded-lg w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Escribe aqui.."></input>

                <label htmlFor="cel" className="block my-2 text-sm font-medium dark:text-gray-300 text-gray-900">Teléfono:</label>
                <input type="number" id="cel" aria-describedby="helper-text-explanation" className="bg-[#ECECEC] dark:bg-[#292929] text-gray-900 text-sm rounded-lg w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Escribe aqui.."></input>
                
                <label htmlFor="email" className="block my-2 text-sm font-medium dark:text-gray-300 text-gray-900">Correo electrónico:</label>
                <input type="email" id="email" aria-describedby="helper-text-explanation" className="bg-[#ECECEC] dark:bg-[#292929] text-gray-900 text-sm rounded-lg w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="nombre@gmal.com"></input>

                <label htmlFor="message" className="block my-2 text-sm font-medium dark:text-gray-300 text-gray-900">Asunto:</label>
                <textarea id="message" rows={4} className="block p-2.5 w-full text-sm text-gray-900 bg-[#ECECEC] dark:bg-[#292929] rounded-lg dark:border-gray-600 dark:placeholder-gray-400 dark:text-white" placeholder="Escribe aqui.."></textarea>

                <button type="submit" className="text-center w-full sm:w-20 dark:bg-teal-700 bg-[#0B7C83] hover:font-bold py-1 rounded text-gray-200 mt-2 mx-auto">Enviar</button>
            </form>
        </div>
    )
}
