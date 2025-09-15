import React, { useEffect, useState } from "react";
import styles from "@/css/autotrade.module.css";

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
            contractDate: contractDate
        })); // Specify the backend URL
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

    return (
        <div className={styles.autotradeContainer}>
            <h2 className={styles.autotradeTitle}>Create Order</h2>
            <div className={styles.autotradeFormContainer}>
                <form onSubmit={handleSubmit} action="#">
                    <div className={styles.autotradeFieldContainer}>
                        <div className={styles.autotradeActionContainer}>
                            <text className={styles.autotradeActionLabel}>Action Type</text>
                            <select aria-placeholder={""} id="action"
                                className={styles.autotradeActions}
                                onChange={(e) => setAction(e.target.value)}
                                aria-label="Action">
                                <option value="null">Choose Action</option>
                                <option id={styles.buyAction} value="BUY">Buy</option>
                                <option id={styles.sellAction} value="SELL">Sell</option>
                            </select>
                        </div>
                        <div className={styles.autotradeTypeContainer}>
                            <text className={styles.autotradeTypeLabel}>Order Type</text>
                            <select aria-placeholder={""} id="order_type"
                                className={styles.autotradeTypes}
                                onChange={(e) => setOrderType(e.target.value)}>
                                <option value="null">Choose Type</option>
                                <option id={styles.callType} value="Call">Call</option>
                                <option id={styles.putType} value="Put">Put</option>
                            </select>
                        </div>
                        <div className={styles.autotradeStrikeContainer}>
                            <text className={styles.autotradeStrikeLabel}>Strike Price</text>
                            <input type="text" id="strike_price"
                                className={styles.autotradeStrikes}
                                onChange={(e) => setStrikePrice(e.target.value)}
                                placeholder="$" required />
                        </div>
                        <div className={styles.autotradeExpiryContainer}>
                            <text className={styles.autotradeExpiryLabel}>Contract Length</text>
                            <input type="text" id="contract_date"
                                className={styles.autotradeExpiry}
                                onChange={(e) => setContractDate(e.target.value)}
                                placeholder="Contract Length (# of Days)" required />
                        </div>
                        <div className={styles.autotradeTickerContainer}>
                            <text className={styles.autotradeTickerLabel}>Ticker</text>
                            <input type="text" id="ticker"
                                className={styles.autotradeTicker}
                                onChange={(e) => setTicker(e.target.value)}
                                placeholder="Ticker Name" required />
                        </div>
                        <div className={styles.autotradeQuantityContainer}>
                            <text className={styles.autotradeQuantityLabel}>Order
                                Quantity</text>
                            <input type="text" id="order_quantity"
                                className={styles.autotradeQuantity}
                                onChange={(e) => setOrderQuantity(e.target.value)}
                                placeholder="Order Quantity" required />
                        </div>
                    </div>
                    <div className={styles.autotradeSubmitContainer}>
                        <button type="submit"
                            className={styles.autotradeSubmitButton}>Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
})

export default AutoTradeForm
