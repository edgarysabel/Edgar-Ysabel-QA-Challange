class MyAccount {
	welcomeMessage() {
		return cy.get("#center_column p.info-account");
	}

	clickLogoutBtn() {
		cy.get(".logout").click();
	}
}

export default MyAccount;
