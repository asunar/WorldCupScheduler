var MenuView = function(hash, menuTemplate) {

    this.initialize = function() {
        var links = [{
                'name': 'Add', 'url' : 'Add'
            }, {
                'name': 'Select', 'url' : 'Select'
            }, {
                'name': 'Tags', 'url' : 'Tags'
            }, {
                'name': 'Items', 'url' : 'Items'
            }
        ];

        links.forEach(function(link, index) {
            if (hash.lastIndexOf('#' + link.name, 0) === 0) {
                link.url = window.location.hash;
            } 
        });
        this.links = links;
    };

    this.render = function() {
        return menuTemplate(this.links);
    };

    this.initialize();
};
