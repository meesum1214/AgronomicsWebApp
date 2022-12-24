import { API } from "../config/API"
export const getLandRecord = (userid: number, page: number) => {
  return API.get('/landrecord/get?page=1', {
    params: {
      uid: userid,
    },
  })
}

export const addLandRecord = (user_id: string, name: string, size: string, address: string, province: string, district: string, tehsil: string, location: string, geometry: string) => {
  return API.post('/landrecord/add', {
    user_id,
    name,
    size,
    address,
    province,
    district,
    tehsil,
    location,
    geometry
  })
}