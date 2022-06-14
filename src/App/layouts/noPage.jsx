const NoPage = () => {
  return (
    <div className="no-page">
      <h1>404. Page not found</h1>
      <p>
        It may have been moved, or you may have simply mistyped the page
        address.
      </p>
      <video autoPlay loop muted>
        <source src="/video/noPage.mp4" type="video/mp4" />
      </video>
    </div>
  );
};

export default NoPage;
