var ItemListView = function(adapter, itemListTemplate, tag) {

    this.initialize = function() {
        this.el = document.createElement("ul");
    };

    this.render = function() {
	var items = tag === undefined ? adapter.getAllItems() : adapter.getItemsTaggedWith(tag);    
        this.el.innerHTML = itemListTemplate(items);
	this.wireUpEvents();
        return this.el;
    };

    this.wireUpEvents = function() {
		var deleteButtons = this.el.getElementsByClassName('delete');
		deleteButtons = Array.prototype.slice.call(deleteButtons);
		deleteButtons.forEach(function(deleteButton) {
			deleteButton.onclick = function (e) {
			if(!confirm('Are you sure?')) { e.preventDefault(); return;}
			var id = this.getAttribute("data-id"); 
			adapter.deleteItemById(parseInt(id, 10));
			};
		});
	};	

    
    this.initialize();
};
