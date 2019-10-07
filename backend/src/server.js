const express = require ('express');
const mongoose = require ('mongoose');
const cors = require ('cors');

const routes = require('./routes/routes');

const app = express();

mongoose.connect('mongodb+srv://omnistack:omnistack@omnistack-egwl1.mongodb.net/bancoteste?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
app.use(cors());
// app.use(cors({ origin: 'http://localhost:3333' }));
app.use(express.json());
app.use(routes);

app.listen(3333);