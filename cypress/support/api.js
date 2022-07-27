class Api {
	apiData() {
		
		cy.fixture("marvelApiData").then(function (data) {
			

			return hash;
		});
	}
}

export default Api;
