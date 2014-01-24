var do_ezproxy = function() {
	var windowsService = Components.classes['@mozilla.org/appshell/window-mediator;1'].getService(Components.interfaces.nsIWindowMediator);
	var currentWindow = windowsService.getMostRecentWindow('navigator:browser');
	var browser = currentWindow.getBrowser();
	var uri = browser.currentURI;

	var url = uri.spec.split('/');
	url[2] = url[2] + '.ezproxy1.lib.asu.edu'; 
	var new_url = url.join('/');

	browser.loadURI(new_url);
}