var CatalogListView = function(adapter, catalogListTemplate) {

    this.initialize = function() {
        this.el = document.createElement("ul");
    };

    this.render = function() {
        this.el.innerHTML = catalogListTemplate(adapter.getCatalogs());
        return this.el;
    };

   
    this.initialize();
};
