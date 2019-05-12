export default class Customer {
  constructor(
    id,
    firstName,
    lastName,
    email,
    phone,
    address,
    city,
    postcode,
    uid
  ) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.phone = phone;
    this.address = address;
    this.city = city;
    this.postcode = postcode;
    this.uid = uid;
  }
}
