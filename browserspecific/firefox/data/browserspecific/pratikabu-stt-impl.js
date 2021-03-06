var iconsFolderUrl;// icon folder url, this location will come from fetchPreferences

var pratikabustt_browser_impl = {
	getFixedLocation : function() {
		// #BrowserSpecific location
		return "pratikabu-stt-";
	},
	
	fetchPreferences: function() {
		// #BrowserSpecific method call
		// prefsValue listner
    	self.port.on("prefsValue", function(data) {
    		iconsFolderUrl = data.iconFolderLocation;
			// load the css and image source from preference
			pratikabustt_browser_impl.loadFromPreference(data);
		});
		self.port.emit("getPrefs");// method to communicate to main.js
	},
	
	loadFromPreference: function(data) {
		// #BrowserSpecific this method is somewhat browser specific
		if(!data) {
			return;
		}
		pratikabustt.loadFromResponse(pratikabustt_browser_impl.convertResponse(data));
	},
	
	getBrowserSpecificUrl: function(imgUrl) {
		// #BrowserSpecific method to get the resource
		return iconsFolderUrl + "/" + imgUrl;
	},
	
	convertResponse: function(rawResponse) {
		// #BrowserSpecific method to convert response to single known format
		var response = rawResponse;
		return response;
	},
	
	openOptionPage: function() {
		// #BrowserSpecific method to open the option page
		self.port.emit("optionPage");// method to communicate to main.js
	},
	
	setImageForId: function(imgId, imageName) {
		var imgUrl = pratikabustt_browser_impl.getFixedLocation() + imageName;
		$("#" + imgId).attr("src", pratikabustt_browser_impl.getBrowserSpecificUrl(imgUrl));
	},
	
	/**
		Remove all excess code required for 
	*/
	removeCompleteAddOnCode: function() {
	}
};