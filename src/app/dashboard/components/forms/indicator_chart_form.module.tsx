import styles from "@/app/dashboard/dashboard.module.css";
import React, {useState, useEffect, FormEvent, useRef} from 'react';
import axios, { CancelTokenSource } from 'axios';
import AutoTradeForm from "@/app/dashboard/components/forms/auto_trade_form.module";

const IndicatorChartForm = () => {
    const [ticker, setTicker] = useState('');
    const [imageSrc, setImageSrc] = useState('');
    const [sellSignals, setSellSignals] = useState(0);
    const [buySignals, setBuySignals] = useState(0);
    const [loading, setLoading] = useState(false);
    const cancelTokenSource = useRef<CancelTokenSource | null>(null);

    const getSignals = async () => {
        await fetch(`/api/signals?` + new URLSearchParams({
            ticker: ticker
        })).then(response => response.json())
            .then(data => {
                // Access the data here
                console.log(buySignals);
                console.log(sellSignals);
                const buyCount = data["buy_count"];
                const sellCount = data["sell_count"];
                if (sellCount > sellSignals) {
                    setSellSignals(sellCount)
                    showNotification("Sell Signal Received", `Sell signals: ${sellCount}`)
                }
                if (buyCount > buySignals) {
                    setBuySignals(buyCount)
                    showNotification("Buy Signal Received", `Buy signals: ${buyCount}`);
                }
                else{
                    console.log("No Signal Change")
                }
                // Do something with the data, like updating the UI
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            }); // Specify the backend URL
    }

    // Function to display notification
    function showNotification(title: string, message: string) {
        // Check if the browser supports notifications
        if (!("Notification" in window)) {
            console.error("This browser does not support desktop notification");
        } else if (Notification.permission === "granted") {
            // If permission is already granted, show the notification
            new Notification(title, {body: message});
        } else if (Notification.permission !== "denied") {
            // Otherwise, ask for permission
            Notification.requestPermission().then(function (permission) {
                if (permission === "granted") {
                    // If permission is granted, show the notification
                    new Notification(title, {body: message});
                }
            });
        }
    }

    const handleSubmit = async (event: { preventDefault: any; }) => {
        event.preventDefault();
        if (loading) {
            // Cancel previous request if still ongoing
            if (cancelTokenSource.current) {
                cancelTokenSource.current.cancel("Operation canceled due to new request.");
            }
        }

        setLoading(true);
        cancelTokenSource.current = axios.CancelToken.source();
        try {
            const response = await axios.get('/api/chart', {
                params: { ticker },
                responseType: 'blob',
                cancelToken: cancelTokenSource.current.token
            });
            if (response.status === 200) {
                const imageBlob = new Blob([response.data], { type: 'image/png' });
                const imageUrl = URL.createObjectURL(imageBlob);
                setImageSrc(imageUrl);
                getSignals().then(r => {});
            } else {
                console.error("Failed to fetch chart data:", response.status);
            }
        } catch (error) {
            if (axios.isCancel(error)) {
                console.log("Request canceled:", error.message);
            } else {
                console.error("Failed to fetch chart data:", error);
            }
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        const interval = setInterval(() => {
            // Fetch data from the API periodically
            if (ticker) {
                handleSubmit({
                    preventDefault: () => {}
                }).then(r =>{}); // Call the submit handler
            }
        }, 30000); // Refresh every 30 seconds

        return () => {
            clearInterval(interval);
            if (cancelTokenSource.current) {
                cancelTokenSource.current.cancel("Component unmounted, canceling request.");
            }
        };
    }, [ticker]);

    return (
        <div className={styles.container}>
            <h2 className="text-4xl py-5 font-extrabold dark:text-white">Enable Signal Chart</h2>
            <form onSubmit={handleSubmit} action="#">
                <div className={styles.form__container}>
                    <div className={styles.field__container}>
                        <label className={styles.field_labels}>Stock Name</label>
                        <input
                            type="text"
                            id="ticker"
                            className={styles.field__stockName}
                            placeholder="Stock Name"
                            value={ticker}
                            onChange={(e) => setTicker(e.target.value)}
                            required
                        />
                    </div>
                    <div className={styles.field__container}>
                        <label className={styles.field_labels}>- - - - - - - - </label>
                        <button type="submit" className={styles.button__submit}>Generate</button>
                    </div>
                </div>
            </form>
            {imageSrc && (
                <div className={styles.chartContainer}>
                    <img src={imageSrc} alt="Chart" style={{width: '100%', height: 'auto'}}/>
                </div>
            )}

        </div>
    );
};

export default IndicatorChartForm;
