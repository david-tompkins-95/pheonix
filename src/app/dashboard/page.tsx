import Layout from "../components/layout";

export default function Dashboard() {
    return (
        <Layout>
            <main className=" flex-col items-center">
                <div className="max-w-2xl px-2 py-4 mx-auto lg:py-16">
                    <form action="#">
                        <div className="grid gap-5 mb-4 sm:grid-cols-4 sm:gap-6 sm:mb-5">
                            <div className="w-full">
                            </div>
                            <div className="w-full">
                            </div>
                            <div className="w-full">
                            </div>
                            <div className="w-full">
                            </div>
                        </div>
                    </form>
                </div>

                <div className="max-w-2xl px-2 py-4 mx-auto lg:py-16">
                    <form action="#">
                        <div className="grid gap-5 mb-4 sm:grid-cols-4 sm:gap-6 sm:mb-5">
                            <div className="w-full">
                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Indicator</label>
                                <select placeholder="" id="indicator" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                                    <option value="Buy">Buy Indicator</option>
                                    <option value="Sell">Sell Indicator</option>
                                </select>
                            </div>
                            <div className="w-full">
                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Signal Type</label>
                                <select placeholder="" id="signal" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                                    <option value="mcad">MCAD</option>
                                </select>
                            </div>
                            <div className="w-full">
                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Stock Name</label>
                                <input type="" id="stock" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Stock Name" required />
                            </div>
                            <div className="w-full">
                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Scan</label>
                                <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-6 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add</button>

                            </div>
                        </div>
                    </form>
                </div>

                <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 border-separate border-spacing-2 border border-slate-400 ...">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                                <th className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white border border-slate-300 ...">Indicator</th>
                                <th className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white  border border-slate-300 ...">Signal</th>
                                <th className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white  border border-slate-300 ...">Stock Name</th>
                                <th className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white  border border-slate-300 ...">Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                                <td className="px-6 py-4 border border-slate-300 ...">Buy</td>
                                <td className="px-6 py-4 border border-slate-300 ...">MCAD</td>
                                <td className="px-6 py-4 border border-slate-300 ...">SPY</td>
                                <td className="px-6 py-4 border border-slate-300 ...">06-09-2023</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </main>
        </Layout>
    )
}