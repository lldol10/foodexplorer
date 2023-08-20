import {Routes, Route} from 'react-router-dom'

import {Home} from '../pages/Home'
import {HomeAdm} from '../pages/Home Adm'
import {Menu} from '../pages/Menu'
import {MenuAdm} from '../pages/Menu Adm'
import {NovoPrato} from '../pages/Novo Prato Adm'
import {EditarPrato} from '../pages/Editar Prato Adm'
import {Prato} from '../pages/Prato'


export function AppRoutes(){
    return(
        <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/adm' element={<HomeAdm />}/>
            <Route path='/menu' element={<Menu />}/>
            <Route path='/menuadm' element={<MenuAdm />}/>
            <Route path='/prato/:id' element={<Prato />}/>
            <Route path='/novoprato' element={<NovoPrato />}/>
            <Route path='/editarprato' element={<EditarPrato />}/>
        </Routes>
    )
}