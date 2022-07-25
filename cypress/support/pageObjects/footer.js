class Footer {
	typeSubscribeNewsletter(email) {
		return cy.get("#newsletter-input").type(email);
	}

	submitToNewsletterBtn() {
		return cy.get('[name="submitNewsletter"]').click();
	}
}

export default Footer;
