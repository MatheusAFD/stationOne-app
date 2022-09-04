import { Route, Routes } from "react-router-dom";
import { StepSucess } from "../components/StepOrder/StepSucess";
import { TabMenu } from "../components/Nav/TabMenu";
import { Login } from "../pages/Account/Login";
import { PasswordReset } from "../pages/Account/PasswordReset";
import { Signup } from "../pages/Account/Signup";
import { Index } from "../pages/Index/Index";
import { Food } from "../pages/MenuItems/Food";
import { Order } from "../pages/MenuItems/Order";
import { Profile } from "../pages/MenuItems/Profile";
import { ProfileSettings } from "../pages/MenuItems/ProfileSettings";
import { StartOrder } from "../pages/OrderForm/StartOrder";
import { Product } from "../pages/Products/Product";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/resetpassword/" element={<PasswordReset />} />
      <Route path="/food" element={[<Food />, <TabMenu />]} />
      <Route path="/order" element={[<Order />, <TabMenu />]} />
      <Route path="/profile" element={[<Profile />, <TabMenu />]} />
      <Route path="/food/:slug" element={<Product />} />
      <Route path="/food/:slug/start-order/" element={<StartOrder />} />
      <Route path="/finish-order/sucess" element={<StepSucess />} />
      <Route path="/profile/edit" element={<ProfileSettings />} />
    </Routes>
  );
}
