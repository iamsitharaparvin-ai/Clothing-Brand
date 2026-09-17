import { Route, Switch } from "wouter";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Wishlist from "./pages/WhishList";
import Blog from "./pages/Blog";
import BlogDetails from "./pages/BlogDetails";

import ProductCard from "./component/ProductCard";

function App() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/home" component={Home} />

      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />

      <Route path="/products" component={ProductCard} />

      <Route path="/about" component={About} />

      <Route path="/blog" component={Blog} />
      <Route path="/blog/:id" component={BlogDetails} />

      <Route path="/contact" component={Contact} />

      <Route path="/wishlist" component={Wishlist} />
    </Switch>
  );
}

export default App;