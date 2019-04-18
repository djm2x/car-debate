// using System;
// using System.Collections.Generic;
// using System.IdentityModel.Tokens.Jwt;
// using System.Linq;
// using System.Security.Claims;
// using System.Text;
// using Microsoft.Extensions.Options;
// using Microsoft.IdentityModel.Tokens;

// namespace api.Services
// {
//     public interface IUserService
//     {
//         User Authenticate(string login, string password);
//         IEnumerable<User> GetAll();
//     }

//     public class UserService : IUserService
//     {
//         // users hardcoded for simplicity, store in a db with hashed passwords in production applications
//         // private List<User> _users = new List<User>
//         // { 
//         //     new User { Id = 1, FirstName = "Test", LastName = "User", Username = "test", Password = "test" } 
//         // };
//         private readonly RfidContext _context;
//         private readonly AppSettings _appSettings;

//         public UserService(IOptions<AppSettings> appSettings,RfidContext context)
//         {
//             _appSettings = appSettings.Value;
//             _context = context;
//         }

//         public User Authenticate(string login, string password)
//         {
//             var utilisateur = _context.Utilisateurs.SingleOrDefault(x => x.Login == login && x.Password == password);
//             // return null if user not found
//             if (utilisateur == null)
//                 return null;

//             User user = new User{
//                 Id = utilisateur.Id,
//                 Login = utilisateur.Login,
//                 Password = utilisateur.Password,
//                 FullName = utilisateur.FullName,
//                 IdLieu = utilisateur.IdLieu,
//                 IdRole = utilisateur.IdRole
//             };
            

//             // authentication successful so generate jwt token
//             var tokenHandler = new JwtSecurityTokenHandler();
//             var key = Encoding.ASCII.GetBytes(_appSettings.Secret);
//             var tokenDescriptor = new SecurityTokenDescriptor
//             {
//                 Subject = new ClaimsIdentity(new Claim[] 
//                 {
//                     new Claim(ClaimTypes.Name, user.Id.ToString())
//                 }),
//                 Expires = DateTime.UtcNow.AddDays(7),
//                 SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha256Signature)
//             };
//             var token = tokenHandler.CreateToken(tokenDescriptor);
//             user.Token = tokenHandler.WriteToken(token);

//             // remove password before returning
//             user.Password = null;

//             return user;
//         }

//         public IEnumerable<User> GetAll()
//         {
//             // return users without passwords
//             List<User> users = new List<User>();
//             IEnumerable<Utilisateur> utilisateurs = _context.Utilisateurs.ToList();
//             foreach (var u in utilisateurs)
//             {
//                 User user = new User{
//                     Id = u.Id,
//                     Login = u.Login,
//                     FullName = u.FullName,
//                     IdLieu = u.IdLieu,
//                     IdRole = u.IdRole
//                 };
//                 users.Add(user);
//             }
//             return users;
//         }
//     }
// }