import Achtucture from "../components/pages/Achtucture";
import AroundTheWorld from "../components/pages/AroundTheWorld";
import Calculator from "../components/pages/Calculator";
import Fasion from "../components/pages/Fasion";
import Flags from "../components/pages/Flags";
import FluppyBird from "../components/pages/FlappyBird";
import FreeConsultaion from "../components/pages/FreeConsultaion";
import Future from "../components/pages/Future";
import HereAndNow from "../components/pages/HereAndNow";
import Home from "../components/Home";
import {Route} from "react-router-dom";
import LandingPage from "../components/pages/LandingPage";
import LeadingForward from "../components/pages/LeadingForward";
import ManageU from "../components/pages/ManageU";
import MarketApi from "../components/pages/MarketApi";
import MorningCoffe from "../components/pages/MorningCoffe";
import MyAccount from "../components/pages/MyAccount";
import ProductsCart from "../components/pages/ProductsCart";
import Snake from "../components/pages/Snake";
import ThinkOutsideTheBox from "../components/pages/ThinkOutsideTheBox";
import UltimateTikTakToi from "../components/pages/UltimateTikTakToi";
import Weather from "../components/pages/Weather";
import WorkersSalaryManager from "../components/pages/WorkersSalaryManager";
import PageNotFound from "../components/pages/PageNotFound";
import HtmlCss from "../components/HtmlCss";
import JavaScriptBootstrap from "../components/JavaScriptBootstrap";
import React from "../components/React";
import Bcards from "../components/pages/Bcards";

export const route = {
	home: <Route path={"/"} element={<Home />} />,
	acrhtucture: <Route path={"/achtucture"} element={<Achtucture />} />,
	aroundTheWorld: <Route path={"/aroundTheWorld"} element={<AroundTheWorld />} />,
	calculator: <Route path={"/calculator"} element={<Calculator />} />,
	fasion: <Route path={"/fasion"} element={<Fasion />} />,
	flags: <Route path={"/flags"} element={<Flags />} />,
	fluppyBird: <Route path={"/flappyBird"} element={<FluppyBird />} />,
	freeConsultaion: <Route path={"/freeConsultaion"} element={<FreeConsultaion />} />,
	future: <Route path={"/future"} element={<Future />} />,
	hereAndNow: <Route path={"/hereAndNow"} element={<HereAndNow />} />,
	landingPage: <Route path={"/landingPage"} element={<LandingPage />} />,
	leadingForward: <Route path={"/leadingForward"} element={<LeadingForward />} />,
	manageU: <Route path={"/manageU"} element={<ManageU />} />,
	marketApi: <Route path={"/marketApi"} element={<MarketApi />} />,
	morningCoffe: <Route path={"/morningCoffe"} element={<MorningCoffe />} />,
	myAccount: <Route path={"/myAccount"} element={<MyAccount />} />,
	productsCart: <Route path={"/productsCart"} element={<ProductsCart />} />,
	snake: <Route path={"/snake"} element={<Snake />} />,
	thinkOutsideTheBox: (
		<Route path={"/thinkOutsideTheBox"} element={<ThinkOutsideTheBox />} />
	),
	ultimateTikTakToi: (
		<Route path={"/ultimateTikTakToi"} element={<UltimateTikTakToi />} />
	),
	weather: <Route path={"/weather"} element={<Weather />} />,
	workersSalaryManager: (
		<Route path={"/workersSalaryManager"} element={<WorkersSalaryManager />} />
	),
	htmlCss: <Route path={"/htmlCss"} element={<HtmlCss />} />,
	javaScriptBootstrap: <Route path={"/js"} element={<JavaScriptBootstrap />} />,
	react: <Route path={"/react"} element={<React />} />,
	bcards: <Route path={"/bcards"} element={<Bcards />} />,
	projectDetail: <Route path={"/future:id"} element={<Future />} />,
	python: <Route path={"/python"} element={<WorkersSalaryManager />} />,
	pageNotFound: <Route path='*' element={<PageNotFound />} />,
};

export enum path {
	home = "/",
	python = "/python",
	achtucture = "/achtucture",
	aroundTheWorld = "/aroundTheWorld",
	fasion = "/fasion",
	flags = "/flags",
	fluppyBird = "/fluppyBird",
	freeConsultaion = "/freeConsultaion",
	future = "/future",
	hereAndNow = "/hereAndNow",
	landingPage = "/landingPage",
	leadingForward = "/leadingForward",
	manageU = "/manageU",
	marketApi = "/marketApi",
	morningCoffe = "/morningCoffe",
	myAccount = "/myAccount",
	productsCart = "/productsCart",
	snake = "/snake",
	thinkOutsideTheBox = "/thinkOutsideTheBox",
	ultimateTikTakToi = "/ultimateTikTakToi",
	weather = "/weather",
	workersSalaryManager = "/workersSalaryManager",
	htmlCss = "/htmlCss",
	calculator = "/calculator",
	flappyBirds = "/flappyBird",
	javaScriptBootstrap = "/js",
	react = "/react",
	bcards = "/bcards",
	pageNotFound = "*",
}
