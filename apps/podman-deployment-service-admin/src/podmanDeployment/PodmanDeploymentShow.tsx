import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import { VIRTUALMACHINE_TITLE_FIELD } from "../virtualMachine/VirtualMachineTitle";

export const PodmanDeploymentShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
      </SimpleShowLayout>
    </Show>
  );
};
