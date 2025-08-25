export default async function Page({ params, searchParams }) {
    // This is not a best practice to access an element in searchParams directly, but for demonstration purposes
    return (
        <div>
            <h1>Hello {searchParams.name}</h1>
        </div>
    );
}