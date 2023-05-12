import {Link} from "react-router-dom";

export const Home = () => {
    return (
            <>
                {/*<button onClick={() => props.getTodos()}>GET TODOS</button>*/}

                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    <div>
                        <img className="h-auto max-w-full rounded-lg"
                             src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg" alt=""/>
                    </div>
                    <div>
                        <img className="h-auto max-w-full rounded-lg"
                             src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg" alt=""/>
                    </div>
                    <div>
                        <img className="h-auto max-w-full rounded-lg"
                             src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg" alt=""/>
                    </div>
                    <div>
                        <img className="h-auto max-w-full rounded-lg"
                             src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg" alt=""/>
                    </div>
                    <Link to="/wizard" state={"https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg"}>
                        <div>
                            <img className="h-auto max-w-full rounded-lg"
                                 src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg" alt=""/>
                        </div>
                    </Link>
                    <div>
                        <img className="h-auto max-w-full rounded-lg"
                             src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg" alt=""/>
                    </div>
                    <div>
                        <img className="h-auto max-w-full rounded-lg"
                             src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-6.jpg" alt=""/>
                    </div>
                    <div>
                        <img className="h-auto max-w-full rounded-lg"
                             src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-7.jpg" alt=""/>
                    </div>
                    <div>
                        <img className="h-auto max-w-full rounded-lg"
                             src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-8.jpg" alt=""/>
                    </div>
                    <div>
                        <img className="h-auto max-w-full rounded-lg"
                             src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-9.jpg" alt=""/>
                    </div>
                    <div>
                        <img className="h-auto max-w-full rounded-lg"
                             src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-10.jpg" alt=""/>
                    </div>
                    <div>
                        <img className="h-auto max-w-full rounded-lg"
                             src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-11.jpg" alt=""/>
                    </div>
                </div>
            </>
    )
}
