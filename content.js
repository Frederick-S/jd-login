const interval = setInterval(() => {
  let passwordLogin = document.querySelector('.login-tab-r a')

  if (passwordLogin) {
    passwordLogin.click()

    if (document.querySelector('.login-box').style.display !== 'hidden') {
      clearInterval(interval)
    }
  } else {
    clearInterval(interval)
  }
}, 100)