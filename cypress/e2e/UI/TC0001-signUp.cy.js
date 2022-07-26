/// <reference types="cypress" />
import Homepage from "../../support/pageObjects/homepage";
import Authentication from "../../support/pageObjects/authentication";
import SignUp from "../../support/pageObjects/signUp";

const homepage = new Homepage();
const authentication = new Authentication();
const signUp = new SignUp();

const FRONTEND_URL = Cypress.env("FRONTEND_URL");

const randomEmail =
	"gbhTest" + Math.floor(Math.random() * 99999) + "@gmail.com";

context("Create A New User", () => {
	before(() => {
		cy.fixture("signUpData").then(function (data) {
			this.data = data;
		});
		cy.visit(`${FRONTEND_URL}`);
	});

	it("Sign Up", function () {
		homepage.clickSignInBtn();
		authentication.typeEmailAddressTxtBox(randomEmail);
		authentication.clickCreateAccountBtn();
		signUp.typeFirstName(this.data.firstName);
		signUp.typeLastName(this.data.lastName);
		signUp.typePassword(this.data.password);
		signUp.selectDayOfBirth(this.data.dayOfBirth);
		signUp.selectMonthOfBirth(this.data.monthOfBirth);
		signUp.selectYearOfBirth(this.data.yearOfBirth);
		signUp.typeAddress(this.data.address);
		signUp.typeCity(this.data.city);
		signUp.selectState(this.data.state);
		signUp.typeZipCode(this.data.zip);
		signUp.typeMobilePhone(this.data.mobilePhone);
		signUp.clickCreateAccountBtn();
		cy.url().should("include", "my-account");
	});
});
