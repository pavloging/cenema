const NoPage = () => {
  return (
    <div className="no-page">
      <h1 className="no-page__title">404. Page not found</h1>
      <p className="no-page__paragraph">
        It may have been moved, or you may have simply mistyped the page
        address.
      </p>
      <video autoPlay loop muted className="no-page__video">
        <source src="/video/noPage.mp4" type="video/mp4" />
      </video>
    </div>
  );
};

export default NoPage;
