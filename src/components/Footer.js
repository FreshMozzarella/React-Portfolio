function Footer(props) {
    return ( 
        <footer className="text-center text-lg-start">
        <div className="container p-4">
          <p>
            Made with React and Bootstrap
          </p>
        </div>
        <div className="text-center p-3 text" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
          © {new Date().getFullYear()} My Portfolio
        </div>
      </footer>
     );
}

export default Footer;