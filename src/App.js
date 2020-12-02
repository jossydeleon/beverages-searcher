import React, { Fragment } from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import CategoryProvider from "./context/CategoryContext";
import RecipesProvider from "./context/RecipesContext";
import RecipesList from "./components/RecipesList";
import ModalProvider from "./context/ModalContext";
import Footer from "./components/Footer";

function App() {
  return (
    <CategoryProvider>
      <RecipesProvider>
        <ModalProvider>
          <Header />
          <div className="container mt-5">
            <div className="row">
              <Form />
            </div>

            <RecipesList />

          </div>
        </ModalProvider>
      </RecipesProvider>
      <Footer />
    </CategoryProvider>
  );
}

export default App;