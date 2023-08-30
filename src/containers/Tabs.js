import React, { useState } from "react";
import {
  StyledTabButtons,
  StyledTabButton,
  StyledTabContent,
  StyledTabSubContainer,
} from "../componentes/Tabs/StyledTabs";
import { StyledPanelContenedor } from "../componentes/PanelContenedor/StyledPanelContenedor";
import NewPizzaPanel from "./NewPizzaPanel/NewPizzaPanel";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabIndex) => {
    setActiveTab(tabIndex);
    console.log(tabIndex);
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
          <StyledTabContent>Contenido de la Pestaña 2</StyledTabContent>
        )}
      </StyledTabSubContainer>
    </StyledPanelContenedor>
  );
};

export default Tabs;
