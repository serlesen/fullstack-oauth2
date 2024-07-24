import { useEffect, useState } from "react";
import { Button, Spinner } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import httpService from "src/httpService";

export function WelcomePage() {

    const navigate = useNavigate();

    const [content, setContent] = useState("");
    const [showSpinner, setShowSpinner] = useState<boolean>(true);

    useEffect(() => {
        httpService.fetch({url: '/public'})
            .then(response => response.json())
            .then(data => {
                setContent(data.message);
                setShowSpinner(false);
            });
    }, []);

    return (
        <div>
            <p>Login first to see private content</p>
            <Button onClick={() => navigate('/login')}>Login</Button>
            <Button onClick={() => navigate('/private')}>Private content</Button>
            {showSpinner ?
                <div className='Loader'><Spinner animation="border" variant="primary" /></div> :
                <div>By the way, the servers says: {content}</div>
            }
        </div>
    );
}

export default WelcomePage;