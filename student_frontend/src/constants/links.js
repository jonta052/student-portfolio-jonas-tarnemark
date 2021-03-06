import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
const data = [
  {
    id: 1,
    text: "HEM",
    url: "/",
  },
  {
    id: 2,
    text: "Mitt CV",
    url: "/about/",
  },
  {
    id: 3,
    text: "Arbetsprov",
    url: "/projects/",
  },
  {
    id: 4,
    text: "Blog",
    url: "/blog/",
  },
  {
    id: 5,
    text: "Kontakt",
    url: "/contact/",
  },
]

const NavLinks = styled(Link)`
display: none;
padding-right: 20px;
    @media screen and (min-width: 768px) {
        display: flex;
        justify-content: flex-end;
        NavLinks li {
          list-style-type: none;
          color:#E44C2C;
          margin-right: 2rem;
          }
          NavLinks a {
            text-transform: capitalize;
            color: var(--clr-grey-1);
            font-weight: bold;
            letter-spacing: var(--spacing);
            transition: var(--transition);
            padding: 0.5rem 0;
          }
          a:hover {
            color: var(--clr-primary-5);
            box-shadow: 0px 2px var(--clr-primary-5);
          }
    }
`

const tempLinks = data.map(link => {
  return (
    <li key={link.id}>
      <Link to={link.url}>{link.text}</Link>
    </li>
  )
})

export default () => {
  return (
    <NavLinks>
      {tempLinks}
    </NavLinks>
    
  )
}

