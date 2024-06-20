import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { VIRTUALMACHINE_TITLE_FIELD } from "../virtualMachine/VirtualMachineTitle";

export const PodmanDeploymentList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"PodmanDeployments"}
      perPage={50}
      pagination={<Pagination />}
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
    </List>
  );
};
