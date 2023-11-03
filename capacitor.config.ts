import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.test.appflow',
  appName: 'test-app-flow',
  webDir: 'www',
  server: {
    androidScheme: 'https'
  },
  plugins: {
    extConfig: {},
    CapacitorUpdater: {
      autoUpdate: false,
      appReadyTimeout: 1000,
      privateKey: '-----BEGIN RSA PRIVATE KEY-----\nMIIEogIBAAKCAQEAldbi8GS829URB2TcwEiVRWYD+NkgxTI08Wmfpn7wGx7qNx0S\nJE83jRiEdxPR+6VGJayqnhzYyHYls/n5uH54PVNjNKdCT3rBFKHdn2VFbMApsyPb\nvIfy9iWq2gbzL2C3AVZNHg+IKx+jZMnFo9zqvdbzc3H0d8G9u8oCFu8DAHOluZbT\n/Av2a652XEVfQxFMhL5RcnRB+nm3cMOS26QnsG6tqbXS+X+lnAu3KXdmLzkdE9xa\n/4uWz+JFdff3M9h91mBgEOTTK52ECcD98e9NmaaIE77q4cc8VqjFMeUHe7fmZItD\nFGxzAQ/NudlxbBLhdSjdBJ4VHxsbTqraMWuvUQIDAQABAoH/MdFoneMnyhq2Myoy\nD6BA1xZKSDRn5yVfKNtmk0DExYiJjQkPX0dgyneHyAMZdr/vYo35kQTTFOdma2Vx\nsRWkUrk4RcoZ+o3jp0w/pek5AHAZ1q8aDx7f8DNr+UlLZf9BIKHxGr5jCfBUKxi2\nAk2+pwvL4nc3IWCU9Drv6C3EF4u9TEwnrI12xO1jCfhCxA66zggywQiK/fXCQtYV\nSdpDZHhPV4lGxOXwmmE4NrkRk1x3JspepHKWD6MqCmluD+QVM3ITBFCBYqS1lhMp\nC1DVBz4brBVwePcU5H90LZXrO2gttqceCGZutSOsGrY5c+X1D9Ea4+JI57aQybyj\nmbDxAoGBANJwALgnit9XBlUW0XuNx1S4EYVHcGX08IrTnQ6UUkUyQGxDAV4Qkg+W\njqzCwvxBEMbfAYeQ0TmEJSk/kBqB+6oEty1LX67oQOgyGOTigzmWOinIMmm377+y\nPH7bsbftYCu++8zhaPWWH9Bq+xudxLGeie6ELxboVWnf2uXllEdzAoGBALZIFwZV\nVECjvWOBbVGjDQjbJ3KGrozoIjjay6bUPI6LCDb0/BgCwtc2Lm0gqWlARypD2kLD\nlX5dCiPs6GWo29hDgyE68ehRzoscWj2wCn2UE/gy37W899D1FzyAf9VyAHlfgV6g\nq0AVT+58DMbWbksjGBYeToMrJhKmjnzHa9UrAoGBALK3YEUFgBFRLRWSfXH65LB0\napzQIQrVzHt6YEYDfSM7HC9VcJHcbM9ERANAnKvy7jaXKgth1+6K5ax0SQPaJEsu\nGgsjmi1HHeiUs0Ofg2aiyN63IOlbxwb8bhgmqHXV6Pj+B4bmYGdBid9NG9lGUcev\nJuEj7YH86p0x+guIwDc1AoGBAIKcxWLUYbqvmVVjuGF25DAkWO/Hceulql/y51pz\nWbEKDqjSgpDx6YssV7f6X2n7lQLD+/E7FDOnl0yGxT+S73TXa260PgKqG8WyWzc4\nnUu+f1Cpo4MmFKy18iB4MyFOvug5dwnHNu6EVvIcEUuo+v779pZiwP9cO7vBfPgM\nLUhhAoGAf3Ux9iayUE++15mB+mqdglSuM2B1Mrj/1KhKKfydCID6AFyal372HHyH\nK5Tykjr5Dt1ThR/nH0KeKosm0DmDE6CiovOBiMxNYIvFGU7oOa4CHpi9iGlL/Kh3\nPDOhxiGgTd0KoNS6wt2SFUqEaRCg3hK1JTq8G4VnAZnqmPOWEu0=\n-----END RSA PRIVATE KEY-----\n'
    }
  }
};

export default config;
