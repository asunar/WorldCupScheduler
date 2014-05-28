var MatchListView = function(matchesToDisplay, date) {

    this.initialize = function() {
        this.el = document.createElement("div");
    };

    this.render = function() {
	var style = "style='background-color:#00CD00;color: white;font-weight:bold; font-family: helvetica; width:100%;  font-size: medium'";
	var template = "{{# .}} \
			<div style='border-bottom: solid 1px #474747;' >{{ date }} </div> \
			<table " + style + " > \
			{{#matches}} \
				<tr style='border-bottom: 1px solid #DCDCDC;'> \
				<td style='width:5%;text-align:right'><img src=images/flags/{{ team1Code }}.png /></td> \
				<td style='width:40%'>{{ team1Name }}</td> \
				<td style='text-align:center;width:10%'>{{ time }}</td> \
				<td style='text-align:right;width:40%'>{{ team2Name }}</td> \
				<td style='width:5%'><img src=images/flags/{{ team2Code }}.png /></td> \
				</tr> \
			{{/matches}} \
			</table> \
			{{/ .}} ";

	var matchListTemplate = Handlebars.compile(template);
	var matchDaysToDisplay = [];

	matchesToDisplay.forEach(function(md) {
		matchDaysToDisplay.push({"date": formatDate(new Date(md.date)),"matches": md.matches});
	});
        this.el.innerHTML = matchListTemplate(matchDaysToDisplay);
        return this.el;
    };

    // Instead of adapter parameter, pass matches to display to this view
    // to display mathes for today, tomorrow and per team`


    this.initialize();
}
