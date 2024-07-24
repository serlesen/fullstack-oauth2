import { useEffect, useState } from "react";
import { Button, Spinner } from "react-bootstrap";
import httpService from "src/httpService";

export function ProtectedPage() {

    const [content, setContent] = useState("");
    const [showSpinner, setShowSpinner] = useState<boolean>(true);

    useEffect(() => {
        httpService.fetchWithAuth({url: '/private'})
            .then(response => response.json())
            .then(data => {
                setContent(data.message);
                setShowSpinner(false);
            });
    }, []);

    return (
        <div>
            <div>Protected content:</div>
            {showSpinner ?
                <div className='Loader'><Spinner animation="border" variant="primary" /></div> :
                <div>The server says: {content}</div>
            }
        </div>
    );
}

export default ProtectedPage;