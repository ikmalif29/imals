export default function Card() {
    return (
        <div className="w-full grid grid-cols-3 p-8 gap-6 py-10 mt-10">
            <article className="overflow-hidden rounded-lg shadow transition hover:shadow-lg">
                <img
                    alt=""
                    src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                    className="h-56 w-full object-cover"
                />

                <div className="bg-white p-4 sm:p-6">
                    <time datetime="2022-10-10" className="block text-xs text-gray-500"> 10th Oct 2022 </time>

                    <a href="#">
                        <h3 className="mt-0.5 text-lg text-gray-900">How to position your furniture for positivity</h3>
                    </a>

                    <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae dolores, possimus
                        pariatur animi temporibus nesciunt praesentium dolore sed nulla ipsum eveniet corporis quidem,
                        mollitia itaque minus soluta, voluptates neque explicabo tempora nisi culpa eius atque
                        dignissimos. Molestias explicabo corporis voluptatem?
                    </p>
                </div>
            </article>
            <article className="group">
                <img
                    alt=""
                    src="https://images.unsplash.com/photo-1631451095765-2c91616fc9e6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                    className="h-56 w-full rounded-xl object-cover shadow-xl transition group-hover:grayscale-[50%]"
                />

                <div className="p-4">
                    <a href="#">
                        <h3 className="text-lg font-medium text-gray-900">Finding the Journey to Mordor</h3>
                    </a>

                    <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae dolores, possimus
                        pariatur animi temporibus nesciunt praesentium dolore sed nulla ipsum eveniet corporis quidem,
                        mollitia itaque minus soluta, voluptates neque explicabo tempora nisi culpa eius atque
                        dignissimos. Molestias explicabo corporis voluptatem?
                    </p>
                </div>
            </article>

            <article className="overflow-hidden rounded-lg border border-gray-100 bg-white shadow-sm">
                <img
                    alt=""
                    src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                    className="h-56 w-full object-cover"
                />

                <div className="p-4 sm:p-6">
                    <a href="#">
                        <h3 className="text-lg font-medium text-gray-900">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        </h3>
                    </a>

                    <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae dolores, possimus
                        pariatur animi temporibus nesciunt praesentium dolore sed nulla ipsum eveniet corporis quidem,
                        mollitia itaque minus soluta, voluptates neque explicabo tempora nisi culpa eius atque
                        dignissimos. Molestias explicabo corporis voluptatem?
                    </p>

                    <a href="#" className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-600">
                        Find out more

                        <span aria-hidden="true" className="block transition-all group-hover:ms-0.5 rtl:rotate-180">
                            &rarr;
                        </span>
                    </a>
                </div>
            </article>

            <article className="relative overflow-hidden rounded-lg shadow transition hover:shadow-lg">
                <img
                    alt=""
                    src="https://images.unsplash.com/photo-1661956602116-aa6865609028?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80"
                    className="absolute inset-0 h-full w-full object-cover"
                />

                <div className="relative bg-gradient-to-t from-gray-900/50 to-gray-900/25 pt-32 sm:pt-48 lg:pt-64">
                    <div className="p-4 sm:p-6">
                        <time datetime="2022-10-10" className="block text-xs text-white/90"> 10th Oct 2022 </time>

                        <a href="#">
                            <h3 className="mt-0.5 text-lg text-white">How to position your furniture for positivity</h3>
                        </a>

                        <p className="mt-2 line-clamp-3 text-sm/relaxed text-white/95">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae dolores, possimus
                            pariatur animi temporibus nesciunt praesentium dolore sed nulla ipsum eveniet corporis
                            quidem, mollitia itaque minus soluta, voluptates neque explicabo tempora nisi culpa eius
                            atque dignissimos. Molestias explicabo corporis voluptatem?
                        </p>
                    </div>
                </div>
            </article>
        </div>
    )
}