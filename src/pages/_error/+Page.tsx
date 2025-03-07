import { usePageContext } from 'vike-react/usePageContext';

const ErrorPage = () => {
  const pageContext = usePageContext();

  if (pageContext.is404) {
    return (
      <>
        <h1>404 Page Not Found</h1>
        <p>This page could not be found.</p>
      </>
    );
  }

  return (
    <>
      <h1>500 Internal Server Error</h1>
      <p>Something went wrong.</p>
    </>
  );
};

export default ErrorPage;
