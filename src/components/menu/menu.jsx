import * as React from 'react';
import { DashboardMenuItem, Menu, MenuItemLink } from 'react-admin';
import ElectricCarIcon from '@mui/icons-material/ElectricCar';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import PaymentIcon from '@mui/icons-material/Payment';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import NightsStayIcon from '@mui/icons-material/NightsStay';
import NoteIcon from '@mui/icons-material/Note';
import ElectricalServicesIcon from '@mui/icons-material/ElectricalServices';
import AllInboxIcon from '@mui/icons-material/AllInbox';
import AnnouncementIcon from '@mui/icons-material/Announcement';
import ExposureIcon from '@mui/icons-material/Exposure';
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';
import GroupWorkIcon from '@mui/icons-material/GroupWork';

export const CustomMenu = (props) => (
    <Menu {...props}>
        <MenuItemLink to="/animals" primaryText="Animals" leftIcon={ <GroupAddIcon/> } />
        <MenuItemLink to="/brigadeVetPersonnel" primaryText="Vet personnel for brigade" leftIcon={ <ManageAccountsIcon/> } />
        <MenuItemLink to="/emergencyCallGroup" primaryText="Emergency group info" leftIcon={ <ElectricCarIcon/> } />
        <MenuItemLink to="/animalOwner" primaryText="Animal owners" leftIcon={ <PaymentIcon/> } />
        <MenuItemLink to="/emergencyCall" primaryText="Emergency calls" leftIcon={ <NightsStayIcon/> } />
        <MenuItemLink to="/registry" primaryText="Registry" leftIcon={ <NoteIcon/> } />
        <MenuItemLink to="/listOfServices" primaryText="List Of Services" leftIcon={ <ElectricalServicesIcon/> } />
        <MenuItemLink to="/complexServices" primaryText="Complex of services" leftIcon={ <AllInboxIcon/> } />
        <MenuItemLink to="/vetPersonnel" primaryText="Vet personnel" leftIcon={ <MedicalServicesIcon/> } />
        <MenuItemLink to="/directions" primaryText="Directions" leftIcon={ <GroupWorkIcon/> } />
        <MenuItemLink to="/complains-suggestions" primaryText="Complains suggestions" leftIcon={ <ExposureIcon/> } />
        <MenuItemLink to="/vetNews" primaryText="Vet news" leftIcon={ <AnnouncementIcon/> } />
    </Menu>
    )

{/* 
<Resource name="vetPersonnel" list={MedicalPersonnelList} show={ShowGuesser} edit={MedicalPersonnelEdit} create={MedicalPersonnelCreate}/>
<Resource name="directions" list={DepartmentsList} show={ShowGuesser} edit={DepartmentsEdit} create={DepartmentsCreate}/>
<Resource name="complains-suggestions" list={ComplainsSuggestionsList} show={ShowGuesser} edit={ComplainsSuggestionsEdit} create={ComplainsSuggestionsCreate}/>
<Resource name="vetNews" list={NewsList} show={ShowGuesser} edit={NewsEdit} create={NewsCreate} />  */}
