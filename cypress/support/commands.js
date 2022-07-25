// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import Login from "../support/pageObjects/login";
import Homepage from "./pageObjects/homepage";

const login = new Login();
const homepage = new Homepage();

const FRONTEND_URL = Cypress.env("FRONTEND_URL");
const USER = Cypress.env("USER");
const PASSWORD = Cypress.env("PASSWORD");

Cypress.Commands.add("login", (email, password) => {
	cy.visit(`${FRONTEND_URL}`);

	if (email == null && password == null) {
		homepage.clickSignInBtn();
		login.typeEmail(USER);
		login.typePassword(PASSWORD);
	} else {
		login.typeEmail(email);
		login.typeEmail(password);
	}

	login.clickSignInBtn();
});
