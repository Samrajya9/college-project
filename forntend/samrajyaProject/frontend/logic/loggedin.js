function getCookie(cookieName) {
  const cookies = document.cookie.split("; ")
  for (let i = 0; i < cookies.length; i++) {
    const cookie = cookies[i].split("=")
    if (cookie[0] === cookieName) {
      return cookie[1]
    }
  }
  return null // Return null if the cookie is not found
}

function isloggedIn() {
  const accessToken = getCookie("access_token")
  if (!accessToken) {
    window.location.href = "/Login/login.html"
    return false
  } else {
    return accessToken
  }
}

export { isloggedIn, getCookie }
