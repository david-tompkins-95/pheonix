"use client"
import Layout from "../components/layout";

export default function Dashboard() {

    const formdata = new FormData()

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        const data = new FormData();
    };

    return (
        <Layout>
            <main className=" flex-col items-center">
                <div className="max-w-2xl px-2 py-4 mx-auto lg:py-16">
                    <form onSubmit={handleSubmit} action="#">
                        <div className="grid gap-3 mb-2 sm:grid-cols-5 sm:gap-3 sm:mb-7">
                            <div className="w-full">
                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Indicator</label>
                                <select placeholder="" id="indicator" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                                    <option value="buy">Buy</option>
                                    <option value="sell">Sell</option>
                                </select>
                            </div>
                            <div className="w-full">
                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Signal Type</label>
                                <select placeholder="" id="signal" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                                    <option value="mcad">MCAD-I</option>
                                </select>
                            </div>
                            <div className="w-full">
                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Stock Name</label>
                                <input type="" id="ticker" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Stock Name" required />
                            </div>
                            <div className="w-full">
                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Time Period</label>
                                <select placeholder="Time Period" id="period" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                                    <option value="s">Seconds</option>
                                    <option value="min">Minutes</option>
                                    <option value="hr">Hours</option>
                                    <option value="days">Days</option>
                                    <option value="months">Months</option>
                                </select>
                            </div>
                            <div className="w-full">
                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">- - - - - - - - </label>
                                <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-6 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Scan</button>
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

                
                <div className="max-w-2xl px-2 py-4 mx-auto lg:py-16">
                    <form onSubmit={handleSubmit} action="#">
                        <div className="grid gap-3 mb-2 sm:grid-cols-5 sm:gap-3 sm:mb-7">
                            <div className="w-full">
                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Order Type</label>
                                <select placeholder="" id="transaction_type" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                                    <option value="shares">Shares</option>
                                    <option value="options">Options</option>
                                </select>
                            </div>
                            <div className="w-full">
                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Stop Limit</label>
                                <input type="" id="stop_limit" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="$$.$$" required />
                            </div>
                            <div className="w-full">
                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Amount</label>
                                <input type="" id="amount" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="$$.$$" required />
                            </div>
                            <div className="w-full">
                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Stock Name</label>
                                <input type="" id="ticker" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Stock Name" required />
                            </div>
                            <div className="w-full">
                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">- - - - - - - - </label>
                                <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-6 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
                            </div>
                        </div>
                    </form>
                </div>

                <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 border-separate border-spacing-2 border border-slate-400 ...">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                                <th className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white border border-slate-300 ...">Order Number</th>
                                <th className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white  border border-slate-300 ...">Amount</th>
                                <th className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white  border border-slate-300 ...">Stop Limit</th>
                                <th className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white  border border-slate-300 ...">Order Status</th>
                                <th className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white  border border-slate-300 ...">Stock Name</th>
                                <th className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white  border border-slate-300 ...">Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                                <td className="px-6 py-4 border border-slate-300 ...">ON-123</td>
                                <td className="px-6 py-4 border border-slate-300 ...">$500.00</td>
                                <td className="px-6 py-4 border border-slate-300 ...">$330.30</td>
                                <td className="px-6 py-4 border border-slate-300 ...">Pending</td>
                                <td className="px-6 py-4 border border-slate-300 ...">SPY</td>
                                <td className="px-6 py-4 border border-slate-300 ...">2023-09-06:12:05:45</td>
                            </tr>
                        </tbody>
                        <tbody>
                            <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                                <td className="px-6 py-4 border border-slate-300 ...">ON-124</td>
                                <td className="px-6 py-4 border border-slate-300 ...">$240.00</td>
                                <td className="px-6 py-4 border border-slate-300 ...">$330.30</td>
                                <td className="px-6 py-4 border border-slate-300 ...">Completed</td>
                                <td className="px-6 py-4 border border-slate-300 ...">SPY</td>
                                <td className="px-6 py-4 border border-slate-300 ...">2023-09-06:12:10:45</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </main>
        </Layout>
    )
}