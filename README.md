Welcome to this mini tutorial:-----

Here we are going to learn some basics about Microfrontends.


The term Micro Frontends first came up in ThoughtWorks Technology Radar at the end of 2016. 
It extends the concepts of micro services to the frontend world. 
The current trend is to build a feature-rich and powerful browser application, 
aka single page app, which sits on top of a micro service architecture. 
Over time the frontend layer, often developed by a separate team, grows and gets more difficult to maintain. 
That’s what we call a Frontend Monolith.

The idea behind Micro Frontends is to think about a website or web app 
as a composition of features which are owned by independent teams. 
Each team has a distinct area of business or mission it cares about and specialises in. 
A team is cross functional and develops its features end-to-end, from database to user interface.

However, this idea is not new. It has a lot in common with the Self-contained Systems concept. 

In the past approaches like this went by the name of Frontend Integration for Verticalised Systems. 
But Micro Frontends is clearly a more friendly and less bulky term.



Let's not get into the theory black hole...


Let's just start some basic practical.


***
We are going to create new app to host the microfrontend.

Command to create microfrontends app
-> npx create-mf-app

select the project type...
host

pick the name of your app...

select the port number...

choose the frontend framework...

choose the language...

choose the styling option...

press the enter button.





▶️ cd host
▶️ npm install
▶️ npm start

***
Repeat the same process to create the remote app in the same directory where host project exists.

Command to create microfrontends app
-> npx create-mf-app

select the project type...
remote

pick the name of your app...

select the port number...

choose the frontend framework...

choose the language...

choose the styling option...

press the enter button.





▶️ cd host
▶️ npm install
▶️ npm start

