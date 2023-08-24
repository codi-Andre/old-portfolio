const darkMode = () => {
  const themeToggleBtns = document.querySelectorAll("#theme-toggle")

  // State
  const theme = localStorage.getItem("theme")

  // On mount
  theme && document.body.classList.add(theme)

  // handlers
  const handleThemeToggle = () => {
    document.body.classList.toggle("dark")
    if (document.body.classList.contains("dark")) {
      localStorage.setItem("theme", "dark")
    } else {
      localStorage.removeItem("theme")
      document.body.removeAttribute("class")
    }
  }

  // Events
  themeToggleBtns.forEach((btn) =>
    btn.addEventListener("click", handleThemeToggle)
  )
}

export default darkMode
