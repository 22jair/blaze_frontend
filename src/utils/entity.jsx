export const paginateParamsInitialValues = {
  pageNumber: 0,
  pageSize: 4,
  sortBy: "id",
  orderBy: 0,
  category: null,
  name: null,
  customer: null,
  status: null
};

export const paginateRequestInitialValues = {
  totalItems: 0,
  paginate: { totalPages: 1 },
};

export const productInitialValues = {
  id: "",
  name: "",
  category: "Cookies",
  unitPrice: 0,
  status: true,
};

export const orderInitialValues = {
  id: "",
  orderNumber: 0,
  status: 'Pending',
  date: "",
  customer: "",
  subTotal: 0.0,
  totalTaxes: 0.0,
  totalAmount: 0.0,
  taxes:{
    cityTax: 0.00,
    countryTax: 0.00,
    stateTax: 0.00,
    federalTax: 0.00,
  },
  productOrderList: []
};
