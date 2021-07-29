import axios from "axios";

const BlazeService = axios.create({
    // baseURL: "http://localhost:8080/",
    baseURL: "https://blaze-services.herokuapp.com/",
});

export default BlazeService;