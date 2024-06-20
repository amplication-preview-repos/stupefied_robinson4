import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
} from "react-admin";

import { ContainerTitle } from "../container/ContainerTitle";

export const ImageCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
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
    </Create>
  );
};
