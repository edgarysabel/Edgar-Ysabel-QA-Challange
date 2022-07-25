/// <reference types="cypress" />
import MyAccount from "../support/pageObjects/myAccount";
import Authentication from "../support/pageObjects/authentication";

const myAccount = new MyAccount();
const authentication = new Authentication();

context("Logout from your account", () => {
	before(() => {
		cy.login();
		cy.url().should("include", "my-account");
	});

	it("Logout", function () {
		myAccount.clickLogoutBtn();
		authentication.createAccountForm().should("be.visible");
	});
});
