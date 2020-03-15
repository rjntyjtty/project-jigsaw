# Project Jigsaw
## CSCC09 Project Proposal

### Project name: Jigsaw

### Team members:
- David (Sheng Wei) Cui - 1004267553 - cuisheng
- Nicholas Wong - 1004207388 - wongni21
- Carrie (Chuyun) Zhong - 1004396904 - zhongc13

### Description of Web Application

Project Jigsaw will be a content management platform where creators will upload and share content for users of the app to enjoy. As a goal, as many types of content should be supported as possible to allow for the highest amount of creativity and freedom to be given to the creators. Creator groups should be supported as well to allow for collaborative content creation.

### Key Features to be completed by Beta Version
- Account login
- Content upload
- Users can subscribe to content creators and see subscribed content in their feed
- Content creators can add tags to describe themselves and add tags to their content
- Comments can be created by users to provide feedback on content
- Users can search for tags to find content

### Additional features to be completed in final version
- Users can make and add/delete from collections
- Users can decide to allow comments by other users on their collections (extra)
- users can attach tags to their collections
- Comments can be targeted to a specific part of the content
- Allow in-app editing for text content

### Description of technology we will use
- React framework for frontend
- Node express backend
- Nedb for now, may change later
- Image, video, etc encoding libraries
- https://material-ui.com/

### Top 5 technical challenges
- Targeting comments to parts of content
- Appealing frontend UI that suits different file types
- Encoding for many different file types
- Making a relevant content feed for each user
- Learning React

--------------------------------------------------------------------------------
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm install`

Installs the dependencies.
Make sure to run this in both "/" and "/client"

Download MongoDB the first time from https://docs.mongodb.com/manual/tutorial/install-mongodb-on-windows/

Run MongoDB every time:
### cd '.\Program Files\MongoDB\Server\4.2\bin\'
### .\mongo.exe

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
Make sure to run this in both "/" and "/client"

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
