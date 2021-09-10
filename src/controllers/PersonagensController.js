const Personagem = require("../models/Personagem");

const getAll = async (req, res) => {
  try {
    const personagens = await Personagem.find();
    return res.send({ personagens });
  } catch (err) {
    res.status(500).send({ error: err });
  }
};

const getById = async (req, res) => {
  const { id } = req.params;

  try {
    const personagem = await Personagem.findById(id);
    if (!personagem) {
      res.status(404).json({ message: "Personagem não encontrado" });
      return;
    }
    return res.send({ personagem });
  } catch (err) {
    res.status(500).send({ error: err });
  }
};

const create = async (req, res) => {
  const { nome, genero, profissao, imagem } = req.body;

  if (!nome || !genero || !profissao || !imagem) {
    res.status(400).send({
      message: "Você não enviou todos os dados necessários para o cadastro",
    });
    return;
  }

  const novoPersonagem = await new Personagem({
    nome,
    genero,
    profissao,
    imagem,
  });

  try {
    await novoPersonagem.save();
    return res
      .status(201)
      .send({ message: "Personagem criado com sucesso", novoPersonagem });
  } catch (err) {
    res.status(500).send({ error: err });
  }
};

const update = async (req, res) => {
  const { nome, genero, profissao, imagem } = req.body;

  if (!nome || !genero || !profissao || !imagem) {
    res.status(400).send({
      message: "Você não enviou todos os dados necessários para o cadastro",
    });
    return;
  }

  res.personagem.nome = nome
  res.personagem.genero = genero
  res.personagem.profissao = profissao
  res.personagem.imagem = imagem

  try {
      await res.personagem.save();
      res.send({message: "Personagem alterado com sucesso!"})

  } catch (err) {
      res.status(500).send({ error: err})
  }

};

const del = async (req, res) => {
    try {
        await res.personagem.remove()
        return res.send({ message: "Personagem removido com sucesso!"})
    } catch (err) {
        res.status(500).send({ error: err})
    }
}

module.exports = {
  getAll,
  getById,
  create,
  update,
  del
};
