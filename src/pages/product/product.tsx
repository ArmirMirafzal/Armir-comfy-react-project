import React, { Component } from "react";
import { IEntity } from "../../types/types";

import "../assets/product-img.scss";
import { Link } from "react-router-dom";

interface ProductImgProps {
	products: IEntity.Products[];
	// productId: number;
}

export default class ProductImg extends Component<ProductImgProps> {
	// handleImg = (imgUrl: string) => {
	//   this.setState({ imgUrl });
	// };

	render() {
		const { products } = this.props;
		return (
			<div className="product-img">
				<Link to="/">
					<button className="btn">BACK TO PRODUCTS</button>
				</Link>

				<div className="product-img-box">
					<div className="product-images">
						<img className="main-img" src={`${products}`} alt="" />
						<div className="images">
							{/* {foundImages?.map((img, idx) => (
                <img key={idx} src={${img}} alt="" className={${imgUrl === img ? "currentImg" : ""}} onClick={() => this.handleImg(img)} />
              ))} */}
						</div>
					</div>
					<div className="product-img-content">
						<h1 className="title"></h1>
						<p>⭐️⭐️⭐️⭐️⭐️(60 customer reviews)</p>
						<h3 className="price"></h3>
						<p className="description"></p>
						<table>
							<thead>
								<tr>
									<th>Available </th>
									<th>SCU </th>
									<th>Brand </th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>In Stock</td>
									<td>Rec1Ntk7siEEW9ha1</td>
									<td></td>
								</tr>
							</tbody>
						</table>
						<div className="line"></div>
					</div>
				</div>
			</div>
		);
	}
}
