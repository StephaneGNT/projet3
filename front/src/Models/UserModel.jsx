class UserModel {
  constructor(firstName, lastName, email, cellPhone) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.cellPhone = cellPhone;
    this.order = [{}];
  }
}

export default UserModel;
