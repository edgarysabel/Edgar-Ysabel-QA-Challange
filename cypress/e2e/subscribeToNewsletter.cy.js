/// <reference types="cypress" />
import Footer from "../support/pageObjects/Footer";
import Homepage from "../support/pageObjects/homepage";

const homepage = new Homepage();
const footer = new Footer();

const randomEmail =
	"gbhTest" + Math.floor(Math.random() * 99999) + "@gmail.com";

context("Subscribe to newsletter", () => {
	before(() => {
		cy.login();
		cy.url().should("include", "my-account");
	});

	it("Subscribe to NewsLetter", function () {
		footer.typeSubscribeNewsletter(randomEmail);
		footer.submitToNewsletterBtn();
		homepage.sucessAlert();
	});
});
