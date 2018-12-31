# airWorldwidTestProject
Repository for test project for air worldwide

This repository contains two main folders:
  - airTestClient folder contains Angular 6 project; Angular material is used as UI framework to render components.
  - airTestServer folder contains Node JS 8.12.0 project; Express is used as web server. Babel is used as transpilation engine.
  
  In order for this solution to work you will need to have node installed along with express and babel. On the client side you will need to have angular/cli with web-animations.
  
 Angular project is implemented using mvvm architecture. When you will open it you will see under src/app folder three subfolders: 
 - views - contains html and css for components;
 - viewModels - contains code behind UI logic for views (ui components);
 - models - contains business logic and web server access components.
 
 Node project is build around dependency injection pattern where each injected with Config component which in turn implements service locator pattern.
 
Angular frontend uploads file to the Node express through the rest end point: "api/file". In Angular URL to the Node express is configured through the file in src/app/config.json. In that file you will see two entries "fileUploadUrl" and "uploadedFilesUrl". Second one is not used yet but the first one you should configure to whatever url express will be running under.
  
 Everything is implemented except of history page, it is almost implemented on the backend, but just didn't have time to hook it up with angular on frontend. Also progress bar hasn't been added, I use dialog box instead. Other than that everything works.
 
 Last thing I want to say is that this teting project got me hooked up on Angular and Node, really cool stuff finally you can build SOLID javascript based applications :).
