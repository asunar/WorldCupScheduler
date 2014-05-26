// We use an "Immediate Function" to initialize the application to avoid leaving anything behind in the global scope
(function() {

    /* ---------------------------------- Local Variables ---------------------------------- */
    var adapter = new MemoryAdapter();

    /* --------------------------------- Event Registration -------------------------------- */

    window.addEventListener('hashchange', route);


    //var menuTemplate = Handlebars.compile($("#menuTemplate").innerHTML);
    //var gridMenuTemplate = Handlebars.compile($("#gridMenuTemplate").innerHTML);



    /* ---------------------------------- Local Functions ---------------------------------- */

    function configureMenu(hash) {
        var defaultPage = '#Tags';
        var destinationPage = hash || defaultPage;
        //$('#menu').innerHTML = (new MenuView(destinationPage, menuTemplate).render());

    }

    function replaceChildren(parentElement, children) {
	parentElement.innerHTML = '';
	parentElement.appendChild(children);
    }

    function route() {
        var hash = window.location.hash;
        configureMenu(hash);

	var content = $('#content');

	var showHome = function(){
		replaceChildren(content, new HomeView(adapter).render());
	};

	if(!hash){
		showHome();
		return;
	}

	
	var showToday = function() {
		var today = new Date(2014, 5, 14);
		showMatchList(today);
	};
	
	var showTomorrow = function() {
		var today = new Date(2014, 5, 14); 
		var tomorrowTicks   =  today.setDate(today.getDate()+1);
		var tomorrow = new Date(tomorrowTicks);
		showMatchList(tomorrow);

	};

	var showSchedule = function() {
		replaceChildren(content,(new MatchListView(adapter)).render());
	}

	var showMatchList = function(date) {
		var matchListView = new MatchListView(adapter, date);
		replaceChildren(content, matchListView.render());
	};

	var showTeams = function(){
		var teamListView = new TeamListView(adapter);
		replaceChildren(content, teamListView.render());
	};

	var hashWithoutQueryString = hash;
	if(hash.lastIndexOf('?') !== -1) {
		hashWithoutQueryString = hash.substring(0, hash.lastIndexOf('?'))
	}	
	
	var routeTable = {
	'#home': showHome,
	'#today': showToday,
	'#tomorrow': showTomorrow,
	'#schedule': showSchedule,
	'#teams': showTeams/*,
	'#Groups': showGroups,
	'#MySchedule': showMySchedule*/
	};

	routeTable[hashWithoutQueryString]();
    }

    route();
}());
