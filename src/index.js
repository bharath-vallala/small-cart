import React from "react"
import ReactDOM from "react-dom"
import App from "./Components/App"
import {Provider} from "react-redux"
import {createStore, applyMiddleware} from "redux"
import  thunk from "redux-thunk"
import {BrowserRouter as Router} from "react-router-dom"
import reducers from "./Reducers/index"
import {persistStore} from "redux-persist"
import {PersistGate} from "redux-persist/integration/react"


const store = createStore(reducers,applyMiddleware(thunk))
const persistor = persistStore(store)

ReactDOM.render(<Router><Provider store={store}><PersistGate persistor={persistor}><App></App></PersistGate></Provider></Router>,
    document.getElementById("root"))