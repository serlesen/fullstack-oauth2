import { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import AppActions from "src/AppActions";
import httpService from "src/httpService";
import { useNavigate } from 'react-router-dom';

export function RedirectPage() {

    const [showSpinner, setShowSpinner] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const code = urlParams.get('code');
        httpService.fetch({url: `/auth/callback?code=${code}`})
            .then(response => response.json())
            .then(data => {
                setShowSpinner(false);
                AppActions.setAuthToken(data.token);
                navigate('/private', { replace: true })
        });
    }, []);

    return (
        <div>
            {showSpinner ? <div className='Loader'><Spinner animation="border" variant="primary" /></div> : <div>Correctly logged</div>}
        </div>
    );

};

export default RedirectPage;