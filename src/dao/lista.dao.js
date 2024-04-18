import Lista from '../models/lista.model.js';

const ListaDAO = {};

ListaDAO.getAll = async () => {
    try {
        const listas = await Lista.find();
        return listas;
    } catch (err) {
        throw err;
    }
};

ListaDAO.getOne = async (cd) => {
    try {
        const lista = await Lista.findOne({ code: cd });
        return lista;
    } catch (err) {
        throw err;
    }
};

ListaDAO.insertLista = async (lista) => {
    try {
        const listaSaved = new Lista(lista);
        await listaSaved.save();
        return true;
    } catch (err) {
        throw err;
    }
};

ListaDAO.updateLista = async (cd, lista) => {
    try {
        const listaUpdated = await Lista.findOneAndUpdate({ code: cd }, lista, { new: true });
        if (listaUpdated) return true;
        else return false;
    } catch (err) {
        throw err;
    }
};

ListaDAO.deleteLista = async (cd) => {
    try {
        const listaDeleted = await Lista.findOneAndDelete({ code: cd });
        if (listaDeleted) return true;
        else return false;
    } catch (err) {
        throw err;
    }
};

export default ListaDAO;
