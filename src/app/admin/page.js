import { use } from 'react';
import ResultsContainer from '@/components/ResultsContainer';

async function getAllRequests() {
    const res = await fetch(`${process.env.APP_URL}/api/request`);

    const data = await res.json();

    return data;
}

export default function Page() {
    const allRequests = use(getAllRequests());

    return (
        <>
            <ResultsContainer requests={allRequests} />
        </>
    );
}
