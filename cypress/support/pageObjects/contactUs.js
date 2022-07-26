class ContactUs {
	selectContact(option) {
		cy.get("#id_contact").select(option);
	}

	selectOrderReference(option) {
		cy.get('[name="id_order"]').select(option);
	}

	selectProduct(id, option) {
		cy.get("#" + id + "_order_products").select(option);
	}

	typeMessage(message) {
		cy.get("#message").type(message);
	}

	clickSend() {
		cy.get("#submitMessage span").click();
	}

	alert() {
		return cy.get(".alert");
	}
}

export default ContactUs;
