const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require("dotenv");
const cors = require('cors');
const { default: mongoose } = require('mongoose');

const app = express();
dotenv.config()

app.use(cors());
app.use(bodyParser.json());
const PORT = 5000;
const p = process.env.PSWRD;

const uri = `mongodb+srv://anshumanprasad1010:${p}@clusterapmongo.5bmrmpd.mongodb.net/tree?retryWrites=true&w=majority`;
const clientOptions = { serverApi: { version: '1', strict: true, deprecationErrors: true } };
mongoose.connect(uri, clientOptions);

const Schema = mongoose.Schema;

let treeSchema = new Schema({
    name: {
    type: String,
  },
  parentName: {
    type: String,
  },
  childrenNames: [{type: String}],
});

const Tree = mongoose.model("family", treeSchema);

app.post('/data', async (req, res) => {
  try {
    console.log(req.body);
    const result = await Tree.deleteMany({});
    console.log(result);
    req.body.forEach(element =>{ const t = new Tree({
            name: element.name,
            parentName: element.parentName,
            childrenNames: element.childrenNames
        });
        const val = t.save().then(data=>console.log(data)).catch(err => console.log(err));
        });
    res.send(`Data stored successfully.`);
  } 
  catch(error) {
    console.log(error);
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
