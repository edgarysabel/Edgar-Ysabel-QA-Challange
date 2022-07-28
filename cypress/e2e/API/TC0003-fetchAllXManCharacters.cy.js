/// <reference types="cypress" />
import generateApiHash from "../../support/api";

const api = new generateApiHash();

context("Fetch all Spiderman Comics", () => {
	beforeEach(() => {
		cy.fixture("marvelApiData").then(function (data) {
			this.data = data;
			cy.request(
				`${this.data.ENDPOINT}/v1/public/comics?title=${this.data.COMIC}&ts=${api.ts}&apikey=${this.data.PUBLIC_KEY}&hash=${api.hash}`
			).then((response) => {
				expect(response.body).not.to.be.null;
				this.id = response.body.data.results[1].id;
			});
		});
	});

	it("Fetch All Characters for X-Man", function () {
		cy.request(
			`${this.data.ENDPOINT}/v1/public/comics/${this.id}?ts=${api.ts}&apikey=${this.data.PUBLIC_KEY}&hash=${api.hash}`
		).then((response) => {
			expect(response.body).to.have.property("code", 200),
				expect(response.body).not.to.be.null,
				expect(response.body.data.results[0].title).to.include(this.data.COMIC);
		});
	});

	//Invalid Tests
	it("Missing Hash", function () {
		cy.request({
			url: `${this.data.ENDPOINT}/v1/public/comics/${this.id}?ts=${api.ts}&apikey=${this.data.PUBLIC_KEY}&hash=`,
			failOnStatusCode: false,
		}).then((response) => {
			expect(response.body).to.have.property("code", "InvalidCredentials");
			expect(response.body).to.have.property(
				"message",
				"That hash, timestamp and key combination is invalid."
			);
		});
	});
});
