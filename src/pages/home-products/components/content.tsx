import React, { Component } from "react";

interface ContentProps {
	categories: [];
	onSelectCategory: (categoryName: string) => void;
}



export default class Content extends Component<ContentProps> {

	render() {
		return (
			<>
				<section>
					<div className="form-item">
						<input type="text" name="text" placeholder="search" className="search-input" />
					</div>
					<div className="form-item">
						<h5>Category</h5>
						<div>
							{this.props.categories.map((category) => {
								return (
									<button key={category} type="button" name="category" className="category-btn" onClick={() => this.props.onSelectCategory(category)}>
										{category}
									</button>
								);
							})}
						</div>
						<div className="form-item">
							<h5>Price</h5>
							<p className="price">$3,099.99</p>
							<input type="range" name="price" id="price" min="0" max="309999" />
						</div>
					</div>
				</section>
			</>
		);
	}
}
