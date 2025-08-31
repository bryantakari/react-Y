import { usePageTitle } from '@/context/LayoutContext';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';


export default function TransactionDetail (){
    const { setTitle } = usePageTitle();

    useEffect(() => {
        setTitle("TransactionDetail");
    }, [setTitle]);
    const { id } = useParams();
    
    return <div>Transaction ID: {id}</div>;
}
