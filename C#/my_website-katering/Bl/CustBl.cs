﻿using System;
using Dto;

namespace Bl
{
    public class CustBl
    {
        public static bool Register(CustDto cust)
        {
            Dal.Customer c = Dto.CustDto.Todal(cust);
            bool b = Dal.CustDal.Register(c);
            return b;
        }

        public static CustDto Login(string email, string password)
        {
           Dal.Customer cust = Dal.CustDal.Login(email, password);
            if(cust != null)
            {
                Dto.CustDto c = new Dto.CustDto(cust);
                return c;
            }
            
            return null;
        }
    }
}