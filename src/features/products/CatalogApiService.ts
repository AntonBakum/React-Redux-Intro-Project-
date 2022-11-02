import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { setProducts } from "./catalogSlice";

const requestUrl = "https://my-json-server.typicode.com/AntonBakum/React-Redux-Intro-Project-/products";

export const getProducts = createAsyncThunk (
	'catalog/getProducts',
	async (_, {dispatch}) => {
		const response = await axios.get(requestUrl);
        dispatch(setProducts(response.data))
	}
)
