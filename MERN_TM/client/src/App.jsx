import { Transition } from "@headlessui/react";
import { Fragment, useRef } from "react";
import { IoMdClose } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, Outlet, Route, Routes, useLocation } from "react-router-dom";
import { Toaster } from "sonner";
import { Navbar, Sidebar } from "./components";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import TaskDetail from "./pages/TaskDetail";
import Tasks from "./pages/Tasks";
import Trash from "./pages/Trash";
import Users from "./pages/Users";
import StatusPage from "./pages/Status";
import { setOpenSidebar } from "./redux/slices/authSlice";

// ... rest of the code ... 