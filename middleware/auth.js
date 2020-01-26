export default function({ store, redirect, route }) {
  // ユーザーが認証されていないとき
  if (!store.state.isAuth && route.path !== '/') {
    return redirect('/')
  }
}
