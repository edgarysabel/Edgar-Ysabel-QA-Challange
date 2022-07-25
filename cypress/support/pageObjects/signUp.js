class SignUp {
	typeFirstName(firstName) {
		cy.get("#customer_firstname").type(firstName);
	}

	typeLastName(lastName) {
		cy.get("#customer_lastname").type(lastName);
	}

	typePassword(password) {
		cy.get("#passwd").type(password);
	}

	selectDayOfBirth(day) {
		cy.get("#days").select(day);
	}

	selectMonthOfBirth(month) {
		cy.get("#months").select(month);
	}

	selectYearOfBirth(year) {
		cy.get("#years").select(year);
	}

	typeAddress(address) {
		cy.get("#address1").type(address);
	}

	typeCity(city) {
		cy.get("#city").type(city);
	}

	selectState(state) {
		cy.get("#id_state").select(state);
	}

	typeMobilePhone(phone) {
		cy.get("#phone_mobile").type(phone);
	}

	typeZipCode(zipCode) {
		cy.get("#postcode").type(zipCode);
	}

	clickCreateAccountBtn() {
		cy.get("#submitAccount span").click();
	}
}

export default SignUp;
