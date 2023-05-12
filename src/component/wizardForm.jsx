import {useState} from "react";
import {useLocation} from "react-router-dom";

export const WizardForm = () => {

    const [stage, setStage] = useState(1);
    const [form, setForm] = useState(
        {
            email: null,
            password: null,
            firstName: null,
            lastName: null,
            phone: null,
            numberStreet: null,
            street: null,
            country: null,
            postalCode: null
        });
    const handleChangeForm = event => {
        const {name, value} = event.target
        setForm({...form, [name]: value})
    }
    const location = useLocation();
    const urlImage = location.state;
    return (
        <>

            <ol className="flex items-center w-full text-sm font-medium text-center text-gray-500 dark:text-gray-400 sm:text-base">
                {stage === 1 &&
                    <li type="button"
                        className="flex md:w-full items-center text-blue-600 dark:text-blue-500 sm:after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-gray-700">
                        <span
                            className="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-200 dark:after:text-gray-500">
                            <svg aria-hidden="true" className="w-4 h-4 mr-2 sm:w-5 sm:h-5" fill="currentColor"
                                 viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd"
                                                                                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                                                                              clipRule="evenodd"></path></svg>
                            <span className="mr-2">1</span>
                            Personal <span className="hidden sm:inline-flex sm:ml-2">Info</span>
                        </span>
                    </li>}
                {stage !== 1 &&
                    <li className="flex md:w-full items-center dark:text-blue-500 sm:after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-gray-700">
                        <span
                            className="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-200 dark:after:text-gray-500">
                            <span className="mr-2">1</span>
                            Personal <span className="hidden sm:inline-flex sm:ml-2">Info</span>
                        </span>
                    </li>}
                {stage === 2 &&
                    <li className="flex md:w-full items-center text-blue-600 after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-gray-700">
                        <span
                            className="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-200 dark:after:text-gray-500">
                            <svg aria-hidden="true" className="w-4 h-4 mr-2 sm:w-5 sm:h-5" fill="currentColor"
                                 viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd"
                                                                                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                                                                              clipRule="evenodd"></path></svg>
                            <span className="mr-2">2</span>
                            Account <span className="hidden sm:inline-flex sm:ml-2">Info</span>
                        </span>
                    </li>}
                {stage !== 2 &&
                    <li className="flex md:w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-gray-700">
                        <span
                            className="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-200 dark:after:text-gray-500">
                            {stage === 2 &&
                                <svg aria-hidden="true" className="w-4 h-4 mr-2 sm:w-5 sm:h-5" fill="currentColor"
                                     viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd"
                                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                          clipRule="evenodd"></path>
                                </svg>}
                            <span className="mr-2">2</span>
                            Delivery <span className="hidden sm:inline-flex sm:ml-2">Info</span>
                        </span>
                    </li>}
                {stage === 3 &&
                    <li className=" mr-2 flex items-center text-blue-600">
                        <svg aria-hidden="true" className="w-4 h-4 mr-2 sm:w-5 sm:h-5" fill="currentColor"
                             viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd"
                                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                  clipRule="evenodd"></path>
                        </svg>
                        <span className="mr-2">3</span>
                        Confirmation
                    </li>}
                {stage !== 3 &&
                    <li className=" mr-2 flex items-center">
                        <span className="mr-2">3</span>
                        Confirmation
                    </li>}
            </ol>
            <br/>
            {stage === 1 && <>
                <form onSubmit={() => {
                    setStage(stage + 1)
                }}>
                    <div className="relative z-0 w-full mb-6 group">
                        <input onChange={event => handleChangeForm(event)} type="email" name="email" id="floating_email"
                               className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                               placeholder=" " required/>
                        <label htmlFor="floating_email"
                               className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email
                            address</label>
                    </div>
                    <div className="relative z-0 w-full mb-6 group">
                        <input onChange={event => handleChangeForm(event)} type="password" name="password"
                               id="floating_password"
                               className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                               placeholder=" " required/>
                        <label htmlFor="floating_password"
                               className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
                    </div>
                    <div className="grid md:grid-cols-2 md:gap-6">
                        <div className="relative z-0 w-full mb-6 group">
                            <input onChange={event => handleChangeForm(event)} type="text" name="firstName"
                                   id="floating_first_name"
                                   className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                   placeholder=" " required/>
                            <label htmlFor="floating_first_name"
                                   className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">First
                                name</label>
                        </div>
                        <div className="relative z-0 w-full mb-6 group">
                            <input onChange={event => handleChangeForm(event)} type="text" name="lastName"
                                   id="floating_last_name"
                                   className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                   placeholder=" " required/>
                            <label htmlFor="floating_last_name"
                                   className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Last
                                name</label>
                        </div>
                    </div>
                    <div className="grid md:grid-cols-2 md:gap-6">
                        <div className="relative z-0 w-full mb-6 group">
                            <input onChange={event => handleChangeForm(event)} type="tel" pattern="[0-9]{10}"
                                   name="phone"
                                   id="floating_phone"
                                   className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                   placeholder=" " required/>
                            <label htmlFor="floating_phone"
                                   className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Phone
                                number (06 12 34 56 78)</label>
                        </div>
                    </div>
                    <button type="submit"
                            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Continue
                        <svg aria-hidden="true" className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20"
                             xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd"
                                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                  clipRule="evenodd"></path>
                        </svg>
                    </button>
                </form>
            </>
            }
            {stage === 2 &&
                <>
                    <form onSubmit={() => {
                        setStage(stage + 1)
                    }}>
                        <div className="grid md:grid-cols-2 md:gap-6">
                            <div className="relative z-0 w-full mb-6 group">
                                <input onChange={event => handleChangeForm(event)} type="number" name="numberStreet"
                                       id="floating_email"
                                       className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                       placeholder=" " required/>
                                <label htmlFor="floating_email"
                                       className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Number</label>
                            </div>
                            <div className="relative z-0 w-full mb-6 group">
                                <input onChange={event => handleChangeForm(event)} type="text" name="street"
                                       id="floating_password"
                                       className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                       placeholder=" " required/>
                                <label htmlFor="floating_password"
                                       className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Street</label>
                            </div>
                            <div className="relative z-0 w-full mb-6 group">
                                <input onChange={event => handleChangeForm(event)} type="text" name="country"
                                       id="floating_repeat_password"
                                       className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                       placeholder=" " required/>
                                <label htmlFor="floating_repeat_password"
                                       className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Country</label>
                            </div>

                            <div className="relative z-0 w-full mb-6 group">
                                <input onChange={event => handleChangeForm(event)} type="number" name="postalCode"
                                       id="floating_first_name"
                                       className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                       placeholder=" " required/>
                                <label htmlFor="floating_first_name"
                                       className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Postal
                                    code</label>
                            </div>
                        </div>
                        {stage === 2 &&
                            <button type="submit"
                                    className="text-gray-900 bg-[#F7BE38] hover:bg-[#F7BE38]/90 focus:ring-4 focus:outline-none focus:ring-[#F7BE38]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#F7BE38]/50 mr-2 mb-2">
                                <svg className="w-4 h-4 mr-2 -ml-1" aria-hidden="true" focusable="false"
                                     data-prefix="fab"
                                     data-icon="paypal" role="img" xmlns="http://www.w3.org/2000/svg"
                                     viewBox="0 0 384 512">
                                    <path fill="currentColor"
                                          d="M111.4 295.9c-3.5 19.2-17.4 108.7-21.5 134-.3 1.8-1 2.5-3 2.5H12.3c-7.6 0-13.1-6.6-12.1-13.9L58.8 46.6c1.5-9.6 10.1-16.9 20-16.9 152.3 0 165.1-3.7 204 11.4 60.1 23.3 65.6 79.5 44 140.3-21.5 62.6-72.5 89.5-140.1 90.3-43.4 .7-69.5-7-75.3 24.2zM357.1 152c-1.8-1.3-2.5-1.8-3 1.3-2 11.4-5.1 22.5-8.8 33.6-39.9 113.8-150.5 103.9-204.5 103.9-6.1 0-10.1 3.3-10.9 9.4-22.6 140.4-27.1 169.7-27.1 169.7-1 7.1 3.5 12.9 10.6 12.9h63.5c8.6 0 15.7-6.3 17.4-14.9 .7-5.4-1.1 6.1 14.4-91.3 4.6-22 14.3-19.7 29.3-19.7 71 0 126.4-28.8 142.9-112.3 6.5-34.8 4.6-71.4-23.8-92.6z"></path>
                                </svg>
                                Check out with PayPal
                            </button>
                        }
                    </form>
                </>
            }
            {stage === 3 &&
                <>
                    <div className="flex flex-col items-center">
                        <div
                            className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                            {urlImage !== null ?
                                <img className="rounded-t-lg" src={urlImage} alt=""/> :
                                <img className="rounded-t-lg" src="mignon.gif" alt=""/>
                            }

                            <div className="p-5">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Thanks
                                    for
                                    your order</h5>
                                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">We are doing our best
                                    to
                                    get
                                    your order to you.</p>
                                <a
                                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                    Return to my orders
                                    <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" height="38"
                                         viewBox="0 96 960 960" width="48">
                                        <path
                                            d="m704 917 139-138-42-42-97 95-39-39-42 43 81 81ZM240 436h480v-60H240v60Zm492.5 579q-77.5 0-132.5-55.5T545 828q0-78.435 54.99-133.718Q654.98 639 733 639q77 0 132.5 55.282Q921 749.565 921 828q0 76-55.5 131.5t-133 55.5ZM120 975V276q0-24.75 17.625-42.375T180 216h600q24.75 0 42.375 17.625T840 276v327q-14.169-6.857-29.085-11.429Q796 587 780 584V276H180v599h310q2.885 18.172 8.942 34.586Q505 926 513 942l-33 33-60-60-60 60-60-60-60 60-60-60-60 60Zm120-199h252.272q3.728-16 8.228-31t12.5-29H240v60Zm0-170h384q22-11 46-17.5t50-8.5v-34H240v60Zm-60 269V276v599Z"/>
                                    </svg>
                                </a>(
                            </div>

                            <div
                                className=" max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                                <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
                                    {form.firstName} {form.lastName}</h5>
                                <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">{form.email}</p>
                                <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">{form.numberStreet} {form.street} {form.country} {form.postalCode}</p>
                                <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">{form.phone}</p>
                            </div>
                        </div>
                    </div>
                </>

            }
            {stage > 1 && stage < 3 &&
                <button onClick={() => {
                    setStage(stage - 1)
                }}
                        className=" m-3 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Return
                </button>
            }
        </>
    )
}
