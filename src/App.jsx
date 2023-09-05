import React, { useEffect, useState } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Pages/Home";
import Login from "./components/auth/Login";
import Explore from "./components/Pages/Explore";
import Authors from "./components/Pages/Authors";
import Poems from "./components/Pages/Poems";
import Stories from "./components/Pages/Stories";
import Articles from "./components/Pages/Articles";
import Register from "./components/auth/Register";
import Admin from "./components/Pages/Admin";
import CurrentAuthor from "./components/layout/CurrentAuthor";
import CurrentPoem from "./components/layout/CurrentPoem";
import CurrentArticle from "./components/layout/CurrentArticle";
import CurrentTopic from "./components/layout/CurrentTopic";

export const HOME = "/";
export const LOGIN = "/login";
export const REGISTER = "/register";
export const ADMIN = "/Admin";
export const EXPLORE = "/explore";
export const AUTHORS = "/authors";
export const POEMS = "/Poems";
export const STORIES = "/stories";
export const ARTICLES = "/Articles";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate an API call or data loading
    setTimeout(() => {
      setIsLoading(false);
    }, 100);
  }, []);

  return (
    <>
    {isLoading ? 'welcome to maznavi ' :
    <>
    <Router>
      <ChakraProvider>
        <Routes>
              {/* Home */}
              <Route exact path={HOME} element={<Home/>} />

              {/* Login */}
              <Route path={LOGIN} element={<Login/>} />

              {/* Explore */}
              <Route path={EXPLORE} element={<Explore/>} />

              {/* Authors */}
              <Route  path={AUTHORS} element={<Authors/>} />
              <Route path={`${AUTHORS}/:authorName`} element={<CurrentAuthor/>} />

              {/* Poems */}
              <Route  path={POEMS} element={<Poems/>} />
              <Route path={`${POEMS}/id/:PoemId`} element={<CurrentPoem/>} />

              {/* Articles */}
              <Route  path={ARTICLES} element={<Articles/>} />
              <Route path={`${ARTICLES}/id/:ArticleId`} element={<CurrentArticle/>} />
              <Route path={`${ARTICLES}/:Topic`} element={<CurrentTopic/>} />

              {/* Stories */}
              <Route path={STORIES} element={<Stories/>} />

              {/* Register */}
              <Route path={REGISTER} element={<Register/>} />

              {/* Admin */}
              <Route path={ADMIN} element={<Admin/>} />
        </Routes>
      </ChakraProvider>
    </Router>
    </> 
    }
    </>
  );
}

export default App;
