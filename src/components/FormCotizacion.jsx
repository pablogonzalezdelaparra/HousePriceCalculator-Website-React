import React, { Fragment, useState, useMemo } from "react";
import FormCotizacionStyle from "../styles/FormCotizacionStyle.css";
import {
  TextInputField,
  SelectField,
  Group,
  Button,
  Tooltip,
  InfoSignIcon,
} from "evergreen-ui";
import { BiArrowToRight } from "react-icons/bi";
import { getPrediction } from "../services/modelService";
import { toast } from "react-toastify";

function FormCotizacion() {
  const [loading, setLoading] = useState(false);
  const [selectedValue, setSelectedValue] = React.useState("daily"); // Se modificará con los valores que se requieran
  const [formData, setFormData] = useState({
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
  });
  const [price, setPrice] = useState(0);
  const [priceData, setPriceData] = useState(false);

  const enviarCotizacion = () => {
    toast.promise(
      async () => {
        const modelResponse = await getPrediction(formData);
        if (
          modelResponse.prediccion === null ||
          modelResponse.prediccion === ""
        ) {
          throw new Error("Error al generar una predicción");
        }
        setPrice(modelResponse.prediccion);
      },
      {
        error: "Error al cargar el modelo",
      },
      {
        pauseOnFocusLoss: false,
        autoClose: 3000,
        pauseOnHover: false,
      }
    );
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setPriceData(true);
    }, 4000);
  };

  const options = React.useMemo(
    () => [
      { label: "Si", value: "1" },
      { label: "No", value: "0" },
    ],
    []
  );

  const options_3 = React.useMemo(
    () => [
      { label: "Si", value: "1" },
      { label: "No", value: "0" },
    ],
    []
  );

  const options_4 = React.useMemo(
    () => [
      { label: "Si", value: "1" },
      { label: "No", value: "0" },
    ],
    []
  );

  const options_5 = React.useMemo(
    () => [
      { label: "Si", value: "1" },
      { label: "No", value: "0" },
    ],
    []
  );

  const options_6 = React.useMemo(
    () => [
      { label: "Si", value: "1" },
      { label: "No", value: "0" },
    ],
    []
  );

  const options_2 = React.useMemo(
    () => [
      { label: "Normal", value: "1" },
      { label: "Abnormal", value: "0" },
    ],
    []
  );
  return (
    <Fragment>
      <div className="main-container">
        <div className="form-container">
          {priceData ? (
            <div className="form-body form-price">
              <p className="form-title">Tu cotización es de:</p>
              {/* round to 2 decimals */}
              <p className="form-price">${Number(Math.exp(price)).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>
              <div
                className="price-button"
                onClick={() => {
                  setPriceData(false);
                }}
              >
                <span>Realizar otra cotización</span>
              </div>
            </div>
          ) : loading ? (
            <div className="loading">
              <svg
                height="100"
                stroke="#3f51f4"
                stroke-width="1"
                class="text-line"
              >
                <text x="25" y="90" fill="none" font-size="50">
                  Cargando...
                </text>
              </svg>
            </div>
          ) : (
            <Fragment>
              <div className="form-header">
                <p className="form-title">Realiza tu cotización</p>
              </div>
              <div className="form-body">
                <TextInputField
                  label={
                    <span>
                      <text>Superficie del terreno</text>
                      <Tooltip
                        content="Se ingresa la superficie del terreno en metros cuadrados."
                        appearance="card"
                      >
                        <InfoSignIcon />
                      </Tooltip>
                    </span>
                  }
                  placeholder="100"
                  type="number"
                  required
                  onChange={(e) => {
                    setFormData({ ...formData, LotArea: e.target.value });
                  }}
                  width="32%"
                  inputWidth="100%"
                />
                <TextInputField
                  label={
                    <span>
                      <text>Superficie del sótano</text>
                      <Tooltip
                        content="Se ingresa la superficie del sótano en pies cuadrados."
                        appearance="card"
                      >
                        <InfoSignIcon />
                      </Tooltip>
                    </span>
                  }
                  placeholder="100"
                  type="number"
                  required
                  onChange={(e) => {
                    setFormData({ ...formData, TotalBsmtSF: e.target.value });
                  }}
                  width="32%"
                  inputWidth="100%"
                />
                <TextInputField
                  label={
                    <span>
                      <text>Superficie del acabado</text>
                      <Tooltip
                        content="Se ingresa la superficie total de acabados en pies cuadrados."
                        appearance="card"
                      >
                        <InfoSignIcon />
                      </Tooltip>
                    </span>
                  }
                  placeholder="100"
                  type="number"
                  required
                  onChange={(e) => {
                    setFormData({ ...formData, BsmtFinSF1: e.target.value });
                  }}
                  width="32%"
                  inputWidth="100%"
                />
                <TextInputField
                  label={
                    <span>
                      <text>Año de construcción</text>
                    </span>
                  }
                  placeholder="100"
                  type="number"
                  required
                  onChange={(e) => {
                    setFormData({ ...formData, YearBuilt: e.target.value });
                  }}
                  width="32%"
                  inputWidth="100%"
                />
                <TextInputField
                  label={
                    <span>
                      <text>Superficie por encima del suelo</text>
                      <Tooltip
                        content="Se ingresa la superficie habitable por encima del nivel del suelo en pies cuadrados"
                        appearance="card"
                      >
                        <InfoSignIcon />
                      </Tooltip>
                    </span>
                  }
                  placeholder="100"
                  type="number"
                  required
                  onChange={(e) => {
                    setFormData({ ...formData, GrLivArea: e.target.value });
                  }}
                  width="32%"
                  inputWidth="100%"
                />
                <TextInputField
                  label={
                    <span>
                      <text>Baños completos en el sótano</text>
                    </span>
                  }
                  placeholder="100"
                  type="number"
                  required
                  onChange={(e) => {
                    setFormData({ ...formData, BsmtFullBath: e.target.value });
                  }}
                  width="32%"
                  inputWidth="100%"
                />
                <TextInputField
                  label={
                    <span>
                      <text>Medios baños en el sótano</text>
                    </span>
                  }
                  placeholder="100"
                  type="number"
                  required
                  onChange={(e) => {
                    setFormData({ ...formData, HalfBath: e.target.value });
                  }}
                  width="32%"
                  inputWidth="100%"
                />
                <TextInputField
                  label={
                    <span>
                      <text>Cocinas a nivel de suelo</text>
                      <Tooltip
                        content="Se ingresa el número de cocinas a nivel de suelo."
                        appearance="card"
                      >
                        <InfoSignIcon />
                      </Tooltip>
                    </span>
                  }
                  placeholder="100"
                  type="number"
                  required
                  onChange={(e) => {
                    setFormData({ ...formData, KitchenAbvGr: e.target.value });
                  }}
                  width="32%"
                  inputWidth="100%"
                />
                <TextInputField
                  label={
                    <span>
                      <text>Número de chimeneas</text>
                    </span>
                  }
                  placeholder="100"
                  type="number"
                  required
                  onChange={(e) => {
                    setFormData({ ...formData, Fireplaces: e.target.value });
                  }}
                  width="32%"
                  inputWidth="100%"
                />
                <TextInputField
                  label={
                    <span>
                      <text>Capacidad de carros en cochera</text>
                    </span>
                  }
                  placeholder="100"
                  type="number"
                  required
                  onChange={(e) => {
                    setFormData({ ...formData, GarageCars: e.target.value });
                  }}
                  width="32%"
                  inputWidth="100%"
                />
                <TextInputField
                  label={
                    <span>
                      <text>Superficie de cubierta de madera</text>
                      <Tooltip
                        content="Se ingresa la superficie de la cubierta de madera en pies cuadrados."
                        appearance="card"
                      >
                        <InfoSignIcon />
                      </Tooltip>
                    </span>
                  }
                  placeholder="100"
                  type="number"
                  required
                  onChange={(e) => {
                    setFormData({ ...formData, WoodDeckSF: e.target.value });
                  }}
                  width="32%"
                  inputWidth="100%"
                />
                <TextInputField
                  label={
                    <span>
                      <text>Superficie de la cochera</text>
                      <Tooltip
                        content="Se ingresa la superficie de la cochera en pies cuadrados"
                        appearance="card"
                      >
                        <InfoSignIcon />
                      </Tooltip>
                    </span>
                  }
                  placeholder="100"
                  type="number"
                  required
                  onChange={(e) => {
                    setFormData({ ...formData, ScreenPorch: e.target.value });
                    console.log(formData);
                  }}
                  width="32%"
                  inputWidth="100%"
                />
                <TextInputField
                  label={
                    <span>
                      <text>Año de remodelación</text>
                      <Tooltip
                        content="Se ingresa el año que se remodeló la casa. Si no se ha remodelado, poner 0."
                        appearance="card"
                      >
                        <InfoSignIcon />
                      </Tooltip>
                    </span>
                  }
                  placeholder="100"
                  type="number"
                  required
                  onChange={(e) => {
                    setFormData({ ...formData, YearRemodAdd: e.target.value });
                    console.log(formData);
                  }}
                  width="32%"
                  inputWidth="100%"
                />
                <SelectField
                  label="Exposición del sótano"
                  onChange={(e) =>
                    setFormData({ ...formData, BsmtExposure: e.target.value })
                  }
                >
                  <option value="Gd" selected>
                    Exposición buena
                  </option>
                  <option value="Av">Exposición media</option>
                  <option value="Mn">Exposición mínima</option>
                  <option value="No">Sin exposición</option>
                </SelectField>
                <SelectField
                  label="Tipo de zona del inmueble"
                  onChange={(e) =>
                    setFormData({ ...formData, MSZoning: e.target.value })
                  }
                >
                  <option value="MSZoning_FV" selected>
                    Pueblo flotante residencial
                  </option>
                  <option value="MSZoning_RH">
                    Residencial de alta densidad
                  </option>
                  <option value="MSZoning_RL">
                    Residencial Densidad Media
                  </option>
                  <option value="MSZoning_RM">
                    Residencial de Baja Densidad
                  </option>
                  <option value="-1">Otro tipo de zona</option>
                </SelectField>
                <SelectField
                  label="Ubicación de los límites de Ames"
                  onChange={(e) =>
                    setFormData({ ...formData, Neighborhood: e.target.value })
                  }
                >
                  <option value="Neighborhood_Crawfor" selected>
                    Crawford
                  </option>
                  <option value="Neighborhood_Edwards">Edwards</option>
                  <option value="Neighborhood_MeadowV">Meadow Village</option>
                  <option value="Neighborhood_NridgHt">
                    Northridge Heights
                  </option>
                  <option value="Neighborhood_StoneBr">Stone Brook</option>
                  <option value="-1">Otra ubicación</option>
                </SelectField>
                <SelectField
                  label="Proximidad a diversas condiciones"
                  onChange={(e) =>
                    setFormData({ ...formData, Condition1: e.target.value })
                  }
                >
                  <option value="Condition1_Artery" selected>
                    Adyacente a calle arterial
                  </option>
                  <option value="Condition1_Feedr">
                    Adyacente a calle afluente
                  </option>
                  <option value="Condition1_RRAe">
                    Cerca de un elemento positivo fuera del emplazamiento
                  </option>
                  <option value="Condition2_PosA">
                    Adyacente a un elemento positivo fuera del emplazamiento
                  </option>
                  <option value="Condition2_PosN">
                    Adyacente a la vía férrea Este-Oeste
                  </option>
                  <option value="-1">Otro tipo de proximidad</option>
                </SelectField>
                <SelectField
                  label="Si la casa es adosada, es..."
                  onChange={(e) =>
                    setFormData({ ...formData, BldgType: e.target.value })
                  }
                >
                  <option value="BldgType_Twnhs" selected>
                    La unidad final de la casa adosada
                  </option>
                  <option value="BldgType_TwnhsE">
                    La unidad interior de la casa adosada
                  </option>
                  <option value="-1">La casa no es adosada</option>
                </SelectField>
                <SelectField
                  label="Revestimientos en el exterior de la casa"
                  onChange={(e) =>
                    setFormData({ ...formData, Exterior1st: e.target.value })
                  }
                >
                  <option value="Exterior1st_BrkComm" selected>
                    Ladrillo común
                  </option>
                  <option value="Exterior1st_BrkFace">Cara del ladrillo</option>
                  <option value="Exterior1st_MetalSd">
                    Revestimiento metálico
                  </option>
                  <option value="-1">Otro material</option>
                </SelectField>
                <SelectField
                  label="Tipo de cimientos"
                  onChange={(e) =>
                    setFormData({ ...formData, Foundation: e.target.value })
                  }
                >
                  <option value="Foundation_BrkTil" selected>
                    Ladrillo y teja
                  </option>
                  <option value="Foundation_CBlock">Bloque de cemento</option>
                  <option value="Foundation_Wood">Madera</option>
                  <option value="-1">Otro material</option>
                </SelectField>
                <SelectField
                  label="Sistema de calefacción"
                  onChange={(e) =>
                    setFormData({ ...formData, Heating: e.target.value })
                  }
                >
                  <option value="Heating_GasA" selected>
                    Caldera de gas para aire caliente
                  </option>
                  <option value="Heating_Grav">Horno de gravedad</option>
                  <option value="Foundation_Wood">Madera</option>
                  <option value="-1">Otro material</option>
                </SelectField>
                <SelectField
                  label="Deducciones de la casa"
                  onChange={(e) =>
                    setFormData({ ...formData, Functional: e.target.value })
                  }
                >
                  <option value="Functional_Maj1" selected>
                    Caldera de gas para aire caliente
                  </option>
                  <option value="Functional_Min1">
                    Deducciones mínimas de nivel 1
                  </option>
                  <option value="Functional_Min2">
                    Deducciones mínimas de nivel 2
                  </option>
                  <option value="Functional_Mod">Deducciones moderadas</option>
                  <option value="Functional_Typ">Sin deducciones</option>
                </SelectField>
                <SelectField
                  label="Venta por..."
                  onChange={(e) =>
                    setFormData({ ...formData, SaleType: e.target.value })
                  }
                >
                  <option value="SaleType_COD" selected>
                    Escritura/patrimonio del funcionario judicial
                  </option>
                  <option value="SaleType_ConLI">
                    Contrato de bajo interés
                  </option>
                  <option value="SaleType_WD">Escritura convencional</option>
                  <option value="-1">Otra condición de venta</option>
                </SelectField>
                <SelectField
                  label="Material del techo"
                  onChange={(e) =>
                    setFormData({ ...formData, RoofMatl: e.target.value })
                  }
                >
                  <option value="RoofMatl_ClyTile" selected>
                    Arcilla
                  </option>
                  <option value="RoofMatl_CompShg">Teja</option>
                  <option value="-1">Otra material</option>
                </SelectField>
                <div className="checkbox">
                  <p className="form-title">
                    ¿Aire acondicionado centralizado?
                  </p>
                  <Group size="small">
                    {options.map(({ label, value }) => (
                      <Button
                        key={label}
                        isActive={formData.CentralAir === value}
                        onClick={() =>
                          setFormData({ ...formData, CentralAir: value })
                        }
                      >
                        {label}
                      </Button>
                    ))}
                  </Group>
                </div>
                <div className="checkbox">
                  <p className="form-title">
                    ¿La configuración del lote es de parcela interior?
                  </p>
                  <Group size="small">
                    {options_3.map(({ label, value }) => (
                      <Button
                        key={label}
                        isActive={formData.LotConfig_Inside === value}
                        onClick={() =>
                          setFormData({ ...formData, LotConfig_Inside: value })
                        }
                      >
                        {label}
                      </Button>
                    ))}
                  </Group>
                </div>
                <div className="checkbox">
                  <p className="form-title">
                    ¿La pendiente o inclinación de la propiedad es severa?
                  </p>
                  <Group size="small">
                    {options_4.map(({ label, value }) => (
                      <Button
                        key={label}
                        isActive={formData.LandSlope_Sev === value}
                        onClick={() =>
                          setFormData({ ...formData, LandSlope_Sev: value })
                        }
                      >
                        {label}
                      </Button>
                    ))}
                  </Group>
                </div>
                <div className="checkbox">
                  <p className="form-title">
                    ¿La casa tiene una fachada con ladrillo?
                  </p>
                  <Group size="small">
                    {options_5.map(({ label, value }) => (
                      <Button
                        key={label}
                        isActive={formData.Exterior2nd_BrkFace === value}
                        onClick={() =>
                          setFormData({
                            ...formData,
                            Exterior2nd_BrkFace: value,
                          })
                        }
                      >
                        {label}
                      </Button>
                    ))}
                  </Group>
                </div>
                <div className="checkbox">
                  <p className="form-title">
                    ¿La casa cuenta con disyuntores estándar y Romex?
                  </p>
                  <Group size="small">
                    {options.map(({ label, value }) => (
                      <Button
                        key={label}
                        isActive={formData.Electrical_SBrkr === value}
                        onClick={() =>
                          setFormData({ ...formData, Electrical_SBrkr: value })
                        }
                      >
                        {label}
                      </Button>
                    ))}
                  </Group>
                </div>
                <div className="checkbox">
                  <p className="form-title">
                    ¿La casa tiene distintos tipos de cocheras?
                  </p>
                  <Group size="small">
                    {options_6.map(({ label, value }) => (
                      <Button
                        key={label}
                        isActive={formData.GarageType_2Types === value}
                        onClick={() =>
                          setFormData({ ...formData, GarageType_2Types: value })
                        }
                      >
                        {label}
                      </Button>
                    ))}
                  </Group>
                </div>
                <div className="checkbox">
                  <p className="form-title">Condición de la venta</p>
                  <Group size="small">
                    {options_2.map(({ label, value }) => (
                      <Button
                        key={label}
                        isActive={formData.SaleCondition_Normal === value}
                        onClick={() =>
                          setFormData({
                            ...formData,
                            SaleCondition_Normal: value,
                          })
                        }
                      >
                        {label}
                      </Button>
                    ))}
                  </Group>
                </div>
                <div
                  className="button"
                  onClick={() => {
                    enviarCotizacion();
                  }}
                >
                  <span>Enviar</span>
                </div>
                <p className="obligatory-text">
                  * Estos campos son obligatorios
                </p>
              </div>
            </Fragment>
          )}
        </div>
      </div>
    </Fragment>
  );
}

export default FormCotizacion;
