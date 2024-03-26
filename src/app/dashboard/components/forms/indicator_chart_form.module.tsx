import styles from "@/app/dashboard/dashboard.module.css";
import React, {useState, useEffect, FormEvent} from 'react';
import AutoTradeForm from "@/app/dashboard/components/forms/auto_trade_form.module";

const IndicatorChartForm = () => {
    const [ticker, setTicker] = useState('');
    const [imageSrc, setImageSrc] = useState('');

    const handleSubmit = async (event: { preventDefault: any; }) => {
        event.preventDefault();
        // Fetch data from the API using ticker
        const response = await fetch(`/api/chart?` + new URLSearchParams({
            ticker: ticker})); // Specify the backend URL
        if (response.ok) {
            const imageBlob = await response.blob();
            const imageUrl = URL.createObjectURL(imageBlob);
            setImageSrc(imageUrl);
        } else {
            console.error("Failed to fetch chart data:", response.status);
            // Handle error condition
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

        return () => clearInterval(interval); // Clean up interval on component unmount
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
