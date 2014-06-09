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
		replaceChildren(content,(new MatchListView(adapter.getAllMatches())).render());
	}

	var showMatchList = function(date) {
		var matchDaysToDisplay = adapter.getMatchesByDate(date);
		var matchListView = new MatchListView(matchDaysToDisplay);
		replaceChildren(content, matchListView.render());
	};

	var showMatchListByTeam = function() {
		var teamCode = getUrlVars().teamCode;
		var matchDaysToDisplay = adapter.getMatchDaysByTeam(teamCode);
		var matchListView = new MatchListView(matchDaysToDisplay);
		replaceChildren(content, matchListView.render());
	};

	var showMatchListByGroup = function() {
		var groupName = getUrlVars().group;
		var matchDaysToDisplay = adapter.getMatchDaysByGroup(groupName);
		var matchListView = new MatchListView(matchDaysToDisplay);
		replaceChildren(content, matchListView.render());
	};

	var showTeams = function(){
		var teamListView = new TeamListView(adapter);
		replaceChildren(content, teamListView.render());
	};

	var showGroups = function(){
		var groupListView = new GroupListView(adapter);
		replaceChildren(content, groupListView.render());
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
	'#teams': showTeams,
	'#groups': showGroups,
	'#matchesByTeam' : showMatchListByTeam,
	'#matchesByGroup' : showMatchListByGroup/*,
	'#MySchedule': showMySchedule*/
	};

	routeTable[hashWithoutQueryString]();
    }

    route();
}());
