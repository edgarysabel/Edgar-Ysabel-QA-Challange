/// <reference types="cypress" />
import generateApiHash from "../../support/api";

const api = new generateApiHash();

context("Fetch all Spiderman Comics", () => {
	beforeEach(() => {
		cy.fixture("marvelApiData").then(function (data) {
			this.data = data;
			cy.request(
				`${this.data.ENDPOINT}/v1/public/comics?title=${this.data.CHARACTER}&ts=${api.ts}&apikey=${this.data.PUBLIC_KEY}&hash=${api.hash}`
			).then((response) => {
				expect(response.body).not.to.be.null;
				this.id = response.body.data.results[0].id;
				cy.log(this.id);
			});
		});
	});

	it("Fetch All Comics for Spiderman", function () {
		cy.request(
			`${this.data.ENDPOINT}/v1/public/characters/${this.id}/comics?ts=${api.ts}&apikey=${this.data.PUBLIC_KEY}&hash=${api.hash}`
		).then((response) => {
			expect(response.body).to.have.property("code", 200),
				expect(response.body).not.to.be.null;
		});
	});

	//Invalid Tests
	it("Title with no value", function () {
		cy.request({
			url: `${this.data.ENDPOINT}/v1/public/comics?title=&ts=${api.ts}&apikey=${this.data.PUBLIC_KEY}&hash=${api.hash}`,
			failOnStatusCode: false,
		}).then((response) => {
			expect(response.body).to.have.property("code", 409);
			expect(response.body).to.have.property(
				"status",
				"title cannot be blank if it is set"
			);
		});
	});
});
