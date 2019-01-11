const LocalStrategy = require('passport-local').Strategy;
const JWTStrategy = require('passport-jwt').Strategy;
const ExtractJWT = require('passport-jwt').ExtractJwt;

passport.use(new LocalStrategy(
  {
    usernameField: 'email',
    passwordField: 'password'
  }, 
  function (email, password, cb) {
    connection.query('SELECT admin_password FROM admin WHERE admin_id = ?', email, (err, result) => {
      if(err) return res.status(500).send(err)
      else {
        console.log(result.admin_password)
        const hash = result.data;
        const isSame = bcrypt.compareSync(password, hash);
        if (!isSame) return res.status(500).send('Wrong email or password')
        return res.status(200).send('Connexion effectuée')
      }
    })
  }
));


passport.use(new JWTStrategy({  
  jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),  
  secretOrKey : secret,  
},  
function (jwtPayload, cb) {  
  return cb(null, jwtPayload);
}  
));