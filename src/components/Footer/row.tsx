import type { NextPage } from 'next';

export type RowType = {
  className?: string;
};

const Row: NextPage<RowType> = ({ className = '' }) => {
  return (
    <div
      className={`flex flex-row items-start justify-start flex-wrap content-start gap-[3rem] min-w-[33.813rem] text-left text-[1.125rem] text-[#9d9b94] font-Elysium-text-Body-L-Elysium ${className}`}
    ></div>
  );
};

export default Row;
