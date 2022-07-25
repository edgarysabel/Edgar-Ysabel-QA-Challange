class ShoppingCart {
	clickDeleteBtn() {
		return cy.get(".icon-trash").click();
	}

	emptyShoppingCart() {
		return cy.get("[class='alert alert-warning']");
	}
}

export default ShoppingCart;
