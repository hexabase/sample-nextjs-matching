import * as React from 'react';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) => {
  const getPageNumbers = () => {
    const pageNumbers = [];

    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else if (currentPage <= 3) {
      for (let i = 1; i <= 5; i++) {
        pageNumbers.push(i);
      }
      pageNumbers.push('...');
      pageNumbers.push(totalPages);
    } else if (currentPage > totalPages - 3) {
      pageNumbers.push(1);
      pageNumbers.push('...');
      for (let i = totalPages - 4; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      pageNumbers.push(1);
      pageNumbers.push('...');
      for (let i = currentPage - 1; i <= currentPage + 1; i++) {
        pageNumbers.push(i);
      }
      pageNumbers.push('...');
      pageNumbers.push(totalPages);
    }

    return pageNumbers;
  };

  const handlePageChange = (page: number) => {
    if (page !== currentPage) {
      onPageChange(page);
    }
  };

  return (
    <>
      <div className="mt-[22px] flex justify-center bg-[f2f2f2] sm:px-6 md:mt-0 md:justify-end md:px-3 md:py-3">
        <div className=" sm:flex sm:flex-1 sm:items-center sm:justify-between">
          <nav
            className="isolate inline-flex gap-2 -space-x-px rounded-md shadow-sm"
            aria-label="Pagination"
          >
            {currentPage > 1 && (
              <button
                className="border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex h-8 w-8 items-center justify-center rounded-sm border bg-white text-sm font-medium focus:z-20"
                onClick={() => handlePageChange(currentPage - 1)}
              >
                <span className="sr-only">Previous</span>
                <svg
                  className="h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            )}
            {getPageNumbers().map((pageNumber, index) => (
              <React.Fragment key={index}>
                {pageNumber === '...' ? (
                  <span className="mx-1 flex items-end">...</span>
                ) : (
                  <button
                    className={`${
                      currentPage === pageNumber
                        ? 'z-10 bg-[#000000] text-white'
                        : 'border-gray-300 text-gray-500 hover:bg-gray-50 bg-white'
                    } relative inline-flex h-8 w-8 items-center justify-center rounded-sm border text-sm font-medium focus:z-20`}
                    aria-current="page"
                    onClick={() =>
                      typeof pageNumber === 'number' && onPageChange(pageNumber)
                    }
                  >
                    {pageNumber}
                  </button>
                )}
              </React.Fragment>
            ))}
            {currentPage < totalPages && (
              <button
                className="border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex h-8 w-8 items-center justify-center rounded-sm border bg-white text-sm font-medium focus:z-20"
                onClick={() => handlePageChange(currentPage + 1)}
              >
                <span className="sr-only">Next</span>

                <svg
                  className="h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            )}
          </nav>
        </div>
      </div>
    </>
  );
};

export default Pagination;
