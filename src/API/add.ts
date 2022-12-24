import axios from "axios";
import { API } from "../config/API";



export const getAllPosts = async (page: number) => {
  return API.get(`/kollege/post?page=${page}`).then((res) => res.data);
}


export const getCrops = async () => {
  return API.post('/faqs/getcrops').then((res) => res.data).catch((err) => console.log(err));
}

export const getCategories = async (crop: string) => {
  return API.post('/faqs/getCategories', { crop }).then((res) => res.data).catch((err) => console.log(err));
}

export const getQuestions = async (selectedInfo: object) => {
  return API.post('/faqs/getAllQA', selectedInfo).then((res) => res.data).catch((err) => console.log(err));
}


export const getPDF = async () => {
  return API.get('/agri_reports/getAll').then((res) => res.data).catch((err) => console.log(err));
}

export const getCropNormGategories = async () => {
  return API.get('/cropinfo/crop_norms/categories').then((res) => res.data).catch((err) => console.log(err));
}

export const getCropInfo = async (category: string) => {
  return API.post('/cropinfo/crop_norms/crops', { cropfamily: category }).then((res) => res.data).catch((err) => console.log(err));
}

export const getAgripediaPDF = async (pdf: string) => {
  return API.get(`/agreePedia/getDocs?doc=${pdf}`)
}


export const postSample = async (location: string, sampleData: object) => {
  let formData = new FormData();
  formData.append('location', location);
  formData.append('Image', sampleData.image);
  formData.append('description', sampleData.message);
  formData.append('userId', sampleData.userId);
  return API.post('/plant_analysis/submit', formData);
}


export const getCItyNames = async () => {
  return API.get('/mandiRates/cities')
}

export const getCropsByCityName = async (city: string) => {
  return API.post('/mandiRates/crops', { city }).then((res) => res.data).catch((err) => console.log(err));
}

export const getMandiRates = (city: string, crop: string) => {
  return API.post('/mandiRates/rates', { city, crop }).then((res) => res.data).catch((err) => console.log(err));
}

export const getAlerts = async () => {
  return API.get('/alerts/alerts').then((res) => res.data).catch((err) => console.log(err));
}

export const getNotifications = async ({ user_id }: { user_id: number }) => {
  return API.post('/notificationjob/userid', { user_id }).then((res) => res.data).catch((err) => console.log(err));
}

export const postSampleAnalysis = async (sampleData: object) => {
  return API.post('/soiltest/submit_sample', sampleData)
}

export const getReport = async () => {
  return API.get('/soiltest/getReport?userID=17')
}

export const postSupportTicket = async (data: object) => {
  let formData = new FormData();
  formData.append('user_id', data.userid);
  formData.append('title', data.name);
  formData.append('message', data.text);
  formData.append('Image', data.file);
  formData.append('phone_number', data.phone);
  formData.append('email', data.email);
  formData.append('location', data.location);
  return API.post('/ticket/submitticket', formData)
}

export const postCropRecord = async (user_id, crop, season, latitude, longitude, sowing_date, land_id, variety_name, srange, erange, sowing_method) => {
  return API.post('/cropRecord/add', { user_id, crop, season, latitude, longitude, sowing_date, land_id, variety_name, srange, erange, sowing_method })
}

export const postCheckbox = async (record_id, preparation_id) => {

  let registerData = new FormData();
  registerData.append('record_id', record_id);
  registerData.append('preparation_id', preparation_id);

  return axios.post('https://agronomics.pk/legacy_api/insert_checkbox',registerData, {
    headers: {
      "Greenage": "5e306c70c4cc37211fae9044c927e1af3ebb3404",
    },
  })
}

export const deleteLand = async (id, userID) => {
  return API.get(`/landrecord/deleteLand?id=${id}&userID=${userID}`)
}

export const getLandData = async (latlng) => {
  return axios.get(`https://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyAS8MyZQtm7vnW1zXTHAZtIy61nMDLbHrg&language=eng&latlng=${latlng}`)
}