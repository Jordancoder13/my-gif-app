<form className="auth-form" onSubmit={handleSubmit}>
  <h1>Login</h1>
  <input
    type="email"
    value={email}
    onChange={(e) => setEmail(e.target.value)}
    placeholder="Email"
    required
  />
  <input
    type="password"
    value={password}
    onChange={(e) => setPassword(e.target.value)}
    placeholder="Password"
    required
  />
  <button type="submit">Login</button>
  <div className="link">
    <span>Don&apos;t have an account? <a href="/signup">Sign up</a></span>
  </div>
</form>
