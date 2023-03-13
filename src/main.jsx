import React from "react"
import ReactDOM from "react-dom/client"
import { ThemeProvider } from "./context/ ThemeContext"
import { BrowserRouter } from "react-router-dom"
import { AuthContextProvider } from "./context/AuthContext"
import { RoleProvider } from "./context/RoleContext"
import { ToastContainer } from "react-toastify"
import App from "./App"
import "./styles/index.css"

//Redux
// import { Provider, connect } from 'react-redux'

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(
    <React.StrictMode>
        <ThemeProvider>
            <AuthContextProvider>
                <RoleProvider>
                    {/* <Provider store={store}> */}
                    <App />
                    <ToastContainer />
                    {/* </Provider> */}
                </RoleProvider>
            </AuthContextProvider>
        </ThemeProvider>
    </React.StrictMode>
)
