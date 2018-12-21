1. Check cookie , if cookie for exist for uid fetch thread for the uid or else set cookie for the uid.</br>
2.In fetch thread get agent pk and chat thread pk from api and fetch messages from support chat api and </br>
push data into chat messages.
3.after content loading -

    connection.onopen() ->
      register the visitor to channels - 

service.support.createDetailCookie -> 

    session.register(wamp_prefix+'service.support.createDetailCookie.'+uid, createCookieDetail).then()
  
      in create cookieDetail callback->
  
  
service.support.heartbeat ->

    session.register(wamp_prefix+'service.support.heartbeat.'+uid, heartbeat).then()
    
      in heartbeat callback-> wil be used to check if visitor is active .(returns uid)

service.support.chat ->

    session.subscribe(wamp_prefix+'service.support.chat.' + uid, supportChat).then()
  
      in supportChat callback -> check fot the arguments received by this channel such as -
  
    if(args[0]=='hideVisitorScreen'){
        // agent has called to hide visitor screen for screen sharing purpose
      }
      else if(args[0]=='ShowVisitorScreen'){
       //// agent has called to show visitor screen for screen sharing purpose
      }else if(args[0]=='ToggleVisitorVideo'){
          //agent has called to minimize video frame
      }else if(args[0]=='ShowVisitorVideo'){
        //agent has called to maximize video frame
      }

      if (args[0]=='T') {
        // indiacate the $watch on agent's type box (agent is typing)
      }
      if (args[0]=="M") {
         // message has seen sent by agent
         message = args[1] // set the args[1] to message
         setAgentDetails() //such as name and dp
      }else if (args[0]=="MF") {
       // media file has been sent by agent
        setAgentDetails() //such as name and dp
        //get the media file from api /api/support/supportChat/ 
       // xhttp.open('GET', '{{serverAddress}}/api/support/supportChat/' + args[1].filePk + '/'  , true);
 

      }else if (args[0]=='ML') {
      // media Link received
        setAgentDetails()
         message = args[1] //set the link to message
      }else if (args[0]=='AP') {
        // chat transfered 
        agentPk = args[1]; // set new agent pk 
      }else if (args[0]=='O') {
       // agent is online
      }else if (args[0]=='A') {
        // chat has been succesfully asigned
      }else if (args[0]=='F') {
        // agent has ended the chat open the feedback form 
      }
      
      //create a div element and set the innerHTML to message along with pushing it into chat.message

  
