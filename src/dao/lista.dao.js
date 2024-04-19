import Lista from '../models/lista.model.js';

const ListaDAO = {};

ListaDAO.getAll = async () => {
    try {
        const lists = await Lista.find();
        return lists;
    } catch (err) {
        throw err;
    }
};

ListaDAO.getOne = async (_id) => {
    try {
        const list = await Lista.findOne({ _id: _id });
        return list;
    } catch (err) {
        throw err;
    }
};

ListaDAO.insertList = async (list) => {
    try {
        const listSaved = new Lista(list);
        await listSaved.save();
        return true;
    } catch (err) {
        throw err;
    }
};

ListaDAO.updateList = async (_id, list) => {
    try {
        const listUpdated = await Lista.findOneAndUpdate({ _id: _id }, list, { new: true });
        if (listUpdated) return true;
        else return false;
    } catch (err) {
        throw err;
    }
};

ListaDAO.deleteList = async (_id) => {
    try {
        const listDeleted = await Lista.findOneAndDelete({ _id: _id });
        if (listDeleted) return true;
        else return false;
    } catch (err) {
        throw err;
    }
};

export default ListaDAO;
