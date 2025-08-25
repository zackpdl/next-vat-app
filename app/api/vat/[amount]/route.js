export async function GET(request, { params }) {
    const { amount } = await params;
    const a = parseFloat(amount);
    const vat = (a * 0.07).toFixed(2);
    return Response.json({ amount: a, vat });
}