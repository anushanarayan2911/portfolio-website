import React from 'react'
import { SidebarContainer, 
  Icon, 
  CloseIcon, 
  SidebarWrapper, 
  SidebarMenu, 
  SidebarLink, 
  SideBtnWrap, 
  SidebarRoute 
} from './sidebarElements'


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
              <SidebarLink to='portfolio' onClick={toggle}>
                PORTFOLIO
              </SidebarLink>
              <SidebarLink to='gallery' onClick={toggle}>
                GALLERY
              </SidebarLink>
              <SidebarLink to='contact' onClick={toggle}>
                CONTACT
              </SidebarLink>
          </SidebarMenu>
      </SidebarWrapper>
    </SidebarContainer>
  )
}

export default Sidebar
