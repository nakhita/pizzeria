import React, { useState } from "react";
import {
  StyledTabButtons,
  StyledTabButton,
  StyledTabContent,
  StyledTabSubContainer,
} from "../componentes/Tabs/StyledTabs";
import { StyledPanelContenedor } from "../componentes/PanelContenedor/StyledPanelContenedor";
import NewPizzaPanel from "./NewPizzaPanel/NewPizzaPanel";
import PedidosPanel from "./PedidosPanel/PedidosPanel";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabIndex) => {
    setActiveTab(tabIndex);
  };

  return (
    <StyledPanelContenedor>
      <StyledTabButtons>
        <StyledTabButton
          className={activeTab === 1 ? "active-tab" : ""}
          onClick={() => handleTabClick(1)}
        >
          🍕 Crear Pedido
        </StyledTabButton>
        <StyledTabButton
          className={activeTab === 2 ? "active-tab" : ""}
          onClick={() => handleTabClick(2)}
        >
          📋 Ordenes
        </StyledTabButton>
      </StyledTabButtons>
      <StyledTabSubContainer>
        {activeTab === 1 && (
          <StyledTabContent>
            <NewPizzaPanel></NewPizzaPanel>
          </StyledTabContent>
        )}
        {activeTab === 2 && (
          <StyledTabContent>
            <PedidosPanel></PedidosPanel>
          </StyledTabContent>
        )}
      </StyledTabSubContainer>
    </StyledPanelContenedor>
  );
};

export default Tabs;
