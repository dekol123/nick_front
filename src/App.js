import * as React from "react";
import { Admin, Resource, ShowGuesser, AppBar } from 'react-admin';
import crudProvider from 'ra-data-nestjsx-crud'
import { PatientsList, PatientsEdit, PatientsCreate } from "./components/patients";
import { BrigadeMedicalPersonnelList, BrigadeMedicalPersonnelEdit, BrigadeMedicalPersonnelCreate } from './components/brigade-medical-personnel';
import { NewsList, NewsEdit, NewsCreate } from "./components/news";
import { RegisterOfCardsCreate, RegisterOfCardsEdit, RegisterOfCardsList } from "./components/register-of-cards";
import { BrigadeList, BrigadeEdit, BrigadeCreate } from "./components/brigade";
import { ArrivalsList, ArrivalsEdit, ArrivalsCreate } from "./components/arrivals";
import { CardList, CardEdit, CardCreate } from "./components/cards";
import { ComplainsSuggestionsEdit, ComplainsSuggestionsList, ComplainsSuggestionsCreate } from "./components/complains-suggestions/complains-suggestions";
import { CatalogueOfServicesList, CatalogueOfServicesEdit, CatalogueOfServicesCreate } from "./components/catalogue-of-services";
import { ComplexOfServicesList, ComplexOfServicesCreate, ComplexOfServicesEdit } from './components/complex-of-services';
import { DepartmentsList, DepartmentsCreate, DepartmentsEdit } from "./components/departments";
import { MedicalPersonnelList, MedicalPersonnelEdit, MedicalPersonnelCreate } from './components/medical-personnel';
import { CustomLayout } from "./components/layout/layout";
import { CustomTheme } from './components/theme/theme';

const dataProvider = crudProvider('http://localhost:3000');
const App = () => (
    <Admin layout={CustomLayout} dataProvider={dataProvider}>
      <Resource name="animals" list={PatientsList} show={ShowGuesser} edit={PatientsEdit} create={PatientsCreate}/>
      <Resource name="brigadeVetPersonnel" list={BrigadeMedicalPersonnelList} show={ShowGuesser} edit={BrigadeMedicalPersonnelEdit} create={BrigadeMedicalPersonnelCreate}/>
      <Resource name="animalOwner" list={RegisterOfCardsList} show={ShowGuesser} create={RegisterOfCardsCreate} edit={RegisterOfCardsEdit} />
      <Resource name="emergencyCallGroup" list={BrigadeList} show={ShowGuesser} edit={BrigadeEdit} create={BrigadeCreate}/>
      <Resource name="emergencyCall" list={ArrivalsList} show={ShowGuesser} edit={ArrivalsEdit} create={ArrivalsCreate} />
      <Resource name="registry" list={CardList} show={ShowGuesser} edit={CardEdit} create={CardCreate}/>
      <Resource name="listOfServices" list={CatalogueOfServicesList} show={ShowGuesser} edit={CatalogueOfServicesEdit} create={CatalogueOfServicesCreate} /> 
      <Resource name="complexServices" list={ComplexOfServicesList} show={ShowGuesser} edit={ComplexOfServicesEdit} create={ComplexOfServicesCreate} />
      <Resource name="vetPersonnel" list={MedicalPersonnelList} show={ShowGuesser} edit={MedicalPersonnelEdit} create={MedicalPersonnelCreate}/>
      <Resource name="directions" list={DepartmentsList} show={ShowGuesser} edit={DepartmentsEdit} create={DepartmentsCreate}/>
      <Resource name="complains-suggestions" list={ComplainsSuggestionsList} show={ShowGuesser} edit={ComplainsSuggestionsEdit} create={ComplainsSuggestionsCreate}/>
      <Resource name="vetNews" list={NewsList} show={ShowGuesser} edit={NewsEdit} create={NewsCreate} /> 
    </Admin>
  );

export default App;