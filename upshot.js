// Restrieve user's id in localStorage["upshot_id"].
function connexion(){
  var xhr = new XMLHttpRequest();
	
	xhr.open("GET", "http://eupchote.com/users/get_id.json", true);
  
  xhr.onreadystatechange = function() {
    if (xhr.readyState == 4) {
      // JSON.parse does not evaluate the attacker's scripts.
      var resp = JSON.parse(xhr.responseText);

      if(resp.status==200 && resp.return==true){
				
        // document.getElementById('connection_status').textContent = "Connected";
        localStorage["upshot_id"] = resp.id;
				localStorage["upshot_user_accounts"] = JSON.stringify(resp.user_accounts);
  			// set_user_accounts(resp.user_accounts);
      } else {
        localStorage["upshot_id"] = null;
  			localStorage["upshot_user_accounts"] = null;
  				
  				// if(document.getElementById('connection_status')){
  				//   					document.getElementById('connection_status').textContent = "";
  				//   				}
  				// 				
  				// 				if(resp.status == 401){
  				// 					document.getElementById('connection_status').textContent = resp.error;
  				// 				}
  				//   				
  				// 				// Clean accounts
  				//   				if(document.getElementById("accounts")){
  				//   					var accounts = document.getElementById("accounts");
  				//   
  				//       		// remove tbody if already exists
  				//       		if(accounts.getElementsByTagName('tbody')[0]!=null){
  				//       			accounts.removeChild(accounts.getElementsByTagName('tbody')[0]);
  				//   						accounts.style.display = "none";
  				//       		}
  				//   				}
      }
    }
  }
  xhr.send();
}
