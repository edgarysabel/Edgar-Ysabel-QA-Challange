/// <reference types="cypress" />
import generateApiHash from "../../support/api";

const api = new generateApiHash();

context("Fetch all Marvel Characters", () => {
	beforeEach(() => {
		cy.fixture("marvelApiData").then(function (data) {
			this.data = data;
		});
	});

	it("Fetch All Characters", function () {
		cy.request(
			`${this.data.ENDPOINT}/v1/public/characters?ts=${api.ts}&apikey=${this.data.PUBLIC_KEY}&hash=${api.hash}`
		).then((response) => {
			expect(response.body).to.have.property("code", 200),
				expect(response.body).not.to.be.null;
		});
	});

	//Invalid Tests
	it("Missing api key", function () {
		cy.request({
			url: `${this.data.ENDPOINT}/v1/public/characters?ts=${api.ts}&apikey=&hash=${api.hash}`,
			failOnStatusCode: false,
		}).then((response) => {
			expect(response.body).to.have.property("code", "InvalidCredentials");
			expect(response.body).to.have.property(
				"message",
				"The passed API key is invalid."
			);
		});
	});
});
