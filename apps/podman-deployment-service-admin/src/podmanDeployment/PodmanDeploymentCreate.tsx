import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  SelectInput,
  ReferenceInput,
} from "react-admin";
import { VirtualMachineTitle } from "../virtualMachine/VirtualMachineTitle";

export const PodmanDeploymentCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="deploymentName" source="deploymentName" />
        <SelectInput
          source="status"
          label="status"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <ReferenceInput
          source="virtualMachine.id"
          reference="VirtualMachine"
          label="VirtualMachine"
        >
          <SelectInput optionText={VirtualMachineTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
