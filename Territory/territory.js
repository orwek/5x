app = {
	select_country : [],
	select : -1,
	player : 0,
	start : function () {
		app.random_map();
		app.msg("Begin!");
		app.demo();
	},
	demo : function () {
		var count = 0 ;
		for (i in app.child) {
			$("#turf" + count).html(app.child[i][1]);
			count += 1;
		}
	},
	rules : function () {
		$("#rules").slideToggle();
	},
	options : {
		numberofplayers : 6,
		passandplay : true,
		human1 : "Player 1",
		human2 : "Player 2",
		human3 : "Player 3",
		human4 : "Player 4",
		human5 : "Player 5",
		human6 : "Player 6",
		ai1 : "passive",
		ai2 : "passive",
		ai3 : "assertive",
		ai4 : "assertive",
		ai5 : "aggressive"
	},
	map: {
		0 : {
				player: 1,
				country: 1,
				battle: 4,
				neighbors: [2,3,7,9],
				child : 4 //see child list
		}
	},
	country : {
		// income, states (capital is the first id in the states array)
		0 : [10,[0,1,2,3]],
		3 : [3,[4,5,10]]
	},
	child : {
		// id num : [upkeep,symbol]
		"-1" : [1,"&phi;"], //tree 	alt+237 or &phi; (&Uarr;)
		0 : [0,""], //empty
		1 : [2,"&odot;"], //citizen 	alt+1 (&odot;)
		2 : [0,"&malt;"], // capital alt+30 or &xutri; (&malt;)
		3 : [6,"&ocir;"], // guard 	alt+2 (&ocir;)
		4 : [0,"&uArr;"], // tower 	alt+127 or &uArr;
		5 : [10,"&odash;"], // soldier	alt+24 or &uarr; (&odash;)
		6 : [18,"&oast;"] // knight	alt+233 or &Theta (&oast;)
	},
	economy : function (player_num) {
		for (i in country) {        

		}
	},
	buy : function (unit) {
		// basic idea, not done yet!!!
		if (unit = 0 && app.country[income] > 10) {
			app.country[app.select_country][0] = app.country[select_country][0] - 10;
		}
		if (unit = 1 && app.country[income] > 15) {
			app.country[app.select_country][0] = app.country[select_country][0] - 15;
		}
	},
	compare : function (peeps_num,map_num) {
		var adjacent = 0, battle = 0;
		// player check
				// upgrade if same player and possible

		// neighbor check
		for (i = 0; i < map[map_num].neighbors.length; i += 1) {
			for (j = 0; j < country[peeps[peeps_num].country].length; j += 1) {
				if (map[map_num].neighbors[i] === country[peeps[peeps_num].country][j]) {
					adjacent = 1;
				}        
			}
		}
		// battle check


		if (adjacent === 1 && battle ===1) {
			country.push(map_num);
			map
		} else {
			app.msg("Can’t attack there");
		}
	},
	random_map : function () {
		var temp = [],
		template = $("#template").html(),
		temp_map = "",
		count = 1,
		output = "";

		for (i = 0; i < 101; i +=1) {
				temp.push(count);
			if (count === app.options.numberofplayers){
				count = 1;
			} else {
				count += 1;
			}				
		}
		app.shuffle(temp);
		for (i = 0; i < temp.length -1; i += 1) {
			temp_map = template.replace("{{id}}",i);
			output += temp_map.replace("{{number}}",temp[i]);
		}
		$("#stage").html(output);
	},
	shuffle : function (shuffle_me) {
		for (i = 0; i < shuffle_me.length; i += 1){
			var shuffle1, random;
			shuffle1 = shuffle_me.splice(i,1);
			random = Math.floor(Math.random()* shuffle_me.length);
			shuffle_me.splice(random,0,shuffle1);
		}	
	},
	update_country : function () {
		// find adjacent squares and define countries
		app.country
	},
	update_map : function () {
		// update the map object
	},
	update_ui : function () {
		var temp = [],
		template = $("#template").html(),
		output = "";
		// update the ui with changes from the map object
		for (i = 0; i < map.length; i += 1) {
			output += template.replace("{{number}}",temp[i]);
		}
		$("#stage").html(output);

		// update children
		for (i = 0; i < map.length; i += 1) {
			$("#map" + i).html(app.child[app.map[i].child][1]);
		}
	},
	end_turn : function () {

	},
	msg : function (msg_in) {
		$("#msg").html(msg_in);
	}
};