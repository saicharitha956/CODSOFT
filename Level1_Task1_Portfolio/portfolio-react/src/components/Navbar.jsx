function Navbar() {

return (

<header className="navbar">

<div className="logo">
Saicharitha<span>.</span>
</div>

<nav className="nav-center">

<a href="#home">Home</a>
<a href="#about">About</a>
<a href="#skills">Skills</a>
<a href="#projects">Projects</a>
<a href="#certifications">Certifications</a>
<a href="#contact">Contact</a>

</nav>

<div className="nav-right">

<a href="/resume.pdf" className="cv-link">
CV
</a>

<a href="#contact" className="hire-btn">
Hire Me
</a>

</div>

</header>

)

}

export default Navbar