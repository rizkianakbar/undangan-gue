import { AppContext } from '@/pages/_app';
import { fetcher } from '@/utils/fetcher';
import React, { useEffect, useState, useContext } from 'react';
import ReactPaginate from 'react-paginate';
import ReactTimeAgo from 'react-time-ago';

interface Props {
  itemsPerPage: number;
}

interface ICurrentItems {
  id: number;
  name: string;
  createdAt: number | Date;
  comment: string;
}

interface IPage {
  selected: number;
}

function Items({ currentItems }: { currentItems: ICurrentItems[] }) {
  return (
    <>
      {currentItems?.map((item: ICurrentItems) => (
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

const PaginatedItems = (props: Props) => {
  const { itemsPerPage } = props;
  // We start with an empty list of items.
  const [currentItems, setCurrentItems] = useState<ICurrentItems[]>([]);
  const [pageCount, setPageCount] = useState(0);
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);
  const { setLoading, reload, data, setData } = useContext(AppContext);

  useEffect(() => {
    const getComments = async () => {
      await fetcher('/api/get-comment').then((data: string[]) => {
        setData(data);
        setLoading(false);
      });
    };

    getComments();
  }, [reload, setData, setLoading]);

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;

    setCurrentItems(data.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(data.length / itemsPerPage));
  }, [data, itemOffset, itemsPerPage]);

  const handlePageClick = (event: IPage) => {
    const newOffset = (event.selected * itemsPerPage) % data.length;

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
