import './index.css'
import UserInfo from '../UserInfo'
import BlogItem from '../BlogItem'

const Home = () => (
  <div>
    <div className="home-container">
      <UserInfo />
    </div>
    <div data-testid="loader">
      <BlogItem />
    </div>
  </div>
)

export default Home
