import "./Pagination.css";

type Props = {
  activePage: number;
  pages: number;
  setActivePage: Setter<number>;
};

const Pagination = ({ activePage, pages, setActivePage }: Props) => {
  // Methods
  const getPages = () => {
    const elements = [];
    for (let i = 1; i <= pages; i++) {
      elements.push(
        <div
          className={`${activePage === i ? "active" : ""}`}
          onClick={() => setActivePage(i)}
          key={i}
        >
          {i < 10 ? `0${i}` : i}
        </div>
      );
    }
    return elements; // [<div>1</div>, <div>2</div>....]
  };

  return (
    <div className="pagination">
      <div
        // Previous page (<) inactive if current page is 1
        className={`pagination-arrow ${activePage === 1 ? "inactive" : ""}`}
        onClick={() => activePage !== 1 && setActivePage((page) => page - 1)}
      >
        {"<"}
      </div>
      {getPages()} {/* We will handle this method in the next step */}
      <div
        // Next Page (>) inactive if the current page is the last page.
        className={`pagination-arrow ${activePage === pages ? "inactive" : ""}`}
        onClick={() =>
          activePage !== pages && setActivePage((page) => page + 1)
        }
      >
        {">"}{" "}
      </div>
    </div>
  );
};

export default Pagination;
