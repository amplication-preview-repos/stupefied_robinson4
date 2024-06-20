import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { PodmanDeploymentTitle } from "../podmanDeployment/PodmanDeploymentTitle";

export const VirtualMachineCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="hostname" source="hostname" />
        <TextInput label="ipAddress" source="ipAddress" />
        <ReferenceArrayInput
          source="podmanDeployments"
          reference="PodmanDeployment"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={PodmanDeploymentTitle} />
        </ReferenceArrayInput>
        <TextInput label="sshKey" multiline source="sshKey" />
        <TextInput label="sshUser" source="sshUser" />
      </SimpleForm>
    </Create>
  );
};
