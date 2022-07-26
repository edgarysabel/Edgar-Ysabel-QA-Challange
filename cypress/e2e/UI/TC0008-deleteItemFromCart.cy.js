/// <reference types="cypress" />
import Header from "../../support/pageObjects/Header";
import SearchResults from "../../support/pageObjects/searchResults";
import ShoppingCart from "../../support/pageObjects/shoppingCart";

const header = new Header();
const searchResults = new SearchResults();
const shoppingCart = new ShoppingCart();

context("Delete Item from Cart", () => {
	before(() => {
		cy.fixture("deleteItemFromCartData").then(function (data) {
			this.data = data;
		});
		cy.login();
		cy.url().should("include", "my-account");
	});

	it("Delete Item", function () {
		header.typeInSearchBar(this.data.item);
		header.clickSearchBtn();
		searchResults.getProduct(this.data.item).each(($el) => {
			const productName = $el.text();

			if (productName.includes(this.data.item)) {
				$el.find("a[title='Add to cart'] span").click();
			}
		});
		searchResults.succesfullyAdded().should("include.text", "successfully");
		searchResults.clickProceedToCheckoutBtn();
		shoppingCart.clickDeleteBtn();
		shoppingCart.emptyShoppingCart().should("include.text", "empty");
	});
});
