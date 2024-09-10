/** @format */

interface usersT {
  id: 1;
  name: String;
  username: String;
  email: String;
  address: {
    street: String;
    suite: String;
    city: String;
    zipcode: String;
    geo: {
      lat: Number;
      lng: Number;
    };
  };
  phone: String;
  website: String;
  company: {
    name: String;
    catchPhrase: String;
    bs: String;
  };
}
