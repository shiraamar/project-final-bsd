using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http.Cors;
using System.Web.Http;
namespace api3.Controllers
    
{
    [EnableCors("*","*","*")]
[RoutePrefix("api/user")]
    public class UserController : ApiController
    {
        [HttpPost]
        [Route("register")]
        public IHttpActionResult Register([FromBody] Dto.CustDto cust )
        {
            bool b= Bl.CustBl.Register(cust);
            if(b==true)
            return Ok();
             return BadRequest();
        }
        [HttpGet]
        [Route("login/{email}/{password}")]
        public IHttpActionResult Login([FromUri] string email, [FromUri] string password)
        {
            Dto.CustDto c = Bl.CustBl.Login(email, password);
            if (c != null)
                return Ok(c);
            return Ok(false);
        }
    }
}
