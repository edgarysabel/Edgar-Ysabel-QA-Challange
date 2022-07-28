/// <reference types="cypress" />
import Header from "../../support/pageObjects/header";
import ContactUs from "../../support/pageObjects/contactUs";

const header = new Header();
const contactUs = new ContactUs();

context("Add Item to Cart", () => {
	before(() => {
		cy.fixture("selectOrderReferenceData").then(function (data) {
			this.data = data;
		});
		cy.login();
		cy.url().should("include", "my-account");
	});

	it("Fill out contact us form", function () {
		header.clickContactUs();
		contactUs.selectContact(1);
		contactUs.selectOrderReference(this.data.value);
		contactUs.selectProduct(this.data.value, 1);
		contactUs.typeMessage(this.data.comment);
		contactUs.clickSend();
		contactUs.alert().should("include.text", "successfully");
	});
});
