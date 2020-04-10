let data = [
  {
    id: 1,
    user: "Bryan Echegoyen",
    product: "Pañales",
    quantity: 3,
  },
  {
    id: 2,
    user: "Roberto Soto",
    product: "Cuna",
    quantity: 1,
  },
  {
    id: 3,
    user: "Yasna Rozas",
    product: "Toallas Humedas",
    quantity: 7,
  },
  {
    id: 4,
    user: "Roberto Paolo",
    product: "Mitones",
    quantity: 2,
  },
];

const list = (req, res) => {
  res.json(data);
};

const find = (req, res) => {
  const result = data.find((product) => product.id === parseInt(req.params.id));
  if (!result) {
    res.status(404).send("No existe el producto");
    return;
  }
  res.json(result);
};

const save = (req, res) => {
  const newId = data.length;
  const newProduct = {
    id: newId,
    user: req.body.user,
    product: req.body.product,
    quantity: req.body.quantity,
  };
  data.push(newProduct);
  res.send(newProduct);
};
const save2 = (req, res) => {
  const newId = data.length;
  if (!req.body.user || req.body.user.length < 10) {
    res.status(404).send("error !!! el body viene vacio.");
    return;
  }
  const newProduct = {
    id: newId,
    user: req.body.user,
    product: req.body.product,
    quantity: req.body.quantity,
  };
  data.push(newProduct);
  res.send(newProduct);
};

const save3 = (req, res) => {
  const newId = data.length;
  const newProduct = {
    id: newId,
    user: req.body.user,
    product: req.body.product,
    quantity: req.body.quantity,
  };
  data.push(newProduct);
  res.send(newProduct);
};

const update = (req, res) => {
  const id = req.params.id || null;

  const product = data.find((product) => product.id === parseInt(id));
  if (!product) {
    res.status(404).send("No existe el producto.");
    return;
  }
  product.user = req.body.user;
  product.product = req.body.product;
  product.quantity = req.body.quantity;
  res.status(204).send();
};

const erase = (req, res) => {
  const product = data.find(
    (product) => product.id === parseInt(req.params.id)
  );
  if (!product) {
    res.status(404).send("No existe el producto.");
    return;
  }

  const index = data.indexOf(product);
  data.splice(index, 1);
  res.status(200).send("Borrado");
};

module.exports = {
  list,
  find,
  save,
  save2,
  save3,
  update,
  erase,
};
