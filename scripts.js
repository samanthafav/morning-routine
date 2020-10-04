//count the number of li and add to var
var tasksLeft = document.getElementsByTagName("li").length;

//get current date
var now = new Date();

//get month from current date
var month = now.toLocaleString("default", { month: "long" });

//get day name from current date
var weekday = new Array(7);
weekday[0] = "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";
var dayname = weekday[now.getDay()];

//get the day of current date
var day = now.getDate();

// get spoken day for sentance
var spokenDay = new Array(31);
spokenDay[1] = "1st";
spokenDay[2] = "2nd";
spokenDay[3] = "3rd";
spokenDay[4] = "4th";
spokenDay[5] = "5th";
spokenDay[6] = "6th";
spokenDay[7] = "7th";
spokenDay[8] = "8th";
spokenDay[9] = "9th";
spokenDay[10] = "10th";
spokenDay[11] = "11th";
spokenDay[12] = "12th";
spokenDay[13] = "13th";
spokenDay[14] = "14th";
spokenDay[15] = "15th";
spokenDay[16] = "16th";
spokenDay[17] = "17th";
spokenDay[18] = "18th";
spokenDay[19] = "19th";
spokenDay[20] = "20th";
spokenDay[21] = "21st";
spokenDay[22] = "22nd";
spokenDay[23] = "23rd";
spokenDay[24] = "24th";
spokenDay[25] = "25th";
spokenDay[26] = "26th";
spokenDay[27] = "27th";
spokenDay[28] = "28th";
spokenDay[29] = "29th";
spokenDay[30] = "30th";
spokenDay[31] = "31st";
var introDay = spokenDay[Number(day)];

//create intro text
var intro = ["Today is ", dayname, ", ", month, " ", introDay].join("");
document.getElementById("intro").innerHTML = intro;

//remove item once completed
function done(clicked_id) {
	document.getElementById(clicked_id).style.display = "none";
	decrement();
}

//reduce count of tasks upon completion
function decrement() {
	tasksLeft = tasksLeft - 1;
	if (tasksLeft == 0) {
		document.getElementById("reset").style.display = "inline-block";
		document.getElementById("list").style.display = "none";
		document.getElementById("yay").style.display = "block";
		console.log(tasksLeft);
	}
}

//reset button
function reset() {
	Array.prototype.forEach.call(
		document.getElementById("list").children,
		function (element) {
			element.style.display = "block";
		}
	);
	//for (var i = 1; i <= document.getElementsByTagName("li").length; i++) {
	//	document.getElementById(i).style.display = "block";
	//}
	document.getElementById("reset").style.display = "none";
	tasksLeft = document.getElementsByTagName("li").length;
	document.getElementById("list").style.display = "inline-block";
	document.getElementById("yay").style.display = "none";
}