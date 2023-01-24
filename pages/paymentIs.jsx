/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";

import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { clearCart, getCart } from "../redux/cartSlice";
import { useSelector } from "react-redux";
import SuccessComponent from "../components/After_Payment/SuccessComponent";
import CancelComponent from "../components/After_Payment/CancelComponent";

const PaymentIs = () => {
  const dispatch = useDispatch();
  const [succ, setSucc] = useState(false);
  const [cancel, setCancel] = useState(false);
  const [btn, setBtn] = useState(false);
  const router = useRouter();
  const emailEn = router.query?.status;
  const cart = useSelector(getCart);
  const { email } = useSelector((state) => state.account?.session);
  useEffect(() => {
    let emailDe;
    if (emailEn) {
      emailDe = emailEn
        .split("-")
        .map((e, i) => {
          const [a] = e.split("");
          return a;
        })
        .join("");
      if (emailDe === email) {
        let order = cart.map((cartItem) => ({
          emailUser: email,
          id: cartItem.id,
          unit_amount: cartItem.price,
          quantity: cartItem.quantity,
        }));
        fetch("/api/create/successPayment", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(order),
        }).catch((error) => console.log(error));

        dispatch(clearCart());
        setSucc(true);
      }
    }
    setTimeout(() => {
      setBtn(true);
    }, 2000);
  }, [emailEn,dispatch,setSucc]);

  useEffect(() => {
    if (router.query.cancel) {
      setCancel(true);
    }
  }, [router.query.cancel,setCancel]);

  return (
    <>
      {succ ? <SuccessComponent btn={btn} /> : null}
      {cancel ? <CancelComponent btn={btn} /> : null}
    </>
  );
};

export default PaymentIs;
