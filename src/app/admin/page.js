import ResultsContainer from "@/components/ResultsContainer";

export const revalidate = 60;

async function getAllRequests() {
    const res = await fetch(`${process.env.APP_URL}/api/request`);

    const data = await res.json();

    return data;
}

export default async function Page() {
    const allRequests = await getAllRequests();

    return (
        <>
            <ResultsContainer
                requests={allRequests}
            />
        </>
    );
}