// Display conditions per selection
document.getElementById('condition-submit').addEventListener('click', function() {
  document.getElementById("condition-result").innerText = "";
  var optionSelected = document.getElementById("option-select").value;
  var option0 = "select an option...";
  var option1 = "Send a reminder 24 hours before a timestamp";
  var option2 = "Send a reminder 24 hours after a timestamp";
  var option3 = "Send a reminder 1 week before a timestamp";
  var option4 = "Send a reminder 1 week after a timestamp";
  var option5 = "Group timestamps within the past 24 hours";
  var option6 = "Group timestamps within the next 24 hours";
  var option0Condition = "Select an option";
  var option1Condition = "<p><em>timestamp is between 24 hours from `now` and 48 hours from `now`</em></p><h3>Condition</h3><ul><li>is a timestamp after a relative date of 1 day from `now`</li><li>is a timestamp before a relative date of 2 days from `now`</li></ul>";
  var option2Condition = "<p><em>timestamp is between 24 hours ago and 48 hours ago</em><h3>Condition</h3><ul><li>is a timestamp before a relative date of 1 day ago</li><li>is a timestamp after a relative date of 2 days ago</li></ul>";
  var option3Condition = "<p>Limits timestamps to a 24 hour range one week from now</p><p><em>timestamp is after 7 days from `now` (next week) and before 8 days from `now`</em></p><h3>Condition</h3><ul><li>Is a timestamp after a relative date of of 7 day from `now`</li><li>is a timestamp before a relative date of of 8 days from `now`</li></ul>";
  var option4Condition = "<p>Limits timestamps to a 24 hour range one week ago</p><p><em>timestamp is before 7 days ago (last week) and after 8 days ago</em></p><h3>Condition</h3><ul><li>Is a timestamp before a relative date of of 7 day ago</li><li>Is a timestamp after a relative date of of 8 days ago</li></ul>";
  var option5Condition = "<p><em>timestamp is between `now` and 24 hours ago</em></p><h3>Condition</h3><ul><li>is a timestamp before a relative date of `now`</li><li>is a timestamp after a relative date 1 days ago</li></ul>";
  var option6Condition = "<p><em>timestamp is between `now` and 24 hours from `now`</em></p><h3>Condition</h3><ul><li>is a timestamp after a relative date of `now`</li><li>is a timestamp before a relative date 1 days from `now`</li></ul>";
  if (optionSelected === option0) {
    document.getElementById("condition-result").innerHTML += option0Condition;
    } else if (optionSelected === option1) {
      document.getElementById("condition-result").innerHTML += option1Condition;
    } else if (optionSelected === option2) {
      document.getElementById("condition-result").innerHTML += option2Condition;
    } else if (optionSelected === option3) {
      document.getElementById("condition-result").innerHTML += option3Condition;
    } else if (optionSelected === option4) {
      document.getElementById("condition-result").innerHTML += option4Condition;
    } else if (optionSelected === option5) {
      document.getElementById("condition-result").innerHTML += option5Condition;
    } else if (optionSelected === option6) {
      document.getElementById("condition-result").innerHTML += option6Condition;
    } else {
    document.getElementById("condition-result").textContent = "";
  }
});