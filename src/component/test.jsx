import {useRef, useState} from "react";


export const Test = (props) => {
    const [labels, setLabels] = useState({
        description: '',
        details: ''
    });

    const todoRef = useRef()

    const [form, setForm] = useState(
        {
            identifiant: null,
            password: null
        });

    const handleChange = event => {
        const {name, value} = event.target
        setLabels({...labels, [name]: value})
    }
    const handleChangeForm = event => {
        const {name, value} = event.target
        setForm({...form, [name]: value})
    }

    const [isSubmit, setSubmit] = useState(false);

    const verifySubmit = () => {
        if (form.identifiant && form.password) {
            setSubmit(true);
        } else {
            setSubmit(false);
        }
    }
    return (
        <div>
            <h1 className="text-3xl font-bold underline" style={{fontSize: "48px"}}>{props.props.counter.value}</h1>
            <br/>
            <button
                className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 "
                onClick={() => props.props.increment()}>+
            </button>
            <button
                className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                onClick={() => props.props.decrement()}>-
            </button>
            <br/>
            <div className="grid gap-6 mb-6 md:grid-cols-2">
                <input
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    type="text" name="description" onChange={event => handleChange(event)}/>
                <input
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    type="text" name="details" onChange={event => handleChange(event)}/>
            </div>
            <h2 className="text-2xl font-bold underline">Description: {labels.description}</h2>
            <h3 className="text-1xl font-bold underline">Details: {labels.details}</h3>

            <label>Identifiant
                <input
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    onChange={event => handleChangeForm(event)} type="text" name="identifiant"/>
            </label>
            <label>Password
                <input
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    onChange={event => handleChangeForm(event)} type="password" name="password"/>
            </label>
            <button
                className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                onClick={() => verifySubmit()}>Submit
            </button>
            {isSubmit && <>
                <p>Identifiant: {form.identifiant}</p>
                <p>Password: {form.password}</p>
            </>
            }
            <div>
                <h1 className="text-3xl font-bold underline" style={{fontSize: "48px"}}>TODOS</h1>
                <br/>
                <button type="button"
                        onClick={() => props.props.getTodos()}
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">GET
                    TODOS
                </button>
                <div className="grid gap-6 mb-6 md:grid-cols-2">
                    <input ref={todoRef}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        type="text" name="description"/>

                    <button type="button"
                            onClick={() => props.props.postTodo(todoRef.current.value)}
                            className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">POST
                    </button>

                </div>
            </div>
        </div>
    )
}
