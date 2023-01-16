import React, { useEffect } from "react";
import { useGetWishListQuery } from "../redux/userApi";

const WishList = () => {
  const { isLoading, data: wishList } = useGetWishListQuery();

  useEffect()
  return <div>WishList</div>;
};

export default WishList;
