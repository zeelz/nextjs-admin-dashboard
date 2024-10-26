import React, { ReactNode } from "react";

interface CardDataStatsProps {
  title: string;
  total: string;
  rate: string;
  levelUp?: boolean;
  levelDown?: boolean;
  children: ReactNode;
}

const CardDataStats: React.FC<CardDataStatsProps> = ({
  title,
  total,
  children,
}) => {
  return (
    <div className="flex gap-6 rounded-3xl border border-slate-300 bg-white p-8 shadow-default dark:border-strokedark dark:bg-boxdark">
      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-meta-2 dark:bg-meta-4">
        {children}
      </div>

      <div className="">
        <div>
          <span className="text-xl font-medium">{title}</span>
          <h4 className="text-title-md font-bold text-black dark:text-white">
            {total}
          </h4>
        </div>
      </div>
    </div>
  );
};

export default CardDataStats;
