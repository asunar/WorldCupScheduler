var CatalogView = function(adapter, catalogTemplate, catalogId) {

    this.initialize = function() {
        this.el = document.createElement("ul");
    };

    this.render = function() {
        this.el.innerHTML = catalogTemplate(adapter.getCatalogItems(catalogId));
	this.wireUpEvents();
        return this.el;
    };

    this.wireUpEvents = function() {
		var addRemoveButtons = Array.prototype.slice.call(this.el.children, 0);
		addRemoveButtons.forEach(function(addRemoveButton) { addRemoveButton.onclick = function (e) {
		e.preventDefault();
		var catalogItemId = parseInt(this.getAttribute("data-catalogitemid"), 10);
		var isAdded = this.getAttribute("data-added") === 'true';
		adapter.updateFromCatalog(catalogItemId, isAdded);
		this.setAttribute("data-added", !isAdded);
		var commandText = e.target.parentElement.lastChild.textContent.lastIndexOf('Add') === -1 ? "Add to" : "Remove from";
		e.target.parentElement.lastChild.textContent = commandText + " my list";
	};   
	});
    };
    this.initialize();
};

