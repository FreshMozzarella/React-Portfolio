function Footer(props) {
    return ( 
        <footer className="text-center text-lg-start">
        <div className="container p-4">
          <h5 className="text-uppercase">Footer Content</h5>
          <p>
            Here you can use rows and columns to organize your footer content.
          </p>
        </div>
        <div className="text-center p-3 text" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
          © {new Date().getFullYear()} My Portfolio
        </div>
      </footer>
     );
}

export default Footer;