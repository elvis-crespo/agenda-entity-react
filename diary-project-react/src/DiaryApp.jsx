import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { HomePage } from './Pages/HomePage'
import { AddAppointmentPage } from './Pages/AddAppointmentPage'
import { AddContactPage } from './Pages/AddContactPage'
import { ConsultAppointmentPage } from './Pages/ConsultAppointmentPage'
import { SearchContactPage } from "./Pages/SearchContactPage";
import { QueryByDate } from './Pages/QueryByDate'
import { QueryByContact } from './Pages/QueryByContact'

export const DiaryApp = () => {
    return (
        <div>
            <Routes>
                <Route path='/' element={<HomePage></HomePage>}></Route>
                <Route path='/add-appoint' element={<AddAppointmentPage></AddAppointmentPage>}></Route>
                <Route path='/add-contact' element={<AddContactPage></AddContactPage>}></Route>
                <Route path='/consult-Appoint' element={<ConsultAppointmentPage></ConsultAppointmentPage>}></Route>
                <Route path='/search-contact' element={<SearchContactPage></SearchContactPage>}></Route>
                <Route path='/query-date' element={<QueryByDate></QueryByDate>}></Route>
                <Route path='/query-contact' element={<QueryByContact></QueryByContact>}></Route>
            </Routes>
        </div>

    )
}
