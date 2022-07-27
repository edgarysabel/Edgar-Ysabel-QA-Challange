/// <reference types="cypress" />

import Api from "../../support/api";
const api = new Api();
const md5 = require("md5");
const date = new Date();
const ts = date.getTime();

context("Marvel API Requests", () => {
	before(() => {
		cy.log(hash);
	});

	beforeEach(() => {
		cy.fixture("marvelApiData").then(function (data) {
			this.data = data;
		});
		//cy.visit(`${FRONTEND_URL}`);
	});

	it("Fetch All Characters", function () {
		//cy.log(apiData.apiDetails);
	});
});
