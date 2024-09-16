"use client";

import React, { FC } from "react";
import ResponsivePagination from "react-responsive-pagination";
import "react-responsive-pagination/themes/classic.css";

type Props = {
  currentPage: number;
  count: number;
  onChange: (page: number) => void;
};

const Pagination: FC<Props> = ({ currentPage, count, onChange }) => {
  const page = Math.ceil(count / 10);

  return (
    <div>
      <ResponsivePagination
        current={currentPage}
        total={page}
        onPageChange={onChange}
      />
    </div>
  );
};

export default Pagination;
