import { model } from 'mongoose';
import ListaDAO from '../dao/lista.dao.js';

export const getAll = (req, res) => {
    ListaDAO.getAll()
        .then((listas) => {
            res.json(listas);
        })
        .catch((err) => {
            res.status(500).json({ status: "Error", message: err.message });
        });
};

export const getOne = (req, res) => {
    ListaDAO.getOne(req.params.code)
        .then((lista) => {
            if (lista != null)
                res.json(lista);
            else
                res.status(404).json({ status: "List not found" });
        })
        .catch(err => res.status(500).json({ status: "Server unavailable", message: err.message }));
};

export const insertLista = (req, res) => {
    ListaDAO.insertLista(req.body)
        .then(result => {
            if (result)
                res.status(201).json(result);
        })
        .catch(err => res.status(500).json({ status: "Server unavailable", message: err.message }));
};

export const updateLista = (req, res) => {
    ListaDAO.updateLista(req.params.code, req.body)
        .then(lista => {
            if (lista)
                res.json(lista);
            else
                res.status(404).json({ status: "List not found" });
        })
        .catch(err => {
            res.status(500).json({ status: "Server unavailable", message: err.message });
        });
};

export const deleteLista = (req, res) => {
    ListaDAO.deleteLista(req.params.code)
        .then(lista => {
            if (lista)
                res.json(lista);
            else
                res.status(404).json({ status: "List not found" });
        })
        .catch(err => {
            res.status(500).json({ status: "Server unavailable", message: err.message });
        });
};
