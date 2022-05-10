import React from 'react'
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink, SideBtnWrap, SidebarRoute } from './sidebarElements'


const Sidebar = ({isOpen, toggle}) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
          <CloseIcon/>
      </Icon>
      <SidebarWrapper>
          <SidebarMenu>
              <SidebarLink to='about' onClick={toggle}>
                ABOUT
              </SidebarLink>
              <SidebarLink to='discover' onClick={toggle}>
                PORTFOLIO
              </SidebarLink>
              <SidebarLink to='services' onClick={toggle}>
                GALLERY
              </SidebarLink>
              <SidebarLink to='signup' onClick={toggle}>
                CONTACT
              </SidebarLink>
          </SidebarMenu>
          <SideBtnWrap>
              <SidebarRoute to='/signin'>
                  Sign In
              </SidebarRoute>
          </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  )
}

export default Sidebar
