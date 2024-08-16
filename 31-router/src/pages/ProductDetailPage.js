import React from "react";
import { useParams } from "react-router-dom";
import { productInfos } from "../components/ProductList";

export default function ProductDetailPage() {
  const { productId } = useParams();
  console.log("productId >>>>> ", productId); // '3'
  console.log(productInfos);

  const targetProduct = productInfos[Number(productId) - 1];

  console.log("targetProduct >>>>> ", targetProduct);

  const { userid, id, title, body } = targetProduct;

  return (
    <div>
      <h1>ProductDetailPage</h1>
      <ul>
        <li>상품번호: {id}</li>
        <li>상품명: {title}</li>
        <li>판매자: {userid}</li>
        <li>상세설명: {body}</li>
      </ul>
    </div>
  );
}
