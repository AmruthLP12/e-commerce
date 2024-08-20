'use client'

import { setLoading } from "@/redux/features/loadingSlice";
import { useAppDispatch } from "@/redux/hooks";
import { makeToast } from "@/utils/helper";
import axios from "axios";
import Image from "next/image";
import React, { FormEvent, useState } from "react";

interface IPayload {
  imgSrc: null | string;
  fileKey: null | string;
  name: string;
  category: string;
  price: string;
}

const ProductForm = () => {
  const [payload, setPayload] = useState<IPayload>({
    imgSrc: null,
    fileKey: null,
    name: "",
    category: "",
    price: "",
  });

  const dispatch = useAppDispatch();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    dispatch(setLoading(true));

    axios.post("/api/add_product", payload).then((res) => {
      makeToast("Product Added Successfully");
      setPayload({
        imgSrc: null,
        fileKey: null,
        name: "",
        category: "",
        price: "",
      });
    }).catch(err => console.log(err)).finally(() => {
        dispatch(setLoading(false))
    })
  };

  return <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
    <Image className="max-h-[300px] w-auto object-contain rounded-md" src={payload.imgSrc ? payload.imgSrc : "/placeholder.svg"} alt="product_img" height={500} width={800}/>
  </form>;
};

export default ProductForm;
