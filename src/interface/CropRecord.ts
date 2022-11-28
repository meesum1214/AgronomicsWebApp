
export interface SuitableCrop {
  "crop": "Wheat",
  "diff": "+157",
  "image": "https://greenageservices.pk/assets/gallery/wheat.png",
  "family": "Cereal Crops",
  "season": "Rabbi",
  "e_range": "11-20",
  "s_range": "10-20",
  "province": "Punjab",
  "crop_urdu": "گندم",
  "sowing_day": number,
  "crop_varities": Variety[]
}

export interface Variety {
  "id": string,
  "added_by":string,
  "maturity": string,
  "added_date": string,
  "germination": string,
  "seed_source": string,
  "seed_weight": string,
  "updated_date": string,
  "varieties_id": string,
  "varieties_eng": string,
  "varities_type": string,
  "varieties_urdu": "چکوال-50"
}