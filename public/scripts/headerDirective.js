define('headerDirective', ['headerController'], function(headerController) {

	headerDirective = function() {
		return {
			restrict: 'E',
			templateUrl: 'content/header.vash',
			controller: headerController
		}
	}

	return headerDirective;

})