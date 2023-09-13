import { FLASK_BASE_URL } from "../config";

export async function getPrediction(parameterInfo) {
  const bodyParameterData = {
    LotArea: parameterInfo.LotArea,
    YearBuilt: parameterInfo.YearBuilt,
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
