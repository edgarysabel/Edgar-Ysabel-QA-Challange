class Authentication {
	typeEmailAddressTxtBox(email) {
		cy.get("#email_create").type(email);
	}

	clickCreateAccountBtn() {
		cy.get("#SubmitCreate span").click();
	}

	createAccountForm() {
		return cy.get("#create-account_form");
	}
}

export default Authentication;
