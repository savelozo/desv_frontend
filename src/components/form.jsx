'use client'
import React, { useState } from 'react';

const Form = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [age, setAge] = useState('');
  const [age_index, setAgeIndex] = useState(0);
  const [email, setEmail] = useState('');
  const [nationality, setNationality] = useState(0);
  const [address, setAddress] = useState(0);
  const [education_level, setEducation] = useState(0);
  const [work_relation, setWorkRelation] = useState(0);
  const [work_relation_seniority, setWorkRelationSeniority] = useState(0);
  const [industry, setIndustry] = useState(0);
  const [monthly_income, setMonthlyIncome] = useState(0);
  const [bank_products_status, setBankProductsStatus] = useState(0);
  const [bank_products_seniority, setBankProductSeniority] = useState(0);
  const [property_valuation, setPropertyValuation] = useState(0);
  const [vehicle_valuation, setVehicleValuation] = useState(0);
  const [saving_valuation, setSavingValuation] = useState(0);
  const [other_assets_valuation, setOtherAssetsValuation] = useState(0);
  const [automotive_consumption_valuation, setAutomotiveConsumptionValuatoin] = useState(0);
  const [credit_card_valuation, setCreditCardValuation] = useState(0);
  const [mortgage_credit_valuation, setMortgageCreditValuation] = useState(0);
  const [rental_expenses_valuation, setRentalExpensesValuation] = useState(0);
  const [other_debts_valuation, setOtherDebtsValuation] = useState(0);
  const [desv_index, setDesvIndex] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Here, you can send the form data to the server or perform other actions with the entered data.
    let index_desv = (parseFloat(age_index) + parseFloat(nationality) + parseFloat(address) + parseFloat(education_level) + parseFloat(work_relation_seniority)
    + parseFloat(industry) + parseFloat(monthly_income) + parseFloat(bank_products_seniority) + parseFloat(property_valuation) + parseFloat(vehicle_valuation)
    + parseFloat(saving_valuation) + parseFloat(other_assets_valuation) + parseFloat(automotive_consumption_valuation) + parseFloat(credit_card_valuation)
    + parseFloat(mortgage_credit_valuation) + parseFloat(rental_expenses_valuation) + parseFloat(other_debts_valuation))
    setDesvIndex(index_desv)
    console.log({
      firstName,
      lastName,
      age,
      email
    });
  };

  const PercentageCalculator = ({ age }) => {    
    setAge(age)
    if (age >= 18 && age <= 24) {
      setAgeIndex(0.012);
    } else if (age >= 25 && age <= 35) {
      setAgIndex(0.02);
    } else if (age >= 36 && age <= 45) {
      setAgeIndex(0.024);
    } else if (age >= 46 && age <= 55) {
      setAgeIndex(0.02);
    } else if (age >= 56 && age <= 65) {
      setAgeIndex(0.004);
    } else {
      // Default percentage if age is outside the specified intervals
      setAgeIndex(0);
    }
  };

  return (
    <div>
    <form onSubmit={handleFormSubmit}>
      <div>
        <label>Nombres</label>
        <input
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
      </div>
      <div>
        <label>Apellidos</label>
        <input
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
      </div>
      <div>
        <label>Fecha de nacimiento</label>
        <input
          type="number"
          value={age}
          onChange={(e) => PercentageCalculator(e.target.value)}
        />
      </div>
      <div>
        <label>Correo electrónico</label>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <label>¿Tienes nacionalidad chilena?</label>
        <select value={nationality} onChange={(e) => setNationality(e.target.value)}>
          <option value="">Select</option>
          <option value={0.02}>Sí</option>
          <option value={0}>No</option>
        </select>
        <br></br>
      </div>
      <div>
      <label>¿Tienes domicilio acreditable?</label>
        <select value={address} onChange={(e) => setAddress(e.target.value)}>
          <option value="">Select</option>
          <option value={0.02}>Sí</option>
          <option value={0}>No</option>
        </select>
        <br></br>
      </div>
      <div>
        <label>Nivel de estudios</label>
          <select value={education_level} onChange={(e) => setEducation(e.target.value)}>
            <option value="">Select</option>
            <option value={0.0008}>Básica incompleta</option>
            <option value={0.0016}>Básica completa</option>
            <option value={0.0032}>Media incompleta</option>
            <option value={0.016}>Media completa</option>
            <option value={0.02}>Téc. Sup. Incompleta</option>
            <option value={0.036}>Téc. Sup. Completa</option>
            <option value={0.044}>Profesional incompleta</option>
            <option value={0.072}>Profesional completa</option>
            <option value={0.076}>Post-Grado incompleta</option>
            <option value={0.08}>Post-Grado completa</option>
          </select>
          <br></br>
      </div>
      <div>
        <label>Indique su relación laboral</label>
          <select value={work_relation} onChange={(e) => setWorkRelation(e.target.value)}>
            <option value="">Select</option>
            <option value="dependiente">Trabajador/a dependiente</option>
            <option value="independiente">Trabajador/a indepdendiente</option>
            <option value="desempleado">Desempleado/a</option>
          </select>
      </div>
      {work_relation == "dependiente" ? 
        <div>
          <label>Indique su antigüedad laboral</label>
            <select value={work_relation_seniority} onChange={(e) => setWorkRelationSeniority(e.target.value)}>
              <option value="">Select</option>
              <option value={0.0025}>Menor o igual a 6 meses</option>
              <option value={0.01}>Mayor a 6 meses y menor o igual a 1 año</option>
              <option value={0.035}>Mayor a 1 año y menor a igual a 2 años</option>
              <option value={0.05}>Mayor a 2 años</option>
            </select>
        </div> :
        work_relation == "independiente" ?
          <div>
          <label>Indique su antigüedad laboral</label>
            <select value={work_relation_seniority} onChange={(e) => setWorkRelationSeniorty(e.target.value)}>
              <option value="">Select</option>
              <option value={0.0025}>Menor o igual a 1 año</option>
              <option value={0.02}>Mayor a 1 año y menor o igual a 3 años</option>
              <option value={0.05}>Mayor a 3 años</option>
            </select>
      </div> : null
      }
      {work_relation != "independiente" ?
      <div>
        <label>Tipo de industria</label>
          <select value={industry} onChange={(e) => setIndustry(e.target.value)}>
            <option value="">Select</option>
            <option value={0.01}>Grupo 1</option>
            <option value={0.0075}>Grupo 2</option>
            <option value={0.0075}>Grupo 3</option>
            <option value={0.00625}>Grupo 4</option>
            <option value={0.00625}>Grupo 5</option>
            <option value={0.00625}>Grupo 6</option>
            <option value={0.00625}>Grupo 7</option>
            <option value={0.00625}>Grupo 8</option>
          </select>
          <br></br>
      </div>:null
      }

      <div>
        <label>Indique sus ingresos mensuales</label>
          <select value={monthly_income} onChange={(e) => setMonthlyIncome(e.target.value)}>
            <option value="">Select</option>
            <option value={0.0375}>Entre $0 y $410.000</option>
            <option value={0.075}>Entre $411.000 y $800.000</option>
            <option value={0.125}>Entre $800.001 y $1.200.000</option>
            <option value={0.175}>Entre $1.200.001 y $2.000.000</option>
            <option value={0.2125}>Entre $2.000.001 y $2.500.000</option>
            <option value={0.25}>Más de 2.500.000</option>
          </select>
          <br></br>
      </div>
      <div>
        <label>¿Tienes productos bancarios?</label>
          <select value={bank_products_status} onChange={(e) => setBankProductsStatus(e.target.value)}>
            <option value="">Select</option>
            <option value={1}>Sí</option>
            <option value={0}>No</option>
          </select>
          <br></br>
      </div>
      {
        bank_products_status == 1 ? (
        <div>
          <label>Indique la antigüedad de sus productos</label>
            <select value={bank_products_seniority} onChange={(e) => setBankProductSeniority(e.target.value)}>
              <option value="">Select</option>
              <option value={0.0025}>Menos de 6 meses</option>
              <option value={0.01}>Entre 6 meses y 1 año.</option>
              <option value={0.035}>Entre 1 año y 2 años.</option>
              <option value={0.05}>Más de 2 años.</option>
            </select> 
        </div>
        ): null
      }
      <div>
        <label>Valorización de propiedades</label>
          <select value={property_valuation} onChange={(e) => setPropertyValuation(e.target.value)}>
            <option value="">Select</option>
            <option value={0}>No poseo propiedades.</option>
            <option value={0.004}>Menor a $50.000.000</option>
            <option value={0.016}>Entre $50.000.001 y $80.000.000</option>
            <option value={0.04}>Entre $80.000.001 y $120.000.000</option>
            <option value={0.08}>Más de $120.000.001</option>
          </select>
      </div>
      <div>
        <label>Valorización de vehículos</label>
          <select value={vehicle_valuation} onChange={(e) => setVehicleValuation(e.target.value)}>
            <option value="">Select</option>
            <option value={0}>No poseo vehículos.</option>
            <option value={0.001}>Menor a $10.000.000</option>
            <option value={0.004}>Entre $10.000.001 y $20.000.000</option>
            <option value={0.01}>Entre $20.000.001 y $35.000.000</option>
            <option value={0.02}>Más de $35.000.001</option>
          </select>
      </div>
      <div>
        <label>Valorización de instrumentos de ahorro</label>
          <select value={saving_valuation} onChange={(e) => setSavingValuation(e.target.value)}>
            <option value="">Select</option>
            <option value={0}>No poseo instrumentos de ahorro.</option>
            <option value={0.003}>Menor a $10.000.000</option>
            <option value={0.012}>Entre $10.000.001 y $20.000.000</option>
            <option value={0.03}>Entre $20.000.001 y $35.000.000</option>
            <option value={0.06}>Más de $35.000.001</option>
          </select>
      </div>
      <div>
        <label>Valorización de otros activos</label>
          <select value={other_assets_valuation} onChange={(e) => setOtherAssetsValuation(e.target.value)}>
            <option value="">Select</option>
            <option value={0}>No poseo otros activos.</option>
            <option value={0.002}>Menor a $5.000.000</option>
            <option value={0.008}>Entre $5.000.001 y $20.000.000</option>
            <option value={0.02}>Entre $20.000.001 y $45.000.000</option>
            <option value={0.04}>Más de $45.000.001</option>
          </select>
      </div>
      <div>
        <label>Valorización de consumo comercial automotriz</label>
          <select value={automotive_consumption_valuation} onChange={(e) => setAutomotiveConsumptionValuatoin(e.target.value)}>
            <option value="">Select</option>
            <option value={0}>No poseo crédito automotriz.</option>
            <option value={0.03}>Menor a $10.000.000</option>
            <option value={0.018}>Entre $10.000.001 y $20.000.000</option>
            <option value={0.012}>Entre $20.000.001 y $35.000.000</option>
            <option value={0.003}>Más de $35.000.001</option>
          </select>
      </div>
      <div>
        <label>Valorización de tarjeta y línea de crédito</label>
          <select value={credit_card_valuation} onChange={(e) => setCreditCardValuation(e.target.value)}>
            <option value="">Select</option>
            <option value={0.05}>No poseo tarjeta, ni línea de crédito.</option>
            <option value={0.03}>Menor a $1.000.000</option>
            <option value={0.02}>Entre $1.000.001 y $5.000.000</option>
            <option value={0.01}>Entre $5.000.001 y $10.000.000</option>
            <option value={0.005}>Más de $10.000.001</option>
          </select>
      </div>
      <div>
        <label>Valorización de crédito hipotecario.</label>
          <select value={mortgage_credit_valuation} onChange={(e) => setMortgageCreditValuation(e.target.value)}>
            <option value="">Select</option>
            <option value={0.06}>No poseo crédito hipotecario.</option>
            <option value={0.036}>Menor a $50.000.000</option>
            <option value={0.024}>Entre $50.000.001 y $80.000.000</option>
            <option value={0.016}>Entre $80.000.001 y $120.000.000</option>
            <option value={0.003}>Más de $120.000.001</option>
          </select>
      </div>
      <div>
        <label>Valorización de gastos de arriendo.</label>
          <select value={rental_expenses_valuation} onChange={(e) => setRentalExpensesValuation(e.target.value)}>
            <option value="">Select</option>
            <option value={0.04}>No poseo gastos de arriendo.</option>
            <option value={0.024}>Menor a $250.000</option>
            <option value={0.016}>Entre $250.001 y $500.000</option>
            <option value={0.008}>Entre $500.001 y $1.200.000</option>
            <option value={0.002}>Más de $1.200.001</option>
          </select>
      </div>
      <div>
        <label>Valorización de otros pasivos.</label>
          <select value={other_debts_valuation} onChange={(e) => setOtherDebtsValuation(e.target.value)}>
            <option value="">Select</option>
            <option value={0.02}>No poseo otras deudas.</option>
            <option value={0.012}>Menor a $2.000.000</option>
            <option value={0.008}>Entre $2.000.001 y $5.000.000</option>
            <option value={0.004}>Entre $5.000.001 y $15.000.000</option>
            <option value={0.001}>Más de $15.000.001</option>
          </select>
      </div>        
      <button type="submit">Submit</button>
    </form>
    {desv_index ? (<h1>{desv_index}</h1>) : null}       
    </div>
  );
};

export default Form;
