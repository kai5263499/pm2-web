
module.exports = function() {
	var sizes = ["B", "KB", "MB", "GB", "TB", "PB", "EB"];

	return function(bytes) {
		if(!bytes) {
			return "0B";
		}

		for(var i = sizes.length; i > 0; i--) {
			var step = Math.pow(1024, i);

			if (bytes >= step) {
				return (bytes / step).toFixed(2) + " " + sizes[i];
			}
		}

		return bytes + " B";
	}
};
