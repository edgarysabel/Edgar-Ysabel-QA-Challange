/// <reference types="cypress" />
import MyAccount from "../../support/pageObjects/myAccount";

const myAccount = new MyAccount();

context("Add message to order", () => {
	before(() => {
		cy.fixture("addMessageToOrderData").then(function (data) {
			this.data = data;
		});
		cy.login();
		cy.url().should("include", "my-account");
	});

	it("Add message to order", function () {
		myAccount.clickOrderHistory();
		myAccount.clickFirstOrder();
		myAccount.selectProductForComment(1);
		myAccount.typeComment(this.data.comment);
		myAccount.clickSendMessage();
		myAccount.alertMessage().should("include.text", "successfully");
	});
});
