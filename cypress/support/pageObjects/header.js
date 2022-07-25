class Header {
	clickSignInBtn() {
		return cy.get(".login").click();
	}

	clickLogoutBtn() {
		cy.get(".logout").click();
	}

	typeInSearchBar(query) {
		cy.get("#search_query_top").type(query);
	}

	clickSearchBtn() {
		cy.get("#searchbox > .btn").click();
	}
}

export default Header;
