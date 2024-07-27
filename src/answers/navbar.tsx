import styled from 'styled-components'
import { devices } from '../constant/device'
import { Form } from 'react-bootstrap'
import { useEffect, useState } from 'react'
import { Search, X } from 'lucide-react'

const TitleComponent = () => {
  return <NavbarTitle>AEON</NavbarTitle>
}

export const NavbarComponent = () => {
  const [screenSize, setScreenSize] = useState(
    typeof window !== 'undefined' ? window.innerWidth : 0
  )

  useEffect(() => {
    // Update screen size when window is resized
    function handleResize () {
      if (typeof window !== 'undefined') {
        setScreenSize(window.innerWidth)
      }
    }

    window.addEventListener('resize', handleResize)

    // clean listener when component finish render
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <>
      {screenSize > 760 ? (
        <NavbarWrapperDesktop>
          <TitleComponent />
          <Navbar>
            {linkList.length > 0 &&
              linkList.map(list => {
                return <NavLink href={list.path}>{list.name}</NavLink>
              })}
          </Navbar>
          <SearchInput type='text' placeholder='Search documentation...' />
        </NavbarWrapperDesktop>
      ) : (
        <NavbarWrapperMobile>
          <NavbarHeaderMobile>
            <TitleComponent />
            <div>
              <Search width={15} height={15} style={{ marginRight: '15px' }} />
              <X width={20} height={20} />
            </div>
          </NavbarHeaderMobile>
          <NavbarMobile>
            {linkList.length > 0 &&
              linkList.map(list => {
                return <NavLink href={list.path}>{list.name}</NavLink>
              })}
          </NavbarMobile>
        </NavbarWrapperMobile>
      )}
    </>
  )
}

const NavbarWrapperDesktop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 15px;
  background-color: #fff;
`

const NavbarWrapperMobile = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  background-color: #fff;
`

const NavbarHeaderMobile = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  border-bottom: 1px solid #e0e0e0;
  padding: 15px;
  background-color: #fff;
`

const Navbar = styled.div`
  flex-grow: 1;
  display: flex;
  gap: 25px;
`

const NavbarMobile = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 15px;
  text-align: left;
`

const SearchInput = styled.input`
  width: 20%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #e0e0e0;

  @media only screen and ${devices.xs} {
    font-size: ${(props: any) => props.theme.smallScreenDetails};
  }

  @media only screen and ${devices.md} {
    font-size: ${(props: any) => props.theme.mediumScreenDetails};
  }
`

const NavLink = styled.a`
  color: #000;
  text-decoration: none;

  @media only screen and ${devices.xxs} {
    font-size: ${(props: any) => props.theme.extraSmallScreenDetails};
  }

  @media only screen and ${devices.xs} {
    font-size: ${(props: any) => props.theme.smallScreenDetails};
  }

  @media only screen and ${devices.md} {
    font-size: ${(props: any) => props.theme.mediumScreenDetails};
  }
`

const NavbarTitle = styled.div`
  padding-right: 45px;
  font-size: 20px;
  color: blue;

  @media only screen and ${devices.xxs} {
    font-size: ${(props: any) => props.theme.smallScreenDetails};
  }
`

const linkList = [
  {
    id: 0,
    name: 'Showcase',
    path: '#/'
  },
  {
    id: 1,
    name: 'Docs',
    path: '#/'
  },
  {
    id: 2,
    name: 'Blog',
    path: '#/'
  },
  {
    id: 3,
    name: 'Analytics',
    path: '#/'
  },
  {
    id: 4,
    name: 'Templates',
    path: '#/'
  },
  {
    id: 5,
    name: 'Enterprise',
    path: '#/'
  }
]
