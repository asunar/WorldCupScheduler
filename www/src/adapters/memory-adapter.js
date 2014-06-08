var MemoryAdapter = function() {

    this.initialize = function() {

    };

    var gridMenuItems =
    { rows:
	[
		[
			{ id:'lnkToday', url:'#today', label: 'Today', icon: 'fa fa-clock-o fa-5x'},
			{ id:'lnkTomorrow', url:'#tomorrow', label: 'Tomorrow', icon: 'fa fa-calendar-o fa-5x'},
			{ id:'lnkSchedule', url:'#schedule', label: 'Schedule', icon: 'fa fa-calendar fa-5x'}
		],

		[
			{ id:'lnkTeams', url:'#teams', label: 'Teams', icon: 'fa fa-users fa-5x'},
			{ id:'lnkGroups', url:'#groups', label: 'Groups', icon: 'fa fa-list-alt fa-5x'},
			{ id:'lnkMySchedule', url:'#mySchedule', label: 'My Schedule', icon: 'fa fa-check-square-o fa-5x'}
		]	


	]
    };



this.getGridMenuItems = function() { return gridMenuItems; };


    var schedule =
  
{
    "matchDays": [
        {
            "date": "2014-06-12T00:00:00-05:00",
            "matches": [
                {
                    "group": "Group A",
                    "team1Name": "Brazil",
                    "team1Code": "bra",
                    "team2Name": "Croatia",
                    "team2Code": "cro",
                    "time": "17:00"
                }
            ]
        },
        {
            "date": "2014-06-13T00:00:00-05:00",
            "matches": [
                {
                    "group": "Group A",
                    "team1Name": "Mexico",
                    "team1Code": "mex",
                    "team2Name": "Cameroon",
                    "team2Code": "cmr",
                    "time": "13:00"
                },
                {
                    "group": "Group B",
                    "team1Name": "Spain",
                    "team1Code": "esp",
                    "team2Name": "Netherlands",
                    "team2Code": "ned",
                    "time": "16:00"
                },
                {
                    "group": "Group B",
                    "team1Name": "Chile",
                    "team1Code": "chi",
                    "team2Name": "Australia",
                    "team2Code": "aus",
                    "time": "18:00"
                }
            ]
        },
        {
            "date": "2014-06-14T00:00:00-05:00",
            "matches": [
                {
                    "group": "Group C",
                    "team1Name": "Colombia",
                    "team1Code": "col",
                    "team2Name": "Greece",
                    "team2Code": "gre",
                    "time": "13:00"
                },
                {
                    "group": "Group D",
                    "team1Name": "Uruguay",
                    "team1Code": "uru",
                    "team2Name": "Costa Rica",
                    "team2Code": "crc",
                    "time": "16:00"
                },
                {
                    "group": "Group D",
                    "team1Name": "England",
                    "team1Code": "eng",
                    "team2Name": "Italy",
                    "team2Code": "ita",
                    "time": "18:00"
                },
                {
                    "group": "Group C",
                    "team1Name": "Côte d'Ivoire",
                    "team1Code": "civ",
                    "team2Name": "Japan",
                    "team2Code": "jpn",
                    "time": "22:00"
                }
            ]
        },
        {
            "date": "2014-06-15T00:00:00-05:00",
            "matches": [
                {
                    "group": "Group E",
                    "team1Name": "Switzerland",
                    "team1Code": "sui",
                    "team2Name": "Ecuador",
                    "team2Code": "ecu",
                    "time": "13:00"
                },
                {
                    "group": "Group E",
                    "team1Name": "France",
                    "team1Code": "fra",
                    "team2Name": "Honduras",
                    "team2Code": "hon",
                    "time": "16:00"
                },
                {
                    "group": "Group F",
                    "team1Name": "Argentina",
                    "team1Code": "arg",
                    "team2Name": "Bosnia and Herzegovina",
                    "team2Code": "bih",
                    "time": "19:00"
                }
            ]
        },
        {
            "date": "2014-06-16T00:00:00-05:00",
            "matches": [
                {
                    "group": "Group G",
                    "team1Name": "Germany",
                    "team1Code": "ger",
                    "team2Name": "Portugal",
                    "team2Code": "por",
                    "time": "13:00"
                },
                {
                    "group": "Group F",
                    "team1Name": "Iran",
                    "team1Code": "irn",
                    "team2Name": "Nigeria",
                    "team2Code": "nga",
                    "time": "16:00"
                },
                {
                    "group": "Group G",
                    "team1Name": "Ghana",
                    "team1Code": "gha",
                    "team2Name": "USA",
                    "team2Code": "usa",
                    "time": "19:00"
                }
            ]
        },
        {
            "date": "2014-06-17T00:00:00-05:00",
            "matches": [
                {
                    "group": "Group H",
                    "team1Name": "Belgium",
                    "team1Code": "bel",
                    "team2Name": "Algeria",
                    "team2Code": "alg",
                    "time": "13:00"
                },
                {
                    "group": "Group A",
                    "team1Name": "Brazil",
                    "team1Code": "bra",
                    "team2Name": "Mexico",
                    "team2Code": "mex",
                    "time": "16:00"
                },
                {
                    "group": "Group H",
                    "team1Name": "Russia",
                    "team1Code": "rus",
                    "team2Name": "Korea Republic",
                    "team2Code": "kor",
                    "time": "18:00"
                }
            ]
        },
        {
            "date": "2014-06-18T00:00:00-05:00",
            "matches": [
                {
                    "group": "Group B",
                    "team1Name": "Australia",
                    "team1Code": "aus",
                    "team2Name": "Netherlands",
                    "team2Code": "ned",
                    "time": "13:00"
                },
                {
                    "group": "Group B",
                    "team1Name": "Spain",
                    "team1Code": "esp",
                    "team2Name": "Chile",
                    "team2Code": "chi",
                    "time": "16:00"
                },
                {
                    "group": "Group A",
                    "team1Name": "Cameroon",
                    "team1Code": "cmr",
                    "team2Name": "Croatia",
                    "team2Code": "cro",
                    "time": "18:00"
                }
            ]
        },
        {
            "date": "2014-06-19T00:00:00-05:00",
            "matches": [
                {
                    "group": "Group C",
                    "team1Name": "Colombia",
                    "team1Code": "col",
                    "team2Name": "Côte d'Ivoire",
                    "team2Code": "civ",
                    "time": "13:00"
                },
                {
                    "group": "Group D",
                    "team1Name": "Uruguay",
                    "team1Code": "uru",
                    "team2Name": "England",
                    "team2Code": "eng",
                    "time": "16:00"
                },
                {
                    "group": "Group C",
                    "team1Name": "Japan",
                    "team1Code": "jpn",
                    "team2Name": "Greece",
                    "team2Code": "gre",
                    "time": "19:00"
                }
            ]
        },
        {
            "date": "2014-06-20T00:00:00-05:00",
            "matches": [
                {
                    "group": "Group D",
                    "team1Name": "Italy",
                    "team1Code": "ita",
                    "team2Name": "Costa Rica",
                    "team2Code": "crc",
                    "time": "13:00"
                },
                {
                    "group": "Group E",
                    "team1Name": "Switzerland",
                    "team1Code": "sui",
                    "team2Name": "France",
                    "team2Code": "fra",
                    "time": "16:00"
                },
                {
                    "group": "Group E",
                    "team1Name": "Honduras",
                    "team1Code": "hon",
                    "team2Name": "Ecuador",
                    "team2Code": "ecu",
                    "time": "19:00"
                }
            ]
        },
        {
            "date": "2014-06-21T00:00:00-05:00",
            "matches": [
                {
                    "group": "Group F",
                    "team1Name": "Argentina",
                    "team1Code": "arg",
                    "team2Name": "Iran",
                    "team2Code": "irn",
                    "time": "13:00"
                },
                {
                    "group": "Group G",
                    "team1Name": "Germany",
                    "team1Code": "ger",
                    "team2Name": "Ghana",
                    "team2Code": "gha",
                    "time": "16:00"
                },
                {
                    "group": "Group F",
                    "team1Name": "Nigeria",
                    "team1Code": "nga",
                    "team2Name": "Bosnia and Herzegovina",
                    "team2Code": "bih",
                    "time": "18:00"
                }
            ]
        },
        {
            "date": "2014-06-22T00:00:00-05:00",
            "matches": [
                {
                    "group": "Group H",
                    "team1Name": "Belgium",
                    "team1Code": "bel",
                    "team2Name": "Russia",
                    "team2Code": "rus",
                    "time": "13:00"
                },
                {
                    "group": "Group H",
                    "team1Name": "Korea Republic",
                    "team1Code": "kor",
                    "team2Name": "Algeria",
                    "team2Code": "alg",
                    "time": "16:00"
                },
                {
                    "group": "Group G",
                    "team1Name": "USA",
                    "team1Code": "usa",
                    "team2Name": "Portugal",
                    "team2Code": "por",
                    "time": "18:00"
                }
            ]
        },
        {
            "date": "2014-06-23T00:00:00-05:00",
            "matches": [
                {
                    "group": "Group B",
                    "team1Name": "Netherlands",
                    "team1Code": "ned",
                    "team2Name": "Chile",
                    "team2Code": "chi",
                    "time": "13:00"
                },
                {
                    "group": "Group B",
                    "team1Name": "Australia",
                    "team1Code": "aus",
                    "team2Name": "Spain",
                    "team2Code": "esp",
                    "time": "13:00"
                },
                {
                    "group": "Group A",
                    "team1Name": "Cameroon",
                    "team1Code": "cmr",
                    "team2Name": "Brazil",
                    "team2Code": "bra",
                    "time": "17:00"
                },
                {
                    "group": "Group A",
                    "team1Name": "Croatia",
                    "team1Code": "cro",
                    "team2Name": "Mexico",
                    "team2Code": "mex",
                    "time": "17:00"
                }
            ]
        },
        {
            "date": "2014-06-24T00:00:00-05:00",
            "matches": [
                {
                    "group": "Group D",
                    "team1Name": "Italy",
                    "team1Code": "ita",
                    "team2Name": "Uruguay",
                    "team2Code": "uru",
                    "time": "13:00"
                },
                {
                    "group": "Group D",
                    "team1Name": "Costa Rica",
                    "team1Code": "crc",
                    "team2Name": "England",
                    "team2Code": "eng",
                    "time": "13:00"
                },
                {
                    "group": "Group C",
                    "team1Name": "Japan",
                    "team1Code": "jpn",
                    "team2Name": "Colombia",
                    "team2Code": "col",
                    "time": "16:00"
                },
                {
                    "group": "Group C",
                    "team1Name": "Greece",
                    "team1Code": "gre",
                    "team2Name": "Côte d'Ivoire",
                    "team2Code": "civ",
                    "time": "17:00"
                }
            ]
        },
        {
            "date": "2014-06-25T00:00:00-05:00",
            "matches": [
                {
                    "group": "Group F",
                    "team1Name": "Nigeria",
                    "team1Code": "nga",
                    "team2Name": "Argentina",
                    "team2Code": "arg",
                    "time": "13:00"
                },
                {
                    "group": "Group F",
                    "team1Name": "Bosnia and Herzegovina",
                    "team1Code": "bih",
                    "team2Name": "Iran",
                    "team2Code": "irn",
                    "time": "13:00"
                },
                {
                    "group": "Group E",
                    "team1Name": "Honduras",
                    "team1Code": "hon",
                    "team2Name": "Switzerland",
                    "team2Code": "sui",
                    "time": "16:00"
                },
                {
                    "group": "Group E",
                    "team1Name": "Ecuador",
                    "team1Code": "ecu",
                    "team2Name": "France",
                    "team2Code": "fra",
                    "time": "17:00"
                }
            ]
        },
        {
            "date": "2014-06-26T00:00:00-05:00",
            "matches": [
                {
                    "group": "Group G",
                    "team1Name": "Portugal",
                    "team1Code": "por",
                    "team2Name": "Ghana",
                    "team2Code": "gha",
                    "time": "13:00"
                },
                {
                    "group": "Group G",
                    "team1Name": "USA",
                    "team1Code": "usa",
                    "team2Name": "Germany",
                    "team2Code": "ger",
                    "time": "13:00"
                },
                {
                    "group": "Group H",
                    "team1Name": "Korea Republic",
                    "team1Code": "kor",
                    "team2Name": "Belgium",
                    "team2Code": "bel",
                    "time": "17:00"
                },
                {
                    "group": "Group H",
                    "team1Name": "Algeria",
                    "team1Code": "alg",
                    "team2Name": "Russia",
                    "team2Code": "rus",
                    "time": "17:00"
                }
            ]
        },
        {
            "date": "2014-06-28T00:00:00-05:00",
            "matches": [
                {
                    "group": "Round of 16",
                    "team1Name": "[1A]",
                    "team1Code": "[1a]",
                    "team2Name": "[2B]",
                    "team2Code": "[2b]",
                    "time": "13:00"
                },
                {
                    "group": "Round of 16",
                    "team1Name": "[1C]",
                    "team1Code": "[1c]",
                    "team2Name": "[2D]",
                    "team2Code": "[2d]",
                    "time": "17:00"
                }
            ]
        },
        {
            "date": "2014-06-29T00:00:00-05:00",
            "matches": [
                {
                    "group": "Round of 16",
                    "team1Name": "[1B]",
                    "team1Code": "[1b]",
                    "team2Name": "[2A]",
                    "team2Code": "[2a]",
                    "time": "13:00"
                },
                {
                    "group": "Round of 16",
                    "team1Name": "[1D]",
                    "team1Code": "[1d]",
                    "team2Name": "[2C]",
                    "team2Code": "[2c]",
                    "time": "17:00"
                }
            ]
        },
        {
            "date": "2014-06-30T00:00:00-05:00",
            "matches": [
                {
                    "group": "Round of 16",
                    "team1Name": "[1E]",
                    "team1Code": "[1e]",
                    "team2Name": "[2F]",
                    "team2Code": "[2f]",
                    "time": "13:00"
                },
                {
                    "group": "Round of 16",
                    "team1Name": "[1G]",
                    "team1Code": "[1g]",
                    "team2Name": "[2H]",
                    "team2Code": "[2h]",
                    "time": "17:00"
                }
            ]
        },
        {
            "date": "2014-07-01T00:00:00-05:00",
            "matches": [
                {
                    "group": "Round of 16",
                    "team1Name": "[1F]",
                    "team1Code": "[1f]",
                    "team2Name": "[2E]",
                    "team2Code": "[2e]",
                    "time": "13:00"
                },
                {
                    "group": "Round of 16",
                    "team1Name": "[1H]",
                    "team1Code": "[1h]",
                    "team2Name": "[2G]",
                    "team2Code": "[2g]",
                    "time": "17:00"
                }
            ]
        },
        {
            "date": "2014-07-04T00:00:00-05:00",
            "matches": [
                {
                    "group": "Quarter-finals",
                    "team1Name": "[W53]",
                    "team1Code": "[w53]",
                    "team2Name": "[W54]",
                    "team2Code": "[w54]",
                    "time": "13:00"
                },
                {
                    "group": "Quarter-finals",
                    "team1Name": "[W49]",
                    "team1Code": "[w49]",
                    "team2Name": "[W50]",
                    "team2Code": "[w50]",
                    "time": "17:00"
                }
            ]
        },
        {
            "date": "2014-07-05T00:00:00-05:00",
            "matches": [
                {
                    "group": "Quarter-finals",
                    "team1Name": "[W55]",
                    "team1Code": "[w55]",
                    "team2Name": "[W56]",
                    "team2Code": "[w56]",
                    "time": "13:00"
                },
                {
                    "group": "Quarter-finals",
                    "team1Name": "[W51]",
                    "team1Code": "[w51]",
                    "team2Name": "[W52]",
                    "team2Code": "[w52]",
                    "time": "17:00"
                }
            ]
        },
        {
            "date": "2014-07-08T00:00:00-05:00",
            "matches": [
                {
                    "group": "Semi-finals",
                    "team1Name": "[W57]",
                    "team1Code": "[w57]",
                    "team2Name": "[W58]",
                    "team2Code": "[w58]",
                    "time": "17:00"
                }
            ]
        },
        {
            "date": "2014-07-09T00:00:00-05:00",
            "matches": [
                {
                    "group": "Semi-finals",
                    "team1Name": "[W59]",
                    "team1Code": "[w59]",
                    "team2Name": "[W60]",
                    "team2Code": "[w60]",
                    "time": "17:00"
                }
            ]
        },
        {
            "date": "2014-07-12T00:00:00-05:00",
            "matches": [
                {
                    "group": "Play-off for third place",
                    "team1Name": "[L61]",
                    "team1Code": "[l61]",
                    "team2Name": "[L62]",
                    "team2Code": "[l62]",
                    "time": "17:00"
                }
            ]
        },
        {
            "date": "2014-07-13T00:00:00-05:00",
            "matches": [
                {
                    "group": "Final",
                    "team1Name": "[W61]",
                    "team1Code": "[w61]",
                    "team2Name": "[W62]",
                    "team2Code": "[w62]",
                    "time": "16:00"
                }
            ]
        }
    ]
}
  
;

    
this.getAllMatches = function() { return schedule.matchDays; };
this.getMatchesByDate = function(date) { 
		return schedule.matchDays.filter(function(matchDay) {
							return new Date(matchDay.date).getTime() === date.getTime(); 
						});
		};



this.addUnique = function (teams, code, name){
	var count = (teams.filter(function(existingTeam) { return existingTeam.code === code })).length;
	
	if(count === 0) {
		teams.push({code: code, name: name});
	}
};
 

this.getTeams = function() { 
	/*
	var teams = [];
	firstRound = schedule.matchDays.filter(function(md){ 
						return (new Date(md.date)).getTime() <= (new Date(2014, 5, 17)).getTime(); 
						});
	var addIfUnique = this.addUnique;
	firstRound.forEach(function (frm){ 
		frm.matches.forEach(function(m){ 
					addIfUnique(teams, m.team1Code, m.team1Name);
					addIfUnique(teams, m.team2Code, m.team2Name);
				})
		});
	teams.sort(function (a, b) {
	    if (a.name > b.name)
	      return 1;
	    if (a.name < b.name)
	      return -1;
	    // a must be equal to b
	    return 0;
	});	
	*/
	var teams = [{"code":"alg","name":"Algeria"},{"code":"arg","name":"Argentina"},{"code":"aus","name":"Australia"},{"code":"bel","name":"Belgium"},{"code":"bih","name":"Bosnia and Herzegovina"},{"code":"bra","name":"Brazil"},{"code":"cmr","name":"Cameroon"},{"code":"chi","name":"Chile"},{"code":"col","name":"Colombia"},{"code":"crc","name":"Costa Rica"},{"code":"cro","name":"Croatia"},{"code":"civ","name":"Côte d'Ivoire"},{"code":"ecu","name":"Ecuador"},{"code":"eng","name":"England"},{"code":"fra","name":"France"},{"code":"ger","name":"Germany"},{"code":"gha","name":"Ghana"},{"code":"gre","name":"Greece"},{"code":"hon","name":"Honduras"},{"code":"irn","name":"Iran"},{"code":"ita","name":"Italy"},{"code":"jpn","name":"Japan"},{"code":"kor","name":"Korea Republic"},{"code":"mex","name":"Mexico"},{"code":"ned","name":"Netherlands"},{"code":"nga","name":"Nigeria"},{"code":"por","name":"Portugal"},{"code":"rus","name":"Russia"},{"code":"esp","name":"Spain"},{"code":"sui","name":"Switzerland"},{"code":"usa","name":"USA"},{"code":"uru","name":"Uruguay"}]; 

	return teams;
};


this.getGroups = function(){
	var groups =[
    {
        "name": "Group A",
        "teams": [
            {
                "code": "bra",
                "name": "Brazil"
            },
            {
                "code": "cro",
                "name": "Croatia"
            },
            {
                "code": "mex",
                "name": "Mexico"
            },
            {
                "code": "cmr",
                "name": "Cameroon"
            }
        ]
    },
    {
        "name": "Group B",
        "teams": [
            {
                "code": "esp",
                "name": "Spain"
            },
            {
                "code": "ned",
                "name": "Netherlands"
            },
            {
                "code": "chi",
                "name": "Chile"
            },
            {
                "code": "aus",
                "name": "Australia"
            }
        ]
    },
    {
        "name": "Group C",
        "teams": [
            {
                "code": "col",
                "name": "Colombia"
            },
            {
                "code": "gre",
                "name": "Greece"
            },
            {
                "code": "civ",
                "name": "Côte d'Ivoire"
            },
            {
                "code": "jpn",
                "name": "Japan"
            }
        ]
    },
    {
        "name": "Group D",
        "teams": [
            {
                "code": "uru",
                "name": "Uruguay"
            },
            {
                "code": "crc",
                "name": "Costa Rica"
            },
            {
                "code": "eng",
                "name": "England"
            },
            {
                "code": "ita",
                "name": "Italy"
            }
        ]
    },
    {
        "name": "Group E",
        "teams": [
            {
                "code": "sui",
                "name": "Switzerland"
            },
            {
                "code": "ecu",
                "name": "Ecuador"
            },
            {
                "code": "fra",
                "name": "France"
            },
            {
                "code": "hon",
                "name": "Honduras"
            }
        ]
    },
    {
        "name": "Group F",
        "teams": [
            {
                "code": "arg",
                "name": "Argentina"
            },
            {
                "code": "bih",
                "name": "Bosnia and Herzegovina"
            },
            {
                "code": "irn",
                "name": "Iran"
            },
            {
                "code": "nga",
                "name": "Nigeria"
            }
        ]
    },
    {
        "name": "Group G",
        "teams": [
            {
                "code": "ger",
                "name": "Germany"
            },
            {
                "code": "por",
                "name": "Portugal"
            },
            {
                "code": "gha",
                "name": "Ghana"
            },
            {
                "code": "usa",
                "name": "USA"
            }
        ]
    },
    {
        "name": "Group H",
        "teams": [
            {
                "code": "bel",
                "name": "Belgium"
            },
            {
                "code": "alg",
                "name": "Algeria"
            },
            {
                "code": "rus",
                "name": "Russia"
            },
            {
                "code": "kor",
                "name": "Korea Republic"
            }
        ]
    }
];


this.getMatchDaysByTeam = function(code) {
	var matchDaysByTeam = [];
	
	schedule.matchDays.forEach(function(matchDay){
		matchDay.matches.forEach(function(match){
			if(match.team1Code === code || match.team2Code === code) {
				matchDaysByTeam.push({ date: matchDay.date, matches : [match] });
			}
		});
	});

	return matchDaysByTeam;
}

var mySchedule = [];

this.addToMySchedule = function(matchDay) {
	matchDaysByTeam.push(matchDay);
};

this.getMySchedule = function() { 
	return mySchedule;
};







};
