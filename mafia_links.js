/* mafia_links.js */
/*global say, mafiathemes, Bot*/

module.exports = {
	init: function() { },
	links: function(playname, playmessage, channel) {
		if (playmessage.indexOf("[[") < playmessage.indexOf("]]")) {
				var b = playmessage.split("[[")[1].split("]]")[0].toLowerCase();
				if (b == "mafia theme checker" || b == "theme checker") {
					say("Mafia Theme Checker: http://icekirby.github.com/PO-stuff/mafiachecker/", channel);
					return true;
				}
				if (b == "mafia guide" || b == "mafia theme guide") {
					say("Mafia Theme Guide: http://pokemon-online.eu/forums/showthread.php?9793-How-To-Make-Mafia-Themes-(v2.0)", channel);
					return true;
				}
				if (b == "mafia documentation" || b == "theme documentation" || b == "mafia theme documentation" || b == "mafia documentation thread") {
					say("Mafia Theme Documentation: http://pokemon-online.eu/forums/showthread.php?15833-Mafia-Theme-Documentation", channel);
					return true;
				}
				if (b == "mafia suggestion" || b == "mafia suggestions" || b == "mafia suggestion thread" || b == "mafia suggestions thread") {
					say("Mafia Suggestions Thread: http://pokemon-online.eu/forums/showthread.php?11018-Suggestion-Thread-Post-your-suggestions-for-mafia-here!", channel);
					return true;
				}
				if (b == "mafia command" || b == "mafia commands" || b == "mafia command thread" || b == "mafia commands thread") {
					say("Mafia Commands Thread: http://pokemon-online.eu/forums/showthread.php?16686-All-Mafia-Commands-In-One-Thread&p=217502#post217502", channel);
					return true;
				}
				if (b == "mafia review" || b == "mafia review forum") {
					say("Mafia Review: http://pokemon-online.eu/forums/forumdisplay.php?109-Mafia-Review", channel);
					return true;
				}
				if (b == "theme critique" || b == "theme improvement" || b == "theme critique thread" || b == "theme improvement thread") {
					say("Theme Critique/Improvement: http://pokemon-online.eu/forums/forumdisplay.php?114-Theme-Critique-and-Improvement", channel);
					return true;
				}
				if (b == "mafia tutoring" || b == "mafia tutoring thread") {
					say("Mafia Tutoring: http://pokemon-online.eu/forums/showthread.php?16801-Mafia-Tutoring-Sign-up-to-be-tutored!", channel);
					return true;
				}
				if (mafiathemes.hasOwnProperty(b)) {
					say(mafiathemes[b].name + ": " + mafiathemes[b].link, channel);
					return true;
				}
			}
		if (Bot.isDirector(playname) && playmessage.toLowerCase().indexOf("updatethemes") > -1) {
			say("/themeinfo", "Mafia")
			say("Mafia theme links were updated!", channel)
			return true;
		}
	}
};