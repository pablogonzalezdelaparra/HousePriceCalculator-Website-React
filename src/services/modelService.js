import { FLASK_BASE_URL } from "../config";

export async function getPrediction(parameterInfo) {
  const bodyParameterData = {
    LotArea: parameterInfo.LotArea,
    YearBuilt: parameterInfo.YearBuilt,
    YearRemodAdd: parameterInfo.YearRemodAdd,
    BsmtExposure: parameterInfo.BsmtExposure,
    BsmtFinSF1: parameterInfo.BsmtFinSF1,
    TotalBsmtSF: parameterInfo.TotalBsmtSF,
    CentralAir: parameterInfo.CentralAir,
    GrLivArea: parameterInfo.GrLivArea,
    BsmtFullBath: parameterInfo.BsmtFullBath,
    HalfBath: parameterInfo.HalfBath,
    KitchenAbvGr: parameterInfo.KitchenAbvGr,
    Fireplaces: parameterInfo.Fireplaces,
    GarageCars: parameterInfo.GarageCars,
    WoodDeckSF: parameterInfo.WoodDeckSF,
    ScreenPorch: parameterInfo.ScreenPorch,
    MSZoning: parameterInfo.MSZoning,
    LotConfig_Inside: parameterInfo.LotConfig_Inside,
    LandSlope_Sev: parameterInfo.LandSlope_Sev,
    Neighborhood: parameterInfo.Neighborhood,
    Condition1: parameterInfo.Condition1,
    BldgType: parameterInfo.BldgType,
    RoofMatl: parameterInfo.RoofMatl,
    Exterior1st: parameterInfo.Exterior1st,
    Exterior2nd_BrkFace: parameterInfo.Exterior2nd_BrkFace,
    Foundation: parameterInfo.Foundation,
    Heating: parameterInfo.Heating,
    Electrical_SBrkr: parameterInfo.Electrical_SBrkr,
    Functional: parameterInfo.Functional,
    GarageType_2Types: parameterInfo.GarageType_2Types,
    SaleType: parameterInfo.SaleType,
    SaleCondition_Normal: parameterInfo.SaleCondition_Normal,
  };

  const bodyParameterDataTest = {
    'LotArea': '10990', 
    'YearBuilt': '2007', 
    'YearRemodAdd': '2007', 
    'BsmtExposure': 'Gd',
    'BsmtFinSF1': '1500', 
    'TotalBsmtSF': '2000', 
    'CentralAir': '1', 
    'GrLivArea': '1900', 
    'BsmtFullBath': '1', 
    'HalfBath': '2', 
    'KitchenAbvGr': '1', 
    'Fireplaces': '1', 
    'GarageCars': '4', 
    'WoodDeckSF': '250', 
    'ScreenPorch': '0', 
    'MSZoning': 'MSZoning_RM', 
    'LotConfig_Inside': '1', 
    'LandSlope_Sev': '0', 
    'Neighborhood': 'Neighborhood_MeadowV', 
    'Condition1': 'Condition1_Feedr', 
    'BldgType': '-1', 
    'RoofMatl': 'RoofMatl_CompShg', 
    'Exterior1st': 'Exterior1st_BrkFace', 
    'Exterior2nd_BrkFace': '0', 
    'Foundation': 'Foundation_BrkTil',
    'Heating': '-1', 
    'Electrical_SBrkr': '1', 
    'Functional': 'Functional_Min1', 
    'GarageType_2Types': '0', 
    'SaleType': 'SaleType_COD',
    'SaleCondition_Normal': '1'
  }

  console.log(bodyParameterData)
  const validatePrediction = await fetch(
    `${FLASK_BASE_URL}/model/getPrediction`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bodyParameterData),
    }
  ).then(async (response) => {
    const data = await response.json();
    return data;
  });
  return validatePrediction;
}
