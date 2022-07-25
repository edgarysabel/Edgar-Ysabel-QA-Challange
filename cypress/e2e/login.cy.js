/// <reference types="cypress" />

context("Login into your account", () => {
	it("Login", function () {
		cy.login();
		cy.url().should("include", "my-account");
	});
});
