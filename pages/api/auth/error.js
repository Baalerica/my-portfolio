import { useRouter } from 'next/router';

const ErrorPage = () => {
    const router = useRouter();
    const { error } = router.query;

    let errorMessage = 'An unknown error occurred.';
    if (error === 'OAuthAccountNotLinked') {
        errorMessage = 'To confirm your identity, sign in with the same account you used originally.';
    } else if (error === 'OAuthCallback') {
        errorMessage = 'There was an issue during the authentication process. Please try again.';
    }

    return (
        <div>
            <h1>Error</h1>
            <p>{errorMessage}</p>
            <p>Error code: {error}</p>
        </div>
    );
};

export default ErrorPage;
