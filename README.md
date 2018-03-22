# Period2 Node.js, Express + JavaScript Backend Testing and Express Security

This document will give detailed learning goals for period-2, but basically after this period you are expected to could:

•	Use Express with a sufficient engine to create server side generated pages (similar to JSP on 2. semester)

•	Use Express middleware to interact with the request and response objects (similar to Servlet/JAX-rs filters)

•	Use Express with sessions (after period two, using a separate database as session store) (similar to Servlet sessions)

•	Test backend server code with Mocha and Chai (similar to jUnit, and REST Assured on 3. semester)

•	Implement a REST API with node and Express (Similar to JAX-rs on 3. semester)

•	Implement basic security features for a node/Express server (which we actually never really covered be-fore)

•	Deploy a Node server using a process manager (similar to what we did on 3. semester)

So when you are done with this period, you can do everything (more), web-related, in JavaScript that you learned with Java on 2. and 3. semester ;-)

Detailed Learning Goals:

Q: Why would you consider a Scripting Language as JavaScript as your Backend Platform?

A: JavaScript runtime environments (web browsers) are also widely available on many platforms. 
     That makes JavaScript a good backend  platform.
     
Q: Explain Pros & Cons in using Node.js + Express to implement your Backend compared to a strategy using    
      for example Java/JAX-RS/Tomcat 
      
A: 
•	Easy to learn:
Nearly every front-end developer is familiar with this universal language. Therefore, it is much easier for them to switch to using Node.js at the back-end.

•	Freedom to build and learn:

Node.js is completely unopinionated, meaning you start building everything from scratch.

Q: Node.js uses a Single Threaded Non-blocking strategy to handle asynchronous task. Explain strategies to implement a Node.js based server architecture that still could take advantage of a multi-core Server.

Explain briefly how to deploy a Node/Express application including how to solve the following deploy-ment problems:

•	Ensure that you Node-process restarts after a (potential) exception that closed the application

•	Ensure that you Node-process restarts after a server (Ubuntu) restart

•	Ensure that you can take advantage of a multi-core system

•	Ensure that you can run “many” node-applications on a single droplet on the same port (80)

Explain, using relevant examples, concepts related to testing a REST-API using Node/JavaScript + relevant packages 

Explain, using relevant examples, the Express concept; middleware.

Explain, using relevant examples, how to implement sessions, and the legal implications of doing this.

Explain (conceptually) how you would handle sessions if you run your app in clusters to solve some of problems related to deployment.

Compare the express strategy toward (server side) templating with the one you used with Java on second semester.

Demonstrate a simple Server Side Rendering example using a technology of your own choice.

Explain, using a relevant examples, your strategy for implementing a REST-API with Node/Express and show how you can "test" all the four CRUD operations programmatically using for example the Request package.

Explain, using relevant examples, about testing JavaScript code, relevant packages (Mocha etc.) and how to test asynchronous code.

Explain, using relevant examples, different ways to mock out databases, HTTP-request etc.

Basic Web Security

How can we "prevent" third party code used, in or nodeJS applications, from injecting dangerous code into our code base?

Explain the basics of the Passport authentication framework, and demonstrate how to use it with Pass-port-local.

Explain about Node tools like Helmet and nsp (the Node Security Project). What do they do, and how have you used them.
