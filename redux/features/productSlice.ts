import { IProduct } from "@/app/admin/dashboard/page";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: IProduct = {
  _id: "",
  imgSrc: "",
  fileKey: "",
  name: "",
  price: 0,
  category: "",
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setProduct: (state, action: PayloadAction<IProduct>) => {
      return action.payload;
    },
  },
});

export const { setProduct } = productSlice.actions;

export default productSlice.reducer;
