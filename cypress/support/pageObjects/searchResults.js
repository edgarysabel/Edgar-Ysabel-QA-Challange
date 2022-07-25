class SearchResults {
	getProduct() {
		return cy.get(".product-container");
	}

	succesfullyAdded() {
		return cy.get(".layer_cart_product h2");
	}

	clickProceedToCheckoutBtn() {
		return cy.get('[title="Proceed to checkout"]').click();
	}
}

export default SearchResults;
