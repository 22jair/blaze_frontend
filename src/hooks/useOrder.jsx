import { useState, useEffect } from "react";
import { orderInitialValues } from "./../utils/entity";
import BlazeService from "../service/BlazeService";

const useOrder = () => {
  const [state, setState] = useState(orderInitialValues);

  useEffect(() => {
    generateTaxes();
  }, [state.productOrderList]);

  const addItem = ({ product, quantity }) => {
    if (Object.keys(product).length === 0) return false;
    if (quantity === 0) return false;

    let currentItem = { product, quantity };
    currentItem.productOrderNumber = state.productOrderList.length + 1;
    currentItem.cost = currentItem.product.unitPrice * currentItem.quantity;

    setState({
      ...state,
      subTotal: state.subTotal + currentItem.cost,
      productOrderList: [...state.productOrderList, currentItem],
    });
  };

  const removeItem = (payload) => {
    setState({
      ...state,
      subTotal: state.subTotal - payload.cost,
      productOrderList: state.productOrderList.filter(
        (item) => item.productOrderNumber !== payload.productOrderNumber
      ),
    });
  };

  const addCustomer = (payload) => {
    setState({
      ...state,
      customer: payload,
    });
  };

  // Fetch
  const saveOrder = async (isEdit = false, item) => {
    let request = false;

    if (isEdit) {
      let currentOrder = { ...state };
      item.cost = item.product.unitPrice * item.quantity;
      currentOrder = {
        ...state,
        productOrderList: [
          ...state.productOrderList.filter(
            (i) => i.product.id !== item.product.id
          ),
          item,
        ],
      };
      console.log(currentOrder);
      request = await BlazeService.put("order", currentOrder);
    } else {
      request = await BlazeService.post("order", state);
    }
    return request;
  };

  // Fetch
  const updateStatus = async (status) => {
    const currentOrden = { ...state, status };
    const request = await BlazeService.put("order/status", currentOrden);
    return request;
  };

  // Fetch
  const deleteItem = async (item) => {
    console.log(item);
    const request = await BlazeService.delete(
      `order/item?idOrder=${state.id}&idProductOrder=${item.id}`
    );
    return request;
  };

  // Fetch
  const ServiceAddItem = async (item) => {
    let currentOrder = { id: state.id, productOrderList: [item] };
    console.log(currentOrder);
    let request = await BlazeService.post("order/item", currentOrder);
    return request;
  };

  const generateTaxes = () => {
    let totalTaxes = 0;
    //Taxes
    let cityTax = twoDecimals(state.subTotal * 0.1); // 10%
    totalTaxes += cityTax;
    let countryTax = twoDecimals((state.subTotal + totalTaxes) * 0.05); // 5%
    totalTaxes += countryTax;
    let stateTax = twoDecimals((state.subTotal + totalTaxes) * 0.08); // 8%
    totalTaxes += stateTax;
    let federalTax = twoDecimals((state.subTotal + totalTaxes) * 0.02); // 2%
    totalTaxes += federalTax;
    setState({
      ...state,
      totalTaxes: twoDecimals(totalTaxes),
      taxes: { cityTax, countryTax, stateTax, federalTax },
    });
  };

  const setOrder = (order) => setState(order);

  const clearOrder = () => setState(orderInitialValues);

  const twoDecimals = (n) => parseFloat(n.toFixed(2));

  return {
    addItem,
    removeItem,
    addCustomer,
    saveOrder,
    clearOrder,
    setOrder,
    updateStatus,
    deleteItem,
    ServiceAddItem,
    state,
  };
};

export default useOrder;
