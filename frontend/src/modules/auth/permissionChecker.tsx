class permissionCheker {
  currentUser;
  constructor(currentUser) {
    this.currentUser = currentUser;
  }

  get isAuthenticated() {
    return true;
  }
}

export default permissionCheker;
