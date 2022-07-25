class Login {
	typeEmail(email) {
		cy.get("#email").type(email);
	}

	typePassword(password) {
		cy.get("#passwd").type(password);
	}

	clickSignInBtn() {
		cy.get("#SubmitLogin span").click();
	}
}

export default Login;
