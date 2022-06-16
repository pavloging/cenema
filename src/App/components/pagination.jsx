import _ from 'lodash';

const Pagination = ({
  itemsCount,
  pageSize,
  currentPage,
  setCurrentPage,
  onPageChange
}) => {
  const pageCount = Math.ceil(itemsCount / pageSize);
  if (pageCount === 1) return null;
  const pages = _.range(1, pageCount + 1);

  const onPageChangeIncrement = () => {
    if (currentPage === 1) {
      return null;
    }
    setCurrentPage((prevState) => prevState - 1);
  };
  const onPageChangeDecrement = () => {
    if (currentPage === pageCount) {
      return null;
    }
    setCurrentPage((prevState) => prevState + 1);
  };

  return (
    <nav className="paginate" aria-label="Page navigation example">
      <ul className="pagination">
        <li className="page-item">
          <button
            className="page-link"
            href="#"
            aria-label="Previous"
            onClick={onPageChangeIncrement}
          >
            <span aria-hidden="true">&laquo;</span>
          </button>
        </li>
        {pages.map((page) => (
          <li
            className={'page-item' + (page === currentPage ? ' active' : '')}
            key={'page_' + page}
          >
            <button className="page-link" onClick={() => onPageChange(page)}>
              {page}
            </button>
          </li>
        ))}
        <li className="page-item">
          <button
            className="page-link"
            href="#"
            aria-label="Next"
            onClick={onPageChangeDecrement}
          >
            <span aria-hidden="true">&raquo;</span>
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
