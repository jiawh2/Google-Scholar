const  express  =  require('express');
const ExpressGraphQL = require("express-graphql");
const schema = require("./graphql/post/post.js");
const  app  =  express();
const cors = require('cors')

app.use(cors())

app.use("/graphql", ExpressGraphQL({ schema: schema.schema, graphiql: true}));

app.get('/', function (req, res) {
    res.render('index', {});
  });

app.listen(4000, () => {
    console.log("GraphQL server running at http://localhost:4000.");
});