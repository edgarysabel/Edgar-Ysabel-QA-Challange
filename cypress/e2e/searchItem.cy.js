/// <reference types="cypress" />
import Header from "../support/pageObjects/Header";
import SearchResults from "../support/pageObjects/searchResults";

const header = new Header();
const searchResults = new SearchResults();
let searchAssertion = false;

context("Search Item", () => {
	beforeEach(function () {
		cy.fixture("searchItemData").then(function (data) {
			this.data = data;
		});
	});

	before(() => {
		cy.login();
		cy.url().should("include", "my-account");
	});

	it("Search Item", function () {
		header.typeInSearchBar(this.data.item);
		header.clickSearchBtn();
		searchResults
			.getProduct(this.data.item)
			.each(($el) => {
				const productName = $el.text();

				if (productName.includes(this.data.item)) {
					searchAssertion = true;
				}
			})
			.then(() => {
				expect(searchAssertion).to.be.true;
			});
	});
});
