'use client';
import * as React from "react";
export default function Page() {
    const [vat, setVat] = React.useState(0);
    const [total, setTotal] = React.useState(0);

    const calculateVat = async () => {
        const input = document.querySelector('input');
        const amount = parseFloat(input.value);
        const response = await fetch('/api/vat', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ amount })
        });
        const data = await response.json();
        setVat(parseFloat(data.vat));
        setTotal(amount + parseFloat(data.vat));
    };

    return (
        <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
            <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
                <h1 className="text-4xl sm:text-5xl font-extrabold text-center sm:text-left">
                    VAT Calculator
                </h1>
                <div className="grid grid-cols-2 gap-4 w-full max-w-md">
                    <div className="flex items-center">Price:</div>
                    <div>
                        <input type="number" placeholder="Enter price" className="border rounded px-2 py-1 w-full" />
                    </div>
                    <div className="flex items-center">VAT:</div>
                    <div>
                        {vat.toFixed(2)}
                    </div>
                                        <div className="flex items-center">TOTAL:</div>
                    <div>
                        {total.toFixed(2)}
                    </div>
                </div>
                <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={calculateVat}>Calculate VAT</button>
            </main>
        </div>
    );
}