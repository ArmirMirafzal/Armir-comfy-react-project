import React, { Component } from "react";
import { Link } from "react-router-dom";
import { IEntity } from "types/types";

interface ProductsProps {
	products: IEntity.Products[];
}

export default class Products extends Component<ProductsProps> {
	render() {

		if (this.props.products.length < 1) return <h1>No Products </h1>;

		return (
			<>
				<section>
					<div className="products-container">
						{this.props.products.map((product, idx) => {
							return (
								<article key={idx} className="sc-bdfBwQ cIKpxU">
									<div className="img-container">
										<Link to="/product">
											<img src={product["images"][0]} alt="modern poster" />
										</Link>
									</div>
									<footer>
										<h5>{product["title"]}</h5>
										<p>${product["price"]}</p>
									</footer>
								</article>
							);
						})}
					</div>
				</section>
			</>
		);
	}
}
