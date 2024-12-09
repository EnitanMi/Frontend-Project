import './Footer.css'
import { Link } from 'react-router-dom'
export default function Footer() {
  return (
    <div className='parent-footer'>
        <div className="footer-content">
          <div className="logo-footer">
            <h1>The</h1>
            <h2>Next Gen</h2> 
            <h3>Show</h3>
          </div>
          <div className="footer-others">
          <div className="company"><h1>Company</h1>
          <Link>How it works</Link><br />
          <Link>Talents</Link><br />
          <Link>Events</Link>
          </div>
          <div className="resources"><h1>Resources</h1>
          <Link>Blog post name goes here </Link><br />
          <Link>Blog post name goes here</Link><br />
          <Link>Blog post name goes here</Link><br />
          <Link>Blog post name goes here</Link>
           </div>
          <div className="about"><h1>About</h1>
          <Link>Terms & Condition</Link><br />
          <Link>Privacy Policy</Link>
            </div>
          </div>

        </div>
        <div className="copy-right">
          <p>Copyright © 2023 The NextGen Show</p>
        </div>
    </div>
  )
}
