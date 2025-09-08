"use client"
import Layout from "@/components/layout";
import React from "react";
import styles from "@/css/dashboard.module.css"
import IndicatorChartForm from "@/app/dashboard/components/indicator_chart_form.module";
import AutoTradeForm from "@/app/dashboard/components/auto_trade_form.module";

export default function Dashboard() {

    return (
        <div className={styles.dashboardContainer}>
            <main className={styles.dashboardMain}>
                <Layout>
                    <AutoTradeForm />
                    <IndicatorChartForm />
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
                </Layout>
            </main>
        </div>
    )
}