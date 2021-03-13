using System;
using System.Linq;
using System.Collections.Generic;
using Dal;
namespace Dal
{
    public class CustDal
    {
        public static bool Register(Customer cust)
        {

            try
            {
                using (myProjectEntities db = new myProjectEntities())
                {
                    db.Customers.Add(cust);
                    db.SaveChanges();
                }
            }
            catch (Exception e)
            {
               return false;
            }
            return true;

        }

        public static Customer Login(string email, string password)
        {

            try
            {
                using (myProjectEntities db = new myProjectEntities())
                {
                    Customer cust = db.Customers.Where(c => c.email == email && c.password == password).First();
                    return cust;
                }
            }
            catch (Exception e)
            {
                return null;
            }

         
        }
    }
}