import { AppContext } from '@/pages/_app';
import { fetcher } from '@/utils/fetcher';
import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import ReactTimeAgo from 'react-time-ago';

function Items({ currentItems }: any) {
  return (
    <>
      {currentItems &&
        currentItems.map((item: any) => (
          <div className="flex text-left my-2" key={item.id}>
            <div className="flex-1 border rounded-lg px-4 py-2 sm:px-6 sm:py-4 leading-relaxed">
              <strong>{item.name}</strong>{' '}
              <span className="text-xs text-gray-400">
                <ReactTimeAgo date={item.createdAt} locale="id" />
              </span>
              <p className="text-sm">{item.comment}</p>
            </div>
          </div>
        ))}
    </>
  );
}

const PaginatedItems = ({ itemsPerPage }: any) => {
  // We start with an empty list of items.
  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);
  const { setLoading, reload, data, setData } = React.useContext(AppContext);

  React.useEffect(() => {
    const getComments = async () => {
      await fetcher('/api/get-comment').then((data: any) => {
        setData(data);
        setLoading(false);
      });
    };
    getComments();
  }, [reload, setData, setLoading]);

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    setCurrentItems(data.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(data.length / itemsPerPage));
  }, [data, itemOffset, itemsPerPage]);

  const handlePageClick = (event: any) => {
    const newOffset = (event.selected * itemsPerPage) % data.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  return (
    <>
      <Items currentItems={currentItems} />
      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< prev"
        className="inline-flex mt-4 mb-2"
      />
    </>
  );
};

export default PaginatedItems;
