import { Create, SimpleForm, TextInput } from "react-admin";

export const UnitCreate = () => {
  return (
    <Create>
      <SimpleForm>
        <TextInput source="title" label="Title" />
        <TextInput source="imageSrc" label="Image" />
      </SimpleForm>
    </Create>
  );
};
