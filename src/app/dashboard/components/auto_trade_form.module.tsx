import React, {useEffect, useState} from "react";
import styles from "@/css/dashboard.module.css";

const AutoTradeForm = ((props: any) => {
    const [ticker, setTicker] = useState('');
    const [action, setAction] = useState('');
    const [orderType, setOrderType] = useState('');
    const [strikePrice, setStrikePrice] = useState('');
    const [orderQuantity, setOrderQuantity] = useState('');
    const [contractDate, setContractDate] = useState('');
    const handleSubmit = async (event: { preventDefault: any; }) => {
        event.preventDefault();
        // Fetch data from the API using ticker
        const response = await fetch(`/api/create_order?` + new URLSearchParams({
            ticker: ticker,
            action: action,
            orderType: orderType,
            strikePrice: strikePrice,
            orderQuantity: orderQuantity,
            contractDate: contractDate})); // Specify the backend URL
        if (response.ok) {
            console.log(response);
        } else {
            console.error("Failed to create order, please see the following message: ", response.body);
            // TODO 001:
            //  Whenever the order creation fails, we need to indicate which field to change,
            //   so that the user is aware of what field needs to be changed in order make the
            //   proper adjustments and resubmit the order.
            // TODO 002:
            //  Whenever the order creation fails, we need to wipe the indicated fields,
            //   so that the user is unable to resubmit an already failed order,
            //   to prevent confusion.
        }
    };

    return(
        <div className={styles.container}>
            <h2 className="text-4xl py-5 font-extrabold dark:text-white">Create Order</h2>
            <form onSubmit={handleSubmit} action="#">
                <div className={styles.form__container}>
                    <div className={styles.field__container}>
                        <label className={styles.field_labels}>Action</label>
                        <select aria-placeholder={""} id="action"
                                className={styles.field__stockName}
                                onChange={(e) => setAction(e.target.value)}>
                            <option value="null">Choose Action</option>
                            <option value="BUY">Buy</option>
                            <option value="SELL">Sell</option>

                        </select>
                    </div>
                    <div className="w-full">
                        <label className={styles.field_labels}>Order
                            Type</label>
                        <select aria-placeholder={""} id="order_type"
                                onChange={(e) => setOrderType(e.target.value)}
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                            <option value="null">Choose Order Type</option>
                            <option value="C">Call</option>
                            <option value="P">Put</option>
                        </select>
                    </div>
                    <div className="w-full">
                        <label className={styles.field_labels}>Strike
                            Price</label>
                        <input type="text" id="strike_price"
                               onChange={(e) => setStrikePrice(e.target.value)}
                               className={styles.field__stockName}
                               placeholder="$" required/>
                    </div>
                    <div className="w-full">
                        <label className={styles.field_labels}>Contract Length</label>
                        <input type="text" id="contract_date"
                               onChange={(e) => setContractDate(e.target.value)}
                               className={styles.field__stockName}
                               placeholder="Contract Length" required/>
                    </div>
                    <div className="w-full">
                        <label className={styles.field_labels}>Ticker</label>
                        <input type="text" id="ticker"
                               onChange={(e) => setTicker(e.target.value)}
                               className={styles.field__stockName}
                               placeholder="Ticker Name" required/>
                    </div>
                    <div className="w-full">
                        <label className={styles.field_labels}>Order
                            Quantity</label>
                        <input type="text" id="order_quantity"
                               onChange={(e) => setOrderQuantity(e.target.value)}
                               className={styles.field__stockName}
                               placeholder="Order Quantity" required/>
                    </div>
                    <div className="w-full">
                        <label className={styles.field_labels}>- - - - - - -
                            - </label>
                        <button type="submit"
                                className={styles.button__submit}>Submit
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
})

export default AutoTradeForm
