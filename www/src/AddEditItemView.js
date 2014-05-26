var AddEditItemView = function(adapter, addEditItemTemplate, itemId) {

    this.initialize = function() {
        this.el = document.createElement("div");

    };

    this.render = function() {
        var i = addEditItemTemplate(adapter.getOrCreateItem(itemId));
	this.el.innerHTML = i;
	this.wireUpSaveHandler();
	return this.el;
    };
    
    this.wireUpSaveHandler = function() {
	var saveButton = this.el.getElementsByTagName("a")[0];
	var thisView = this;
	saveButton.onclick = function (e) {
		var itemId = parseInt(this.getAttribute("data-itemid"), 10);
		var name = $('#name').value;
		var description = $('#description').value;
		var tags = thisView.getSelectedTags();
		var tagsArray = Array.isArray(tags) ? tags : [tags];
		if(name !== null && name !== ''){adapter.saveItem({ "id": itemId, "name" : name, "description" : description, "tags" : tags });}
		else { e.preventDefault(); }
		 
	};
    };

    this.getSelectedTags = function() {
		var selectedTags = [];
		var selectedCheckboxes = Array.prototype.slice.call($('#taglist input[type=checkbox]')).filter(function(item){ return item.checked; });
		selectedCheckboxes.forEach(function(checkBox) { selectedTags.push(checkBox.name); });
		var customTags = this.getCustomTags();
		var allTags = _.union(selectedTags, customTags);
		return allTags;
	};		

    this.getCustomTags = function() {
	var customTagsString = $('#customTags').value;
	var customTagsTrimmed = customTagsString.trim();
	if(customTagsTrimmed === '') return [];

	var customTags = [];
	customTags = customTagsString.split(",");
	_.each(customTags, function (customTag) {
		customTag = escape(customTag).trim();
	});

	return customTags;	


    };

    

    this.initialize();
};
