import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeProducts from "./pages/home-products/home-products";
import Product from "./pages/product/product";
import { IEntity } from "./types/types";
import axios from "axios";

const CATEGORY_API = "https://dummyjson.com/products/categories";
const PRODUCTS_API = "https://dummyjson.com/products";

interface HomeProductsState {
	products: IEntity.Products[];
	categories: [];
	categoryName: string;
	isLoading: boolean;
	productID: string;
}

export default class App extends Component {
	state: HomeProductsState = {
		products: [],
		categories: [],
		categoryName: "All",
		isLoading: true,
		productID: "",
	};

	handleSelectCategory = (categoryName: string) => {
		this.setState({ categoryName });
	};

	addProductID = (productId: string) => {
		this.setState({ productId });
		localStorage.setItem("productId", productId);
	};

	deleteProductID = () => {
		localStorage.removeItem("productId");
		this.setState({ productID: "" });
	};

	componentDidMount(): void {
		const getGategories = async () => {
			try {
				const res_products = await axios(PRODUCTS_API);
				const res_categories = await axios(CATEGORY_API);
				const products = res_products.data.products;
				const categories = res_categories.data;
				this.setState({ products, categories: ["All", ...categories], isLoading: false });
			} catch (error) {
				console.log(error);
			}
		};

		const productID = localStorage.getItem("productId") ? localStorage.getItem("productId") : "";
		if (productID?.length) this.setState({ productID });

		getGategories();
	}

	render() {
		if (this.state.isLoading)
			return (
				<div className="spinner d-flex justify-content-center">
					<div className="in-spinner spinner-border" role="status">
						<span className="visually-hidden">Loading...</span>
					</div>
				</div>
			);

		const { categories, products, categoryName } = this.state;



		const filteredProducts =
			categoryName === "All"
				? products
				: products.filter((product) => product["category"] === categoryName);

		console.log("categories  =>>>> ", categories);

		return (
			<BrowserRouter>
					<Routes>
						<Route
							path="/"
							element={
								<HomeProducts
									categories={categories}
									products={filteredProducts}
									onSelectCategory={this.handleSelectCategory}
								/>
							}
						/>
						<Route path="/product" element={<Product />} />
					</Routes>
			</BrowserRouter>
		);
	}
}

// https://comfy-sloth-e-commerce-store.netlify.app/products

