import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { PodmanDeploymentList } from "./podmanDeployment/PodmanDeploymentList";
import { PodmanDeploymentCreate } from "./podmanDeployment/PodmanDeploymentCreate";
import { PodmanDeploymentEdit } from "./podmanDeployment/PodmanDeploymentEdit";
import { PodmanDeploymentShow } from "./podmanDeployment/PodmanDeploymentShow";
import { VirtualMachineList } from "./virtualMachine/VirtualMachineList";
import { VirtualMachineCreate } from "./virtualMachine/VirtualMachineCreate";
import { VirtualMachineEdit } from "./virtualMachine/VirtualMachineEdit";
import { VirtualMachineShow } from "./virtualMachine/VirtualMachineShow";
import { ImageList } from "./image/ImageList";
import { ImageCreate } from "./image/ImageCreate";
import { ImageEdit } from "./image/ImageEdit";
import { ImageShow } from "./image/ImageShow";
import { ContainerList } from "./container/ContainerList";
import { ContainerCreate } from "./container/ContainerCreate";
import { ContainerEdit } from "./container/ContainerEdit";
import { ContainerShow } from "./container/ContainerShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"PodmanDeploymentService"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="PodmanDeployment"
          list={PodmanDeploymentList}
          edit={PodmanDeploymentEdit}
          create={PodmanDeploymentCreate}
          show={PodmanDeploymentShow}
        />
        <Resource
          name="VirtualMachine"
          list={VirtualMachineList}
          edit={VirtualMachineEdit}
          create={VirtualMachineCreate}
          show={VirtualMachineShow}
        />
        <Resource
          name="Image"
          list={ImageList}
          edit={ImageEdit}
          create={ImageCreate}
          show={ImageShow}
        />
        <Resource
          name="Container"
          list={ContainerList}
          edit={ContainerEdit}
          create={ContainerCreate}
          show={ContainerShow}
        />
      </Admin>
    </div>
  );
};

export default App;
