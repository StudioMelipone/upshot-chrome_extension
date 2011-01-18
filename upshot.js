// Restrieve user's id in localStorage["upshot_id"].
function connexion(login, password){
  // CONNEXION
  var encoding = Base64.encode(login+":"+password);
  
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "http://upshot.dev/users/get_id.json", true);
  xhr.setRequestHeader("Content-Type","text/html");
  xhr.setRequestHeader("Accept","*/*");
  xhr.setRequestHeader("Authorization","Basic " + encoding );
  xhr.onreadystatechange = function() {
    if (xhr.readyState == 4) {
      // JSON.parse does not evaluate the attacker's scripts.
      var resp = JSON.parse(xhr.responseText);
      
      if(resp.status==200 && resp.return==true){
        document.getElementById('connection_status').textContent = "Connected";
        localStorage["upshot_id"] = resp.id;
				
				set_user_accounts(resp.user_accounts);
      } else {
        localStorage["upshot_id"] = null;
				localStorage["upshot_user_accounts"] = null;
				
				if(document.getElementById('connection_status')){
					document.getElementById('connection_status').textContent = "";
				}
				
				if(document.getElementById("accounts")){
					var accounts = document.getElementById("accounts");

      		// remove tbody if already exists
      		if(accounts.getElementsByTagName('tbody')[0]!=null){
      			accounts.removeChild(accounts.getElementsByTagName('tbody')[0]);
						accounts.style.display = "none";
      		}
				}
      }
    }
  }
  xhr.send();
}
