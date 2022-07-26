/// <reference types="cypress" />
import Header from "../support/pageObjects/Header";
import SearchResults from "../support/pageObjects/searchResults";

const header = new Header();
const searchResults = new SearchResults();

context("Add Item to Cart", () => {
	beforeEach(function () {
		cy.fixture("addToCartData").then(function (data) {
			this.data = data;
		});
	});

	before(() => {
		cy.login();
		cy.url().should("include", "my-account");
	});

	it("Add Item", function () {
		header.typeInSearchBar(this.data.item);
		header.clickSearchBtn();
		searchResults.getProduct(this.data.item).each(($el) => {
			const productName = $el.text();

			if (productName.includes(this.data.item)) {
				$el.find("a[title='Add to cart'] span").click();
			}
		});
		searchResults.succesfullyAdded().should("include.text", "successfully");
	});
});
