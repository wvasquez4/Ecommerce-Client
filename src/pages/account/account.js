import { Tab } from "semantic-ui-react";
import { BasicLayout } from "@/layouts";
import { Info } from "@/components/Account";
import { useAuth } from "@/hooks";
import styles from "./account.module.scss";

export default function account() {
  const { user, logout } = useAuth();
  const panes = [
    {
      menuItem: "Mis pedidos",
      render: () => (
        <Tab.Pane attached={false}>
          <p>Mis Pedidos...</p>
        </Tab.Pane>
      )
    },
    {
      menuItem: "Lista de deseos",
      render: () => (
        <Tab.Pane attached={false}>
          <p>Mis lista de deseos...</p>
        </Tab.Pane>
      )
    },
    {
      menuItem: "Direcciones",
      render: () => (
        <Tab.Pane attached={false}>
          <p>Mis Direcciones...</p>
        </Tab.Pane>
      )
    },
    {
      menuItem: {icon: "settings", content: "Ajustes"},
      render: () => (
        <Tab.Pane attached={false}>
          <p>Mis Ajustes...</p>
        </Tab.Pane>
      )
    },
    {
      menuItem: {
        icon: "logout",
        content: "",
        onClick: logout
      }
    },
  ];

  return (
    <>
      <BasicLayout isContainer>
        <Info />

        <Tab menu={{ secondary: true, pointing: true}} panes={panes} className={styles.tabs} />
      </BasicLayout>
    </>
  )
}
