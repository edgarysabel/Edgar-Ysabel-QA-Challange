const md5 = require("md5");
const date = new Date();
let apiDetails = {};

function generateApiHash() {
	apiDetails.publicKey = "605740d587d008ec641dfd4db9835ff4";
	apiDetails.privateKey = "775bdcb1694554d77dc56606b9852b698832993f";
	apiDetails.ts = date.getTime();
	apiDetails.hash = md5(
		apiDetails.ts + apiDetails.privateKey + apiDetails.publicKey
	);

	return apiDetails;
}

export default generateApiHash;
