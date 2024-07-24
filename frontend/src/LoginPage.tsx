import { useEffect, useState } from "react";
import { Button, Spinner } from "react-bootstrap";
import httpService from "src/httpService";

export const LoginPage = () => {

    const [cognitoUrl, setCognitoUrl] = useState<string>('');
    const [showSpinner, setShowSpinner] = useState<boolean>(true);

    useEffect(() => {
        httpService.fetch({url: '/auth/url'})
            .then(response => response.json())
            .then(data => {
                setCognitoUrl(data.url);
                setShowSpinner(false);
            });
    }, []);

    return (
        <div>
            {showSpinner ?
                <div className='Loader'><Spinner animation="border" variant="primary" /></div> :
                <Button onClick={() => {window.location.href = cognitoUrl;}}>Sign in with Google</Button>
            }
        </div>
    );
};

export default LoginPage;