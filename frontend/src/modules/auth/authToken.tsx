class authToken {
  static set(token) {
    if (!token) return;
    localStorage.setItem("token", token || null);
  }

  static get() {
    return localStorage.getItem("token" || null);
  }
}

export default authToken;
