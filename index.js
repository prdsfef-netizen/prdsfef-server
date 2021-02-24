const { ApolloServer } = require("apollo-server");
const mongoose = require("mongoose");
const typeDefs = require("./gql/schema");
const resolvers = require("./gql/resolver");

require("dotenv").config({ path: ".env" });

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.BBDD, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
    });

    console.log("MongoDB conectado!!");
  } catch (err) {
    console.log("La conexio a MongoDB fallo", err);
  }
};
const Server = async() =>{
  try {
    const ServerApollo = new ApolloServer({
      typeDefs,
      resolvers,
    });
    await ServerApollo.listen().then(({ url }) => {
      console.log(`Servidor listo en la url ${url} `);
    });
  } catch (error) {
    console.log("La conexio a servidor fallo", err);
  }
}
connectDB();
Server();
