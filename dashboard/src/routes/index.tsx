import { FC } from "react";
import { Routes as RoutesConfig, Route } from "react-router-dom";
//pages
import Home from "../pages/home/Home";
import ScanResults from "../pages/scanResults/ScanResults";
import PageNotFound from "../pages/pageNoFound/PageNotFound";
import NewScanResult from "../pages/newScanResult/NewScanResult";
import DetailScanResult from "../pages/detailScanResult/DetailScanResult";

const Routes: FC = () => {
  return (
    <RoutesConfig>
      <Route path="/" element={<Home />} />
      <Route path="/new" element={<NewScanResult />} />
      <Route path="/results" element={<ScanResults />} />
      <Route path="/results/:id" element={<DetailScanResult />} />
      <Route path="*" element={<PageNotFound />} />
    </RoutesConfig>
  );
};

export default Routes;
