/// <reference types="cypress" />
import Header from "../support/pageObjects/Header";
import SearchResults from "../support/pageObjects/searchResults";
import ShoppingCart from "../support/pageObjects/shoppingCart";

const header = new Header();
const searchResults = new SearchResults();
const shoppingCart = new ShoppingCart();
let assertion = false;

context("Delete Item from Cart", () => {
	beforeEach(function () {
		cy.fixture("checkoutData").then(function (data) {
			this.data = data;
		});
	});

	before(() => {
		cy.login();
		cy.url().should("include", "my-account");
	});

	it("Checkout", function () {
		header.typeInSearchBar(this.data.item);
		header.clickSearchBtn();
		searchResults.getProduct(this.data.item).each(($el) => {
			const productName = $el.text();

			if (productName.includes(this.data.item)) {
				$el.find("a[title='Add to cart'] span").click();
			}
		});
		searchResults.clickProceedToCheckoutBtn();

		shoppingCart
			.itemDescription()
			.each(($el) => {
				const productName = $el.text();

				if (productName.includes(this.data.item)) {
					assertion = true;
				}
			})
			.then(() => {
				expect(assertion).to.be.true;
			});

		shoppingCart.clickProceedToCheckoutSummaryBtn();
		shoppingCart.addressDelivery().should("be.visible");
		shoppingCart.clickProceedToCheckoutSummaryBtn();
		shoppingCart.clickShippingCheckbox();
		shoppingCart.clickProceedToCheckoutSummaryBtn();
		shoppingCart.clickPayByWire();
		shoppingCart.clickConfirmOrder();
		shoppingCart.completeText().should("include.text", "complete");
	});
});
