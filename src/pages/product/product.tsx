import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

interface ProductState {
	products: [];
	categories: [];
}

export default class Product extends Component<{}, ProductState> {
	componentDidMount(): void {
		const getData = async () => {
			try {
				const res = await axios("https://dummyjson.com/products/1");
				const data = await res.data;
				this.setState({ categories: data });
				console.log("products data => ", data);
			} catch (error) {
				console.log(error);
			}
		};

		getData();
	}

	render() {
		return (
			<>
				<div className="section section-center page">
					<Link className="btn" to="/">
						back To products
					</Link>
					<div className="product-center">
						<div className="left-gallery">
							<img
								src="https://www.course-api.com/images/store/product-20.jpeg"
								alt="main"
								className="main"
							/>
							<div className="gallery">
								<img
									src="https://www.course-api.com/images/store/product-20.jpeg"
									alt="product-4.jpeg"
									className="gallery-img"
								/>
								<img
									src="https://www.course-api.com/images/store/extra-product-1.jpeg"
									alt="extra-1.jpeg"
									className="gallery-img"
								/>
								<img
									src="https://www.course-api.com/images/store/extra-product-2.jpeg"
									alt="extra-2.jpeg"
									className="gallery-img"
								/>
								<img
									src="https://www.course-api.com/images/store/extra-product-3.jpeg"
									alt="extra-3.jpeg"
									className="gallery-img"
								/>
								<img
									src="https://www.course-api.com/images/store/extra-product-4.jpeg"
									alt="extra-4.jpeg"
									className="gallery-img"
								/>
							</div>
						</div>

						<div className="right-content">
							<h2>wooden desk</h2>
							<div className="sc-kstrdz btjemE">
								<div className="stars">
									<span>
										<svg
											stroke="currentColor"
											fill="currentColor"
											strokeWidth={0}
											viewBox="0 0 16 16"
											height="1em"
											width="1em"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
										</svg>
									</span>
									<span>
										<svg
											stroke="currentColor"
											fill="currentColor"
											strokeWidth={0}
											viewBox="0 0 16 16"
											height="1em"
											width="1em"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
										</svg>
									</span>
									<span>
										<svg
											stroke="currentColor"
											fill="currentColor"
											strokeWidth={0}
											viewBox="0 0 16 16"
											height="1em"
											width="1em"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												fillRule="evenodd"
												d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.523-3.356c.329-.314.158-.888-.283-.95l-4.898-.696L8.465.792a.513.513 0 00-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767l-3.686 1.894.694-3.957a.565.565 0 00-.163-.505L1.71 6.745l4.052-.576a.525.525 0 00.393-.288l1.847-3.658 1.846 3.658a.525.525 0 00.393.288l4.052.575-2.906 2.77a.564.564 0 00-.163.506l.694 3.957-3.686-1.894a.503.503 0 00-.461 0z"
												clipRule="evenodd"
											/>
										</svg>
									</span>
									<span>
										<svg
											stroke="currentColor"
											fill="currentColor"
											strokeWidth={0}
											viewBox="0 0 16 16"
											height="1em"
											width="1em"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												fillRule="evenodd"
												d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.523-3.356c.329-.314.158-.888-.283-.95l-4.898-.696L8.465.792a.513.513 0 00-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767l-3.686 1.894.694-3.957a.565.565 0 00-.163-.505L1.71 6.745l4.052-.576a.525.525 0 00.393-.288l1.847-3.658 1.846 3.658a.525.525 0 00.393.288l4.052.575-2.906 2.77a.564.564 0 00-.163.506l.694 3.957-3.686-1.894a.503.503 0 00-.461 0z"
												clipRule="evenodd"
											/>
										</svg>
									</span>
									<span>
										<svg
											stroke="currentColor"
											fill="currentColor"
											strokeWidth={0}
											viewBox="0 0 16 16"
											height="1em"
											width="1em"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												fillRule="evenodd"
												d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.523-3.356c.329-.314.158-.888-.283-.95l-4.898-.696L8.465.792a.513.513 0 00-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767l-3.686 1.894.694-3.957a.565.565 0 00-.163-.505L1.71 6.745l4.052-.576a.525.525 0 00.393-.288l1.847-3.658 1.846 3.658a.525.525 0 00.393.288l4.052.575-2.906 2.77a.564.564 0 00-.163.506l.694 3.957-3.686-1.894a.503.503 0 00-.461 0z"
												clipRule="evenodd"
											/>
										</svg>
									</span>
								</div>
								<p className="reviews">(300 customer reviews)</p>
							</div>
							<h5 className="price"> $1,509.99</h5>
							<p className="desc">
								Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit
								pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust
								fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo
								everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk
								microdosing gochujang live-edge
							</p>
							<p className="info">
								<span>Available : </span>In stock
							</p>
							<p className="info">
								<span>SKU : </span>recJIjREF3dlFi3sR
							</p>
							<p className="info">
								<span>Brand : </span>ikea
							</p>
						</div>
					</div>
				</div>
			</>
		);
	}
}
