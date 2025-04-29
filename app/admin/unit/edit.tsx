import { Edit, SimpleForm, TextInput } from "react-admin";

export const UnitEdit = () => {
  return (
    <Edit>
      <SimpleForm>
        <TextInput source="id" label="Id" required />
        <TextInput source="title" label="Title" required />
        <TextInput source="imageSrc" label="Image" required />
      </SimpleForm>
    </Edit>
  );
};
