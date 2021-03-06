import * as React from "react";
import { useMediaQuery } from '@material-ui/core';
import {
    List,
    Datagrid,
    TextField,
    NumberField,
    EditButton,
    TextInput,
    SimpleForm,
    Create,
    Edit,
    ReferenceInput,
    SelectInput,
    SimpleList,
    ReferenceField,
    useRedirect,
    useRefresh
} from 'react-admin';

const arrivalFilters = [
    <TextInput source="reason" label="Search by reason" alwaysOn />,
    <ReferenceInput source="id" label="Filter by id" reference="emergencyCall" allowEmpty>
        <SelectInput optionText="id" />
    </ReferenceInput>,
]

export const ArrivalsList = props => {  
    const isSmall = useMediaQuery(theme => theme.breakpoints.down('sm'));
    return (<List {...props} filters={arrivalFilters}>
        {isSmall ? (
            <SimpleList
            primaryText={record => record.id}
            secondaryText={record => record.reason}
            tertiaryText={record => {}}
        />) : (
        <Datagrid rowClick="edit">
            <ReferenceField source="brigadesId" reference="emergencyCallGroup">
                <TextField source="nickName" />
            </ReferenceField>
            <ReferenceField source="registerOfCardsId" reference="animalOwner">
                <TextField source="firstName" />
            </ReferenceField>
            <NumberField source="id" />            
            <TextField source="reason" />
            <EditButton />
        </Datagrid>
        )}
    </List>
)};

export const ArrivalsEdit = props => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput disabled source="id" />            
            <TextInput source="reason" />
            <ReferenceInput source="brigadesId" reference="emergencyCallGroup">
                <SelectInput optionText="nickName" />
            </ReferenceInput>
            <ReferenceInput source="registerOfCardsId" reference="animalOwner">
                <SelectInput optionText="firstName" />
            </ReferenceInput>
        </SimpleForm>
    </Edit>
)

export const ArrivalsCreate = props => {
    const refresh = useRefresh();
    const redirect = useRedirect();

    const onSuccess = ({ data }) => {
        redirect(`/emergencyCall`);
        refresh();
    };

    return (<Create onSuccess={onSuccess} {...props}>
        <SimpleForm>             
            <TextInput source="reason" />
            <ReferenceInput source="brigadesId" reference="emergencyCallGroup">
                <SelectInput optionText="nickName" />
            </ReferenceInput>
            <ReferenceInput source="registerOfCardsId" reference="animalOwner">
                <SelectInput optionText="firstName" />
            </ReferenceInput>  
        </SimpleForm>
    </Create>)
}