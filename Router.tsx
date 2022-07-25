import { Route, Routes } from "react-router-dom";
import { TabMenu } from "./src/components/TabMenu";
import { Login } from "./src/pages/Account/Login";
import { PasswordReset } from "./src/pages/Account/PasswordReset";
import { Signup } from "./src/pages/Account/Signup";
import { Index } from "./src/pages/Index/Index";
import { Food } from "./src/pages/MenuItems/Food";
import { Order } from "./src/pages/MenuItems/Order";
import { Profile } from "./src/pages/MenuItems/Profile";
import { ProfileSettings } from "./src/pages/MenuItems/ProfileSettings";
import { StartOrder } from "./src/pages/OrderForm/StartOrder";
import { Product } from "./src/pages/Products/Product";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/resetpassword/" element={<PasswordReset />} />
      <Route path="/food" element={[<Food />, <TabMenu />]} />
      <Route path="/food/:slug" element={<Product />} />
      <Route path="/order" element={[<Order />, <TabMenu />]} />
      <Route path="/food/:slug/start-order" element={<StartOrder />} />
      <Route path="/profile" element={[<Profile />, <TabMenu />]} />
      <Route path="/profile/edit" element={<ProfileSettings />} />
    </Routes>
  );
}
