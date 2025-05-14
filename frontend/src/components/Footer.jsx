import "./footer.css";

export default function Footer() {
    return (
      <footer>
        <div className="footer-container">
          <div className="footer-info">

            <div className="footer-side">
              <p>Contact</p>
              info.11@gmail.com | +66 986230846
            </div>

            <div className="footer-row">
              <a href="">Privacy Policy</a> | <a href="">Terms and Condition</a> | <a href="">FAQs</a>
            </div>

          </div>

          <p className="copy">&copy; 2025 <span>Oxegène</span>. All rights reserved.</p>
        </div>
      </footer>
    );
  }
  