# Welcome to Microfrontends Mini Tutorial:-

## clone or download
```terminal
    git clone https://github.com/Harihar99/micro-frontends-01.git

```

## Prerequisites
- [Node](https://nodejs.org/en/download/) 
- [npm](https://nodejs.org/en/download/package-manager/)


## Running host frontend
```terminal
    cd host   // go to repository
    npm i       // npm install packages
    npm start
```

## Running remote frontend
```terminal
    cd remote   // go to repository
    npm i       // npm install packages
    npm start
```

# What are microfrontends?

Here we are going to learn some basics of Microfrontends.


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


## Practical
We are going to create new app to host the microfrontend.

Command to create microfrontends app

```bash
    npx create-mf-app
```

select the project type...
host

pick the name of your app...

select the port number...

choose the frontend framework...

choose the language...

choose the styling option...

press the enter button.




```bash
    cd host
    npm install
    npm start
```


***
Repeat the same process to create the remote app in the same directory where host project exists.

Command to create microfrontends app

```bash
    npx create-mf-app
```

select the project type...
remote

pick the name of your app...

select the port number...

choose the frontend framework...

choose the language...

choose the styling option...

press the enter button.





```bash
    cd host
    npm install
    npm start
```


Now add some code of your choice in the remote app.

Here I am creating one new component named as Counter.jsx.

Now we need to expose this code to host. 
For that to happen, We must add those filenames inside the exposes from plugins which is written in webpack.config.js from remote directory.

for example
```
 plugins: [
    new ModuleFederationPlugin({
      name: "remote",
      filename: "remoteEntry.js",
      remotes: {},
      /* See here */
      exposes: {
        "./Counter": "./src/Counter.jsx",
      },
      shared: {
        ...deps,
        "solid-js": {
          singleton: true,
          requiredVersion: deps["solid-js"],
        },
      },
    })
```
Restart the remote app after editing the webpack.

Now now file named remoteEntry.js got created.

check on below url
```
    http://localhost:<remotePortNo>/remoteEntry.js
```

now we need to connect the remote app to the host.
To do that we have to add above link inside the remotes from plugins which is written in webpack.config.js from host directory.


for example
```
    plugins: [
    new ModuleFederationPlugin({
      name: "host",
      filename: "remoteEntry.js",
      /* See here */
      remotes: {
        remote: "remote@http://localhost:3001/remoteEntry.js"
      },
      exposes: {},
      shared: {
        ...deps,
        "solid-js": {
          singleton: true,
          requiredVersion: deps["solid-js"],
        },
      },
    }),
    new HtmlWebPackPlugin({
      template: "./src/index.html",
    }),
  ],
```
Restart the host app after editing the webpack.

Now we can access all the components from the remote app in the host app.

for example
```
    import { render } from "solid-js/web";

    import "./index.scss";
    /* Here we are importing Counter component from remote microfrontend app*/
    import Counter from "remote/Counter";

    const App = () => (
    <div class="mt-10 text-3xl mx-auto max-w-6xl">
        <div>Name: host</div>
        <div>Framework: solid-js</div>
        <div>Language: JavaScript</div>
        <div>CSS: Tailwind</div>
        <br />
        <br />
        <div>Content from remote frontend</div>
        <br />
        <Counter />
    </div>
    );
    render(App, document.getElementById("app"));


```



## Author

- [@harihar99](https://github.com/Harihar99)

