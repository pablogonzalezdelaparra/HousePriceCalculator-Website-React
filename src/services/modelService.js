import { FLASK_BASE_URL } from "../config";

export async function getPrediction() {

    bodyParameterData = {
        LotArea: "2345",
        TotalBsmtSF: "2345",
        YearBuilt: "12345",
        GrLivArea: "2345",
        BsmtFullBath: "2345",
        HalfBath: "2345",
        KitchenAbvGr: "23456",
        Fireplaces: "23456",
        GarageCars: "23456",
        ScreenPorch: "23456",
        WoodDeckSF: "2345",
        BsmtExposure: "Sin exposición",
        MSZoning: "MSZoning_RL",
        Neighborhood: "Neighborhood_NridgHt",
        Condition1: "Condition2_PosA",
        BldgType: "-1",
        Exterior1st: "Exterior1st_MetalSd",
        Foundation: "Foundation_Wood",
        Heating: "Foundation_Wood",
        Functional: "Functional_Min2",
        SaleType: "SaleType_WD",
        RoofMatl: "-1",
        CentralAir: "1",
        LotConfig_Inside: "1",
        Exterior2nd_BrkFace: "1",
        LandSlope_Sev: "0",
        Electrical_SBrkr: "0",
        GarageType_2Types: "1",
        SaleCondition_Normal: "1"
    }
  const validatePrediction = await fetch(`${FLASK_BASE_URL}/model/getPrediction`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(parameterBodyData),
  }).then(async (response) => {
    const data = await response.json();
    return data;
  });
  return validatePrediction;
}