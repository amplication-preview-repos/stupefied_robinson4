import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
} from "react-admin";

import { ContainerTitle } from "../container/ContainerTitle";

export const ImageEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="containers"
          reference="Container"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ContainerTitle} />
        </ReferenceArrayInput>
        <TextInput label="imageName" source="imageName" />
        <TextInput label="repository" source="repository" />
        <TextInput label="tag" source="tag" />
      </SimpleForm>
    </Edit>
  );
};
