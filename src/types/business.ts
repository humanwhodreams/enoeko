export type business = {
  image: string;
  name: string;
  address: string;
  description: string;
  contact: {
    email: string;
    phone: string;
  };
  category: string;
};

export type _business = {
  image: string;
  name: string;
  description: string,
  shipping: {
    address: string;
    contact: {
      email: string;
      phone: string;
    };
  };
  category: string;
};
