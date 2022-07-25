class Homepage {
	clickSignInBtn() {
		return cy.get(".login").click();
	}

	sucessAlert() {
		return cy.get('[class="alert alert-success"]');
	}
}

export default Homepage;
