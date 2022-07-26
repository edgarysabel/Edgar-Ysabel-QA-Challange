class ShoppingCart {
	clickDeleteBtn() {
		return cy.get(".icon-trash").click();
	}

	emptyShoppingCart() {
		return cy.get("[class='alert alert-warning']");
	}

	clickProceedToCheckoutBtn() {
		cy.get(".cart_navigation > .button > span").click();
	}

	itemDescription() {
		return cy.get(".cart_description p.product-name a");
	}

	clickProceedToCheckoutSummaryBtn() {
		cy.get(".cart_navigation > .button > span").click();
	}

	addressDelivery() {
		return cy.get(".address_delivery > label");
	}

	clickShippingCheckbox() {
		cy.get("#cgv").click();
	}

	clickPayByWire() {
		cy.get(".bankwire").click();
	}

	clickConfirmOrder() {
		cy.get("#cart_navigation > .button > span").click();
	}

	completeText() {
		return cy.get(".cheque-indent > .dark");
	}
}

export default ShoppingCart;
