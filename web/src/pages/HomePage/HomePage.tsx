import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import Navbar from '../../components/Navbar'

const HomePage = () => {
  return (
    <>
      <MetaTags title="Home" description="Home page" />
      <h1>This is HomePage</h1>
      <img alt="Menu Page" src="/ImgHomePage.png" />

      <Navbar />
    </>
  )
}

export default HomePage
