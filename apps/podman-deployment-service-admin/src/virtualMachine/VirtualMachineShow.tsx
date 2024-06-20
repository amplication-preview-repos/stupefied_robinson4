import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { VIRTUALMACHINE_TITLE_FIELD } from "./VirtualMachineTitle";

export const VirtualMachineShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="hostname" source="hostname" />
        <TextField label="ID" source="id" />
        <TextField label="ipAddress" source="ipAddress" />
        <TextField label="sshKey" source="sshKey" />
        <TextField label="sshUser" source="sshUser" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="PodmanDeployment"
          target="virtualMachineId"
          label="PodmanDeployments"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="deploymentName" source="deploymentName" />
            <TextField label="ID" source="id" />
            <TextField label="status" source="status" />
            <DateField source="updatedAt" label="Updated At" />
            <ReferenceField
              label="VirtualMachine"
              source="virtualmachine.id"
              reference="VirtualMachine"
            >
              <TextField source={VIRTUALMACHINE_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
