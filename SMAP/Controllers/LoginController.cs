//using SMAP.Models;
//using SMAP.Repositories;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Security.Claims;

namespace SMAP.Controllers
{
    //[Authorize(Policy = "RequireAuthenticatedUser")]
    public class LoginController : Controller
    {

        //private readonly ConsultasRepositoryNEXTONE_CC contextConsultaNEXTONE_CC;

        //public LoginController(ConsultasRepositoryNEXTONE_CC contextConsultaNEXTONE_CC)
        //{
        //    this.contextConsultaNEXTONE_CC = contextConsultaNEXTONE_CC;
        //}

        [HttpGet]
        public ActionResult UserLogin()
        {
            return View("UserLogin");
        }


   //     [HttpPost]
   //     public ActionResult UserLogin(UserView modelo)
   //     {
   //         if (ModelState.IsValid)
   //         {
   //             var usuario = contextConsultaNEXTONE_CC.VerificarUsuario(modelo);
   //             if (usuario == null)
   //             {
   //                 // Usuário inválido
   //                 Console.WriteLine("Usuário inválido.");
   //                 return UserInvalid();
   //             }

   //             Console.WriteLine("Usuário válido.");
   //             // Usuário válido
   //             var userClaims = new List<Claim>()
   //             {
   //                 new Claim(ClaimTypes.Name, usuario.Nome),
   //                 new Claim(ClaimTypes.Role, usuario.Perfil)
   //             };

   //             var myIdentity = new ClaimsIdentity(userClaims, "Usuario");
   //             var myProfile = new ClaimsIdentity(userClaims, "Perfil");
   //             var userPrincipal = new ClaimsPrincipal(new[] { myIdentity, myProfile });

   //             // Criando um cookie
   //             HttpContext.SignInAsync(userPrincipal);

   //             // Adicionando informações ao TempData
   //             TempData["SuccessMessage"] = "Login bem-sucedido!";
   //             TempData["UserName"] = usuario.Nome;
   //             TempData["UserProfile"] = usuario.Perfil;



   //             TempData.Keep("UserName");
   //             TempData["UserProfile"] = usuario.Perfil;
   //             TempData.Keep("UserProfile");
   //             return RedirectToAction("Index", "Home");
			//}
   //         Console.WriteLine("Algo de errado aconteceu.");
   //         // Algo de errado aconteceu
   //         return View(modelo);
   //     }

  //      private ActionResult UserInvalid()
  //      {
		//	TempData["ErrorMessage"] = "Credenciais inválidas. Por favor, tente novamente.";

		//	return View("UserLogin");
		//}


        [HttpPost]
        [Route("/logout")]
        public async Task<IActionResult> Logout()
        {
            await HttpContext.SignOutAsync();
            return RedirectToAction("UserLogin", "Login");
        }
    }
}
