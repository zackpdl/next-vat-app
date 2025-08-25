export function GET(request) {
    const { searchParams } = new URL(request.url);
    const amount = parseFloat(searchParams.get('amount'));
    const vat = amount * 0.07;
    return Response.json({ vat, amount, vat });
}

export async function POST(request) {
    const { amount } = await request.json();
    const rate = 0.07;
    const vat = (amount * rate).toFixed(2);
    return Response.json({ rate, amount, vat });
}