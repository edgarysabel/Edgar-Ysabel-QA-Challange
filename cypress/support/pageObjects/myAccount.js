class MyAccount {
	welcomeMessage() {
		return cy.get("#center_column p.info-account");
	}

	clickLogoutBtn() {
		cy.get(".logout").click();
	}

	clickOrderHistory() {
		cy.get(".icon-list-ol").click();
	}

	clickFirstOrder() {
		cy.get(".first_item .color-myaccount").click();
	}

	selectProductForComment(option) {
		cy.get('#sendOrderMessage [name="id_product"]').select(option);
	}

	typeComment(text) {
		cy.get('[name="msgText"]').type(text);
	}

	clickSendMessage() {
		cy.get('[name="submitMessage"] span').click();
	}

	alertMessage() {
		return cy.get(".alert");
	}
}

export default MyAccount;
