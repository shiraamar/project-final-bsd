using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Dto
{
    public class CustDto
    {
        public string tz { get; set; }
        public string firstName { get; set; }
        public string lastName { get; set; }
        public string tel { get; set; }
        public string email { get; set; }
        public Nullable<int> permissionCode { get; set; }
        public string password { get; set; }
        public CustDto(Dal.Customer c)
        {
            this.tz = c.tz;
            this.firstName=c.tz;
            this.lastName = c.lastName;
            this.tel = c.tel;
            this.email = c.email;
            this.permissionCode = c.permissionCode;
            this.password = c.password;


        }
        public CustDto()
        {

        }
        public static Dal.Customer Todal(CustDto c)
        {
            return new Dal.Customer
            {
                tz = c.tz,
                firstName = c.firstName,
                lastName = c.lastName,
                tel = c.tel,
                email = c.email,
                permissionCode = c.permissionCode
            };
        }
    }
}
