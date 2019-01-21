import axios from 'axios';

// Récupération d'un seul admin - OK
export const getOneAdmin = (admin) => {
  axios.get('/admin', admin)
    .then((err, response) => {
      if (err) return err;
      return response;
    });
};

// Vérification si admin déjà présent en DB
// const testExisting = async (admin) => {
//   const adminDB = await getOneAdmin(admin);
//   if (adminDB.length > 0) return true;
//   return false;
// };

// Récupération de tous les adminq - OK
export const getAllAdmins = () => {
  return axios.get('/admin/all')
    .then((err, response) => {
      if (err) return err;
      return response;
    });
};

// Création d'un nouvel admin - OK mais 2ème appel qui fait crasher
export const createAdmin = (newAdmin) => {
  // if (!testExisting(newAdmin)) {
    axios.post('/auth/new', newAdmin)
      .then((response) => {
        if (response.status === 200) window.alert(`Success : ${response.data}`)
        else window.alert(`Arf : ${response.data}`)
      });
  // } else window.alert('Identifiant déjà utilisé');
};

// Suppression d'un admin - OK
export const deleteAdminFromDB = (id) => {
  axios.delete(`/admin/${id}`)
    .then((response) => {
      if (response.status === 200) window.alert("Admin supprimé")
      else window.alert("Erreur lors de la suppression")
    });
};

// Mise à jour d'un admin - Not OK
export const updateAdmin = (newAdmin, id) => {
  axios.put(`/auth/${id}`, { newAdmin, id })
    .then(response => window.alert(response.data));
};

// Connexion
export const connectAdmin = (admin) => {
  return axios.post('/auth/login', admin)
    .then((response) => {
      if (response.status === 200) {
        return ({ message: 'Identification réussie', token: response.data.token });
      }
      return ({ message: 'Erreur lors de l’identification', token: '' });
    });
};
