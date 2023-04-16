import { usePaginationContext } from '../../context/PaginationProvider/PaginationProvider';

function Pagination() {
  const { limit, offset, setOffset } = usePaginationContext();
  let disabledColor;

  if (offset / limit === 0) {
    disabledColor = 'bg-slate-300';
  } else {
    disabledColor = 'bg-gray-800';
  }

  const handlePrev = () => {
    if (offset / limit === 0) return;
    setOffset(offset - limit);
  };

  return (
    <div className='flex items-center justify-center gap-4 mt-6'>
      <button
        className={`btn btn-dark ${disabledColor} ${
          offset / limit === 0 ? 'pointer-events-none' : ''
        }`}
        onClick={handlePrev}
        disabled={offset / limit === 0 ? true : false}
      >
        &lt;
      </button>
      <span>{offset / limit + 1}</span>
      <button
        className='btn btn-dark'
        onClick={() => setOffset(offset + limit)}
      >
        &gt;
      </button>
    </div>
  );
}

export default Pagination;
