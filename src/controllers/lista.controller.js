import ListaDAO from '../dao/lista.dao.js';

export const getAll = (req, res) => {
    ListaDAO.getAll()
        .then((lists) => {
            res.json(lists);
        })
        .catch((err) => {
            res.status(500).json({ status: "Error", message: err.message });
        });
};

export const getOne = (req, res) => {
    ListaDAO.getOne(req.params._id)
        .then((list) => {
            if (list != null)
                res.json(list);
            else
                res.status(404).json({ status: "List not found" });
        })
        .catch(err => res.status(500).json({ status: "Server unavailable", message: err.message }));
};

export const insertList = (req, res) => {
    ListaDAO.insertList(req.body)
        .then(result => {
            if (result)
                res.status(201).json(result);
        })
        .catch(err => res.status(500).json({ status: "Server unavailable", message: err.message }));
};

export const updateList = (req, res) => {
    const updatedList = req.body;

    ListaDAO.updateList(req.params._id, updatedList)
        .then(list => {
            if (list)
                res.json(list);
            else
                res.status(404).json({ status: "List not found" });
        })
        .catch(err => {
            res.status(500).json({ status: "Server unavailable", message: err.message });
        });
};

export const deleteList = (req, res) => {
    ListaDAO.deleteList(req.params._id)
        .then(list => {
            if (list)
                res.json(list);
            else
                res.status(404).json({ status: "List not found" });
        })
        .catch(err => {
            res.status(500).json({ status: "Server unavailable", message: err.message });
        });
};
