import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setSidebarShow,setsidebarUnfoldable } from '../slices/admintogleslice'
import { Link } from 'react-router-dom'
import {
  CCloseButton,
  CSidebar,
  CSidebarBrand,
  CSidebarFooter,
  CSidebarHeader,
  CSidebarToggler,
  CSidebarNav,
  CNavLink,
  CNavItem,
  CBadge
} from '@coreui/react'
import CIcon from '@coreui/icons-react'


import { logo } from "../assets/brand/logo"
import { sygnet } from '../assets/brand/sygnet'

// sidebar nav config


const Hospitalsidebar = () => {
  const dispatch = useDispatch()
  const unfoldable = useSelector((state) => state.ui.sidebarUnfoldable)
  const sidebarShow = useSelector((state) => state.ui.sidebarShow)

  return (
    <CSidebar
     style={{fontSize:"20px", width: sidebarShow ? '250px' : '0px'}}
      className="border-end"
      colorScheme="dark"
      position="fixed"
      unfoldable={unfoldable}
      visible={sidebarShow}
      onVisibleChange={(visible) => {
        dispatch(setSidebarShow(visible))
        
      }}
    >
      <CSidebarHeader className="border-bottom"  >
       
        <CCloseButton
          className="d-lg-none"
          dark
          onClick={() => dispatch(setSidebarShow(false))}
        />
      </CSidebarHeader>
    
      <CSidebarNav>
   
    <CNavItem href="#" style={{ fontSize: '18px', }}>
    <Link to="/hospitaladmin/dashboard"> Dashboard</Link></CNavItem>
    <CNavItem href="#" style={{ fontSize: '18px',paddingInlineEnd:"4rem"}}>
    <Link to="/hospitaladmin/diagnostictests" style={{ fontSize: '18px' }}>Diagnostic Tests</Link></CNavItem>
    <CNavItem href="#" style={{ fontSize: '18px' }}>
    <Link to="/hospitaladmin/edittest" style={{ fontSize: '18px' }}>Edit Diagnostic tests</Link></CNavItem>
   
    <CNavItem href="#" style={{ fontSize: '18px' }}>
    <Link to="/hospitaladmin/upcomingtests" style={{ fontSize: '18px' }}>Upcoming appointments</Link> </CNavItem>
    <CNavItem href="#" style={{ fontSize: '18px' }}>
    <Link to="/hospitaladmin/ongoing" style={{ fontSize: '18px' }}>ongoing appointments</Link></CNavItem>
    <CNavItem href="#" style={{ fontSize: '18px' }}>
    <Link to="/hospitaladmin/completed" style={{ fontSize: '18px' }}>Completed appointments</Link></CNavItem>
  </CSidebarNav>
      <CSidebarFooter className="border-top d-none d-lg-flex">
        <CSidebarToggler
          onClick={() => dispatch(setsidebarUnfoldable(!unfoldable))}
        />
      </CSidebarFooter>
    </CSidebar>
  )
}

export default React.memo(Hospitalsidebar)
