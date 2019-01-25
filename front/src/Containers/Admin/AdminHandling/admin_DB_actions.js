import axios from 'axios';

// Récupération d'un seul admin - OK
export const getOneAdmin = (admin) => {
  axios.get('/api/admin', admin)
    .then((err, response) => {
      if (err) return err;
      return response;
    });
};

// Création d'un nouvel admin - OK mais 2ème appel qui fait crasher
export const createAdmin = (newAdmin) => {
  axios.post('/api/auth/new', newAdmin)
    .then((response) => {
      if (response.status === 200) window.alert(`Success : ${response.data}`)
      else window.alert(`Arf : ${response.data}`)
    });
};

// Suppression d'un admin - OK
export const deleteAdminFromDB = (id) => {
  axios.delete(`/api/admin/${id}`)
    .then((response) => {
      if (response.status === 200) window.alert("Admin supprimé")
      else window.alert("Erreur lors de la suppression")
    });
};

// Mise à jour d'un admin - OK
export const updateAdmin = (newAdmin, id) => {
  axios.put(`/api/auth/${id}`, { newAdmin, id })
    .then(response => window.alert(response.data));
};

// Connexion
export const connectAdmin = (admin) => {
  console.log("newAdmin", admin);
  return axios.post('/api/auth/login', admin)
    .then((response) => {
      if (response.status === 200) {
        return ({ message: 'Identification réussie', token: response.data.token });
      }
      return ({ message: 'Erreur lors de l’identification', token: '' });
    });
};
